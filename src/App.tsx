import { Menu } from './components/menu/menu';
import { Favorite } from './components/favorite/favorite';
import { Container } from './components/container/container';
import { SearchContextProvider } from './components/context/SearchContext';
import { FavoriteContextProvider } from './components/context/FavoriteContext';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <SearchContextProvider>
        <Menu />
        <FavoriteContextProvider>
          <Container />
          <Favorite />
        </FavoriteContextProvider>
      </SearchContextProvider>
    </div>
  );
}

export default App;
