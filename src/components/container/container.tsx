import classNames from 'classnames';
import { CardList } from '../card-list/card-list';
import { Search } from '../search/search';

import styles from './container.module.scss';

export interface ContainerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-containers-and-templates
 */
export const Container = ({ className }: ContainerProps) => {
    return <div className={classNames(styles.root, className)}>
        <Search />
        <CardList />
    </div>;
};
