export enum MatchFilters {
  SCHEDULED = "Scheduled",
  ONGOING = "Ongoing",
  FINISHED = "Finished",
  ALL = "All",
}

export const StatusVariants = {
  [MatchFilters.SCHEDULED]: "Match preparing",
  [MatchFilters.ONGOING]: "Live",
  [MatchFilters.FINISHED]: "Finished",
  [MatchFilters.ALL]: "Все статусы",
};

export enum MatchesAPIMessages {
  DEFAULT_ERROR = "Произошла ошибка:",
  EMPTY_GET_MATCHES = "Список матчей пуст",
  SUCCESS_GET_MATCHES = "Мачти успешно получены!",
  WS_WRONG_MESSAGE = "Неправильный тип сообщения",
}
