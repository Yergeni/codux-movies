import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';

import { useSearchContext } from '../context/SearchContext';
import { Card } from '../card/card';
import { IMovie } from '../common/types';
import NoPoster from '../../assets/no-poster.png';

import styles from './card-list.module.scss';

export interface CardListProps {
  className?: string;
}

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_IMAGE_PATH = 'https://image.tmdb.org/t/p/w300/';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-card-lists-and-templates
 */
export const CardList = ({ className }: CardListProps) => {
  const {
    searchState: { sortBy, genre, query },
  } = useSearchContext();
  const [movies, setMovies] = useState<IMovie[]>([]);

  const config = useMemo(() => {
    return {
      method: 'get',
      url: query ? '/search/movie' : '/discover/movie',
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        api_key: API_KEY,
        sort_by: sortBy,
        with_genres: genre,
        query,
      },
    };
  }, [sortBy, genre, query]);

  useEffect(() => {
    axios(config)
      .then((res) => {
        const { results } = res.data;
        const serializedMovies = results.map((item: any) => {
          return {
            id: item.id,
            title: item.title,
            name: item.name,
            originalTitle: item.original_title,
            description: item.overview,
            posterPath: item.poster_path ? TMDB_IMAGE_PATH + item.poster_path : NoPoster,
            rating: item.vote_average,
            releaseDate: item.release_date,
          } as IMovie;
        });
        setMovies(serializedMovies);
      })
      .catch((error) => console.error(error));
  }, [config.params.sort_by, config.params.with_genres, config.params.query]);

  return (
    <div className={classNames(styles.root, className)}>
      {movies.length ? (
        movies.map((movie) => <Card key={movie.id} movie={movie} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
