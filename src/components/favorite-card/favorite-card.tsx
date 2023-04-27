import classNames from 'classnames';
import styles from './favorite-card.module.scss';
import { IMovie } from '../common/types';
import { MdDelete } from 'react-icons/md';
import { useFavoriteContext } from '../context/FavoriteContext';

export interface FavoriteCardProps {
    className?: string;
    movie: IMovie;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favorite-cards-and-templates
 */
export const FavoriteCard = ({ className, movie }: FavoriteCardProps) => {
    const { posterPath, title, rating } = movie;
    const { dispatch } = useFavoriteContext();

    const removeFromFavorite = () => {
        dispatch({
            type: 'REMOVE_MOVIE',
            payload: movie,
        });
    };

    return (
        <div className={classNames(styles.root, className)}>
            <img className={styles.favImage} src={posterPath} />
            <div className={styles.favDetails}>
                <p className={styles.favTitle}>{title}</p>
                <span>{rating}</span>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.button} onClick={removeFromFavorite}>
                    <MdDelete fontSize={32} />
                </button>
            </div>
        </div>
    );
};
