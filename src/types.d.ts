export interface ApiShow {
  id: number;
  name: string;
  rating: {
    average: number;
  };
  image: {
    medium: string;
  };
  summary: string;
  genres: string[];
}

export interface ApiShows {
  score: number;
  show: ApiShow;
}
