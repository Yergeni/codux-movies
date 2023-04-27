import React, { createContext, useContext, useReducer } from 'react';

interface IState {
  sortBy: string;
  genre: string;
  query: string;
}

const INITIAL_STATE: IState = {
  sortBy: 'popularity.desc',
  genre: '',
  query: '',
};

type ActionType = 'SORT_BY' | 'BY_GENRE' | 'BY_QUERY';

interface ISearchAction {
  type: ActionType;
  payload: string;
}

const SearchReducer = (state: IState, action: ISearchAction): IState => {
  switch (action.type) {
    case 'SORT_BY':
      return { ...state, sortBy: action.payload, query: '' };
    case 'BY_GENRE':
      return { ...state, genre: action.payload, query: '' };
    case 'BY_QUERY':
      return { ...state, query: action.payload };

    default:
      return state;
  }
};

export const SearchContext = createContext<{
  searchState: IState;
  dispatch: React.Dispatch<ISearchAction>;
}>({ searchState: INITIAL_STATE, dispatch: () => {} });

interface SearchContextProviderProps {
  children: React.ReactNode;
}

export const SearchContextProvider = ({ children }: SearchContextProviderProps) => {
  const [searchState, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider value={{ searchState, dispatch }}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
