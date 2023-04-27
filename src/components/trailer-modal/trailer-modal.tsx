import { useRef, useEffect } from 'react';
import ReactDom from 'react-dom';
import ReactPlayer from 'react-player/youtube';

import styles from './trailer-modal.module.scss';

type TrailerModalProps = {
  open: boolean;
  onClose: () => void;
  trailerUrl: string;
};

export default function TrailerModal({ open, onClose, trailerUrl }: TrailerModalProps) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div
        className={styles.backdrop}
        onClick={onClose}
      ></div>
      <div className={styles.modal}>
        {trailerUrl && <ReactPlayer url={trailerUrl} playing controls width='100%'  />}
      </div>
    </>,
    document.getElementById('modal-portal') as HTMLElement
  );
}
