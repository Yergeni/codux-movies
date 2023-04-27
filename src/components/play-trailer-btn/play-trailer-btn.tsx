import { useState, useEffect } from 'react';
import movieTrailer from 'movie-trailer';
import { FaPlay } from 'react-icons/fa';
import TrailerModal from '../trailer-modal/trailer-modal';

import styles from './play-trailer-btn.module.scss';

type PlayTrailerBtnProps = {
  movieQuerySearch: string;
};

export default function PlayTrailerBtn({ movieQuerySearch }: PlayTrailerBtnProps) {
  const [open, setOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchTrailer = () => {
      movieTrailer(movieQuerySearch)
        .then((url: string) => {
          if (url) {
            setTrailerUrl(url);
          } else {
            alert('oops! Trailer Not Found');
            setOpen(false);
          }
        })
        .catch((error: any) => {
          console.error('ERROR GETTING MOVIE TRAILER >>> ', error);
          setOpen(false);
        });
    };

    if (open) {
      fetchTrailer();
    }
  }, [open]);

  return (
    <div>
      <button className={styles.button} onClick={() => setOpen(true)}>
        <FaPlay />
        <span>Watch Trailer</span>
      </button>
      <TrailerModal open={open} onClose={() => setOpen(false)} trailerUrl={trailerUrl} />
    </div>
  );
}
