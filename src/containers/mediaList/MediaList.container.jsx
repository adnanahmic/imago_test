import { useEffect, useState } from 'react';
import './MediaList.scss';
import { getMedia } from '../../services/media/Media.service';

const MediaListContainer = () => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    getMedia().then(console.log);
  }, [search]);

  return (
    <div className="media-list">
      <section className="media-list__search-bar">
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setSearch('')}>X</button>
      </section>
      <section className="media-list__container"></section>
    </div>
  );
};

export default MediaListContainer;
