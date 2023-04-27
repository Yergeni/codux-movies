import classNames from 'classnames';
import Logo from '../../assets/logo.png';
import { useSearchContext } from '../context/SearchContext';

import styles from './menu.module.scss';
import { Genre, SearchType, SortBy } from './menu.types';

export interface MenuProps {
  className?: string;
}

const sortBy: SortBy[] = [
  { id: 'popularity.desc', name: 'Popularity' },
  { id: 'vote_count.desc', name: 'Most Voted' },
  { id: 'release_date.desc', name: 'Release Date' },
];

const genre: Genre[] = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
  const { dispatch } = useSearchContext();

  const onMenuFilterSelected = (queryStr: string, searchType: SearchType) => {
    if (searchType === 'sortBy') {
      dispatch({ type: 'SORT_BY', payload: queryStr });
    } else {
      dispatch({ type: 'BY_GENRE', payload: queryStr });
    }
  };

  const renderMenuListItem = (list: SortBy[] | Genre[], searchType: SearchType) => {
    return list.map(({ id, name }) => (
      <li
        key={id}
        className={styles.listItem}
        onClick={() => onMenuFilterSelected(id.toString(), searchType)}
      >
        {name}
      </li>
    ));
  };

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" width="50" height="50" />
        <span className={styles.logoText}>CoduxMovies</span>
      </div>
      <span className={styles.title}>Sort By</span>
      <hr className={styles.hr} />
      <ul className={styles.list}>{renderMenuListItem(sortBy, 'sortBy')}</ul>
      <span className={styles.title}>Genre</span>
      <hr className={styles.hr} />
      <ul className={styles.list}>{renderMenuListItem(genre, 'genre')}</ul>
    </div>
  );
};
