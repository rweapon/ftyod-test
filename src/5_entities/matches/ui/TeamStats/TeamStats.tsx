import { Team } from "@entities/matches/model/types";
import PlayerIcon from "@shared/assets/player-icon/icon.png";

type Props = { team: Team };
export default function TeamStats({ team }: Props) {
  return (
    <div className="text-foreground/40 [&_span]:text-foreground">
      <div className="w-full flex flex-col md:flex-row gap-2 mb-2">
        {team.players.map((player) => (
          <div
            key={player.username}
            className="flex-grow flex justify-between gap-2 bg-popover rounded-md py-2 px-3"
          >
            <div className="card__stats">
              <img
                src={PlayerIcon}
                alt={`Аватар ${player.username}`}
                className="size-8 rounded-full"
              />
              <span>{player.username}</span>
            </div>
            <p className="card__stats">
              Убийств: <span>{player.kills}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between bg-popover rounded-md p-4">
        <p className="card__stats">
          Очков:
          <span>
            {team.points > 0 && "+"}
            {team.points}
          </span>
        </p>
        <p className="card__stats">
          Место:
          <span>{team.place}</span>
        </p>
        <p className="card__stats">
          Всего убийств:
          <span>{team.total_kills}</span>
        </p>
      </div>
    </div>
  );
}
