import React, { createContext, useContext, useReducer } from 'react';
import { IMovie } from '../common/types';

interface IState {
    favorites: IMovie[];
}

const INITIAL_STATE: IState = {
    favorites: [],
};

type ActionType = 'ADD_MOVIE' | 'REMOVE_MOVIE';

interface IFavoriteAction {
    type: ActionType;
    payload: IMovie;
}

const FavoriteReducer = (state: IState, action: IFavoriteAction): IState => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return { favorites: [...state.favorites, action.payload] };
        case 'REMOVE_MOVIE':
            return {
                favorites: [...state.favorites.filter((fav) => fav.id !== action.payload.id)],
            };

        default:
            return state;
    }
};

export const FavoriteContext = createContext<{
    state: IState;
    dispatch: React.Dispatch<IFavoriteAction>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

interface FavoriteContextProviderProps {
    children: React.ReactNode;
}

export const FavoriteContextProvider = ({ children }: FavoriteContextProviderProps) => {
    const [state, dispatch] = useReducer(FavoriteReducer, INITIAL_STATE);

    return (
        <FavoriteContext.Provider value={{ state, dispatch }}>{children}</FavoriteContext.Provider>
    );
};

export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
}