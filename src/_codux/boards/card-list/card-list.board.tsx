import { createBoard } from '@wixc3/react-board';
import { CardList } from '../../../components/card-list/card-list';

export default createBoard({
    name: 'CardList',
    Board: () => <CardList />
});
