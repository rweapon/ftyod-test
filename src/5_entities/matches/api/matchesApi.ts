import { MatchesAPIMessages } from "@entities/matches/model/config";
import { setMatches } from "@entities/matches/model/matchesSlice";
import {
  GetMatchesResponse,
  ICustomError,
  WSGetMatchesResponse,
} from "@entities/matches/model/types";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { BASE_URLS } from "@shared/model/config";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URLS.REST,
}) as BaseQueryFn<string | FetchArgs, unknown, ICustomError, object>;

let ws: WebSocket | null = null;

export const matchesApi = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getMatches: builder.mutation<GetMatchesResponse, void>({
      query: () => ({
        url: "/fronttemp",
        method: "GET",
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          const response = await result.data;

          if (!response.data.matches.length) {
            throw new Error(MatchesAPIMessages.EMPTY_GET_MATCHES);
          }

          dispatch(setMatches(response.data.matches));
          console.log(MatchesAPIMessages.SUCCESS_GET_MATCHES);
        } catch (err) {
          console.error(MatchesAPIMessages.DEFAULT_ERROR, err);
          dispatch(setMatches([]));
        }
      },
      async onCacheEntryAdded(
        _arg,
        { dispatch, cacheDataLoaded, cacheEntryRemoved }
      ) {
        if (ws) {
          ws.close();
          ws = null;
        }

        ws = new WebSocket(BASE_URLS.WS);

        try {
          await cacheDataLoaded;

          const listener = (event: MessageEvent) => {
            const message: WSGetMatchesResponse = JSON.parse(event.data);

            if (message.type !== "update_matches")
              throw new Error(MatchesAPIMessages.WS_WRONG_MESSAGE);
            dispatch(setMatches(message.data));
          };
          ws.addEventListener("message", listener);
        } catch (err) {
          console.error(MatchesAPIMessages.DEFAULT_ERROR, err);
          dispatch(setMatches([]));
        }

        await cacheEntryRemoved;
        if (ws) {
          ws.close();
          ws = null;
        }
      },
    }),
  }),
});

export const { useGetMatchesMutation } = matchesApi;
