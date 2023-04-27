import classNames from 'classnames';
import { useFavoriteContext } from '../context/FavoriteContext';
import { FavoriteCard } from '../favorite-card/favorite-card';
import styles from './favorite.module.scss';

export interface FavoriteProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favorites-and-templates
 */
export const Favorite = ({ className }: FavoriteProps) => {
    const {
        state: { favorites },
    } = useFavoriteContext();

    return (
        <div className={classNames(styles.root, className)}>
            <h1>Favorites</h1>
            {favorites.length
                ? favorites.map((favMovie) => <FavoriteCard key={favMovie.id} movie={favMovie} />)
                : null}
        </div>
    );
};
