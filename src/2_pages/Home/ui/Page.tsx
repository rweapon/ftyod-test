import { useAppSelector } from "@app/appStore";
import { Card, useGetMatchesMutation } from "@entities/matches";
import { CACHE_KEYS } from "@shared/constants";
import { Accordion, SpinnerWrapper } from "@shared/ui";

export default function Home() {
  const matches = useAppSelector((state) => state.matches.value);
  const [_, { isLoading, isError }] = useGetMatchesMutation({
    fixedCacheKey: CACHE_KEYS.GET_MATCHES,
  });

  return (
    <main className="container">
      <SpinnerWrapper isLoading={isLoading}>
        <section>
          {isError ? (
            <h2 className="text-3xl font-bold text-primary text-center">
              Ошибка загрузки матчей, повторите попытку
            </h2>
          ) : (
            <Accordion type="multiple" className="flex flex-col gap-3">
              {matches.map((match) => (
                <Card match={match} key={match.title + match.time} />
              ))}
            </Accordion>
          )}
        </section>
      </SpinnerWrapper>
    </main>
  );
}
