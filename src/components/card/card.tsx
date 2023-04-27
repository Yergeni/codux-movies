import { useState } from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';
import { IMovie } from '../common/types';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useFavoriteContext } from '../context/FavoriteContext';
import { Rating } from '../rating/rating';
import PlayTrailerBtn from '../play-trailer-btn/play-trailer-btn';

export interface CardProps {
  className?: string;
  movie: IMovie;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className, movie }: CardProps) => {
  const { posterPath, title, rating, description } = movie;
  const {
    state: { favorites },
    dispatch,
  } = useFavoriteContext();

  const isFavoriteMovie = favorites.find((favMovie) => favMovie.id === movie.id);
  const isMediumTitle = title.length > 18 && title.length < 30;
  const isLongTitle = title.length >= 30;
  const descMaxChars = isMediumTitle ? 150 : isLongTitle ? 80 : 200;

  const addToFavorite = () => {
    if (isFavoriteMovie) {
      dispatch({ type: 'REMOVE_MOVIE', payload: movie });
    } else {
      dispatch({ type: 'ADD_MOVIE', payload: movie });
    }
  };

  return (
    <div className={classNames(styles.root, className)}>
      <img src={posterPath} className={styles.cardImage} />
      <div className={styles.details}>
        <h1 className={styles.title}>{title}</h1>
        <Rating value={rating ?? 0} />
        <p className={styles.description}>
          {description ? `${description?.substring(0, descMaxChars)}...` : null}
        </p>
        <div className={styles.btnsContainer}>
          <button className={styles.button} onClick={addToFavorite}>
            {isFavoriteMovie ? (
              <FaHeart fontSize={16} color="#8C1BAB" />
            ) : (
              <FaRegHeart fontSize={16} color="#8C1BAB" />
            )}
          </button>
          <PlayTrailerBtn movieQuerySearch={movie.title || movie.name} />
        </div>
      </div>
    </div>
  );
};
