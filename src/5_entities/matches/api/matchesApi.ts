import { setMatches } from "@entities/matches/model/matchesSlice";
import { GetMatchesResponse } from "@entities/matches/model/types";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export interface ICustomError {
  data: {
    error: string;
  };
  status: number;
}

const baseQuery = fetchBaseQuery({
  baseUrl: "https://app.ftoyd.com/fronttemp-service",
}) as BaseQueryFn<string | FetchArgs, unknown, ICustomError, object>;

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
          dispatch(setMatches(response.data.matches));
          console.log("Мачти успешно получены!");
        } catch (err) {
          console.error("Произошла ошибка");
        }
      },
    }),
  }),
});

export const { useGetMatchesMutation } = matchesApi;
