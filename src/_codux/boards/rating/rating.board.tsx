import { createBoard } from '@wixc3/react-board';
import { Rating } from '../../../components/rating/rating';

export default createBoard({
    name: 'Rating',
    Board: () => <Rating />
});
