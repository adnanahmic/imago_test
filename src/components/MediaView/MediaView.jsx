import PropTypes from 'prop-types';
import './MediaView.scss';

const MediaView = ({ title, subTitle, imgSrc }) => {
  return (
    <section className="media-view">
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <img src={imgSrc} />
    </section>
  );
};

MediaView.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  imgSrc: PropTypes.string
};

export default MediaView;
