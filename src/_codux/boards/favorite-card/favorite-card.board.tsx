import { createBoard } from '@wixc3/react-board';
import { FavoriteCard } from '../../../components/favorite-card/favorite-card';

export default createBoard({
    name: 'FavoriteCard',
    Board: () => (
        <FavoriteCard
            movie={{
                id: '123',
                rating: 2,
                releaseDate: '2001',
                title: 'Avatar',
                posterPath: 'https://m.media-amazon.com/images/I/41kTVLeW1CL.jpg',
                btnText: 'x',
            }}
        />
    ),
});
