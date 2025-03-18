import { Match } from "@entities/matches";
import TeamStats from "@entities/matches/ui/TeamStats/TeamStats";
import TeamIcon from "@shared/ui/assets/team-icon/icon.png";
import AnimatedNumbers from "react-animated-numbers";
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
      <AccordionTrigger className="card__trigger-mobile ">
        <div>
          <img
            src={TeamIcon}
            alt={`Логотип ${awayTeam.name}`}
            className="size-7 md:size-12"
          />
          {awayTeam.name}
        </div>
        <div className="flex-col !gap-1 text-xl">
          <div className="flex items-center gap-2">
            <AnimatedNumbers animateToNumber={awayScore} /> :
            <AnimatedNumbers animateToNumber={homeScore} />
          </div>
          <Badge variant={status} />
        </div>
        <div>
          {homeTeam.name}
          <img
            src={TeamIcon}
            alt={`Логотип ${homeTeam.name}`}
            className="size-7 md:size-12"
          />
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex-col lg:flex-row ">
        <TeamStats team={awayTeam} />
        <div className="lg:hidden text-foreground/10 relative">
          <hr className="" />
          <span className="text-foreground/20 bg-card px-3 absolute left-1/2 t-1/2 -translate-x-1/2 -translate-y-1/2">
            VS
          </span>
        </div>
        <TeamStats team={homeTeam} />
      </AccordionContent>
    </AccordionItem>
  );
}
