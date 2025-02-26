import { Match } from "@entities/matches";
import TeamStats from "@entities/matches/ui/TeamStats/TeamStats";
import TeamIcon from "@shared/assets/team-icon/icon.png";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
} from "@shared/ui";

type Props = { match: Match };
export default function Card({ match }: Props) {
  const { awayTeam, homeTeam, awayScore, homeScore, title, time, status } =
    match;
  return (
    <AccordionItem value={title + time}>
      <AccordionTrigger className="*:flex *:items-center *:gap-3">
        <div>
          <img
            src={TeamIcon}
            alt={`Логотип ${awayTeam.name}`}
            className="size-12"
          />
          {awayTeam.name}
        </div>
        <div className="flex-col !gap-1 text-xl ">
          {awayScore} : {homeScore}
          <Badge variant={status} />
        </div>
        <div>
          {homeTeam.name}
          <img
            src={TeamIcon}
            alt={`Логотип ${homeTeam.name}`}
            className="size-12"
          />
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <TeamStats team={awayTeam} />
        <TeamStats team={homeTeam} />
      </AccordionContent>
    </AccordionItem>
  );
}
