export type UserWithCards = {
  id: string;
  name: string | null;
  email: string;
  password: string;
  image: string | null;
  role: string;
  cardsId: string[];
  cards: {
    id: string;
    absoluteNum: number;
    playerName: string | null;
    teamById: string | null;
    teamNum: number;
    ownersById: string[];
  }[];
};

export type CardWithTeam = {
  id: string;
  absoluteNum: number;
  playerName: string | null;
  teamById: string | null;
  teamNum: number;
  ownersById: string[];
  team: {
    id: string;
    teamName: string;
    image: string | null;
    yearsOfChampionship: string[];
    countryById: string | null;
    isPlayingThisEdition: boolean;
  } | null;
};

export type CardComplete = {
  id: string;
  absoluteNum: number;
  playerName: string | null;
  teamById: string | null;
  teamNum: number;
  ownersById: string[];
  team: {
    country: {
      id: string;
      countryName: string;
      image: string;
    } | null;
    id: string;
    teamName: string;
    image: string | null;
    yearsOfChampionship: string[];
    countryById: string | null;
    isPlayingThisEdition: boolean;
  } | null;
};

export type TeamWithCountry = {
        country: {
          id: string;
          countryName: string;
          image: string;
        } | null;
        id: string;
        teamName: string;
        image: string | null;
        yearsOfChampionship: string[];
        countryById: string | null;
        isPlayingThisEdition: boolean;
      
}
