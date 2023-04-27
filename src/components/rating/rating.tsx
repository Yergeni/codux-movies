import classNames from 'classnames';
import styles from './rating.module.scss';

export interface RatingProps {
  className?: string;
  value: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-ratings-and-templates
 */
export const Rating = ({ className, value }: RatingProps) => {
  const isLowRating = value > 0 && value < 5;
  const isMediumRating = value >= 5 && value < 7;
  const isHightRating = value >= 7;
  const renderRating = value > 0 ? value.toFixed(1) : 'NR';

  return (
    <div
      className={classNames(
        styles.root,
        className,
        { [`${styles.hight}`]: isHightRating },
        { [`${styles.medium}`]: isMediumRating },
        { [`${styles.low}`]: isLowRating }
      )}
    >
      {renderRating}
    </div>
  );
};
