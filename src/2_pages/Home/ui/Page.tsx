import { useAppSelector } from "@app/appStore";
import { Card } from "@entities/matches";
import { Accordion, SpinnerWrapper } from "@shared/ui";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const matches = useAppSelector((state) => state.matches.value);
  const { isLoading } = useOutletContext<{ isLoading: boolean }>();

  return (
    <main className="container">
      <SpinnerWrapper isLoading={isLoading}>
        <section>
          {matches.length !== 0 ? (
            <Accordion type="multiple" className="flex flex-col gap-3">
              {matches.map((match) => (
                <Card match={match} key={match.title + match.time} />
              ))}
            </Accordion>
          ) : (
            <h2 className="text-3xl font-bold text-primary text-center">
              Ошибка загрузки матчей, повторите попытку
            </h2>
          )}
        </section>
      </SpinnerWrapper>
    </main>
  );
}
