export type SortById = 'popularity.desc' | 'vote_count.desc' | 'release_date.desc'
export type SortByName = 'Popularity' | 'Most Voted' | 'Release Date'

export type SortBy = {
  id: SortById,
  name: SortByName
}

export type GenreName =
  | 'Action'
  | 'Adventure'
  | 'Animation'
  | 'Comedy'
  | 'Crime'
  | 'Documentary'
  | 'Drama'
  | 'Family'
  | 'Fantasy'
  | 'History'
  | 'Horror'
  | 'Music'
  | 'Mystery'
  | 'Romance'
  | 'Science Fiction'
  | 'TV Movie'
  | 'Thriller'
  | 'War'
  | 'Western';

export type Genre = {
  id: number;
  name: GenreName;
};

export type SearchType = 'sortBy' | 'genre'