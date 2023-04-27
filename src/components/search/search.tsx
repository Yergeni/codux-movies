import { useRef, useEffect } from 'react';
import classNames from 'classnames';
import { useSearchContext } from '../context/SearchContext';

import styles from './search.module.scss';

export interface SearchProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-searchs-and-templates
 */
export const Search = ({ className }: SearchProps) => {
  const {
    searchState: { query },
    dispatch,
  } = useSearchContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current) dispatch({ type: 'BY_QUERY', payload: inputRef.current.value });
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (!query && inputRef.current) inputRef.current.value = '';
  }, [query]);

  return (
    <div className={classNames(styles.root, className)}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.input}
        ref={inputRef}
        onKeyUp={handleKeyUp}
      />
      <button type="button" className={styles.button} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
