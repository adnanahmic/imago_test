import { useCallback, useEffect, useState } from 'react';
import './MediaList.scss';
import { getMedia } from '../../services/media/Media.service';
import { useNavigate } from 'react-router-dom';
import useAppLoading from '../../hooks/useAppLoading';

const MediaListContainer = () => {
  const navigate = useNavigate();

  const isLoading = useAppLoading();

  const [search, setSearch] = useState('');
  const [medias, setMedias] = useState([]);

  const fetchMedias = useCallback(
    () =>
      getMedia(search)
        .then(({ data }) => setMedias(data.media))
        .catch(() => setMedias([])),
    [search]
  );

  useEffect(() => {
    fetchMedias();
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      fetchMedias();
    }
  };

  const handleClearClick = () => {
    setSearch('');
    fetchMedias();
  };

  return (
    <div className="media-list">
      <section className="media-list__search-bar">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClearClick}>X</button>
      </section>
      <section className="media-list__container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          medias.map((media) => (
            <img
              src={`${process.env.REACT_APP_IMG_URL}${media.preview}`}
              key={media['media-id']}
              onClick={() => navigate(`/view/${media['media-id']}`)}
              loading="lazy"
              height={media.height / 10}
              width={media.width / 10}
            />
          ))
        )}
      </section>
    </div>
  );
};

export default MediaListContainer;
