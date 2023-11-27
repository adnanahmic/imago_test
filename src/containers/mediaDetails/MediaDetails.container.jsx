import { useParams } from 'react-router-dom';
import './MediaDetails.scss';
import { useEffect, useState } from 'react';
import { getMediaDetails } from '../../services/media/Media.service';
import MediaView from '../../components/MediaView/MediaView';
import MediaLicensee from '../../components/MediaLicensee/MediaLicensee';
import useAppLoading from '../../hooks/useAppLoading';

const MediaDetailsContainer = () => {
  const { mediaId } = useParams();

  const isLoading = useAppLoading();

  const [mediaDetails, setMediaDetails] = useState();

  useEffect(() => {
    getMediaDetails(mediaId)
      .then(({ data }) => setMediaDetails(data))
      .catch(() => setMediaDetails(undefined));
  }, [mediaId]);

  return isLoading ? (
    <p className="loader">Loading...</p>
  ) : (
    <div className="media-details">
      <MediaView
        title={mediaDetails?.title}
        subTitle={mediaDetails?.caption}
        imgSrc={mediaDetails?.mediasrc}
      />
      <MediaLicensee
        usagelicences={mediaDetails?.usagelicences}
        creator={mediaDetails?.creator}
        mediaidpadded={mediaDetails?.mediaidpadded}
        width={mediaDetails?.width}
        height={mediaDetails?.height}
        creationdate={mediaDetails?.creationdate}
        info={mediaDetails?.caption}
      />
    </div>
  );
};

export default MediaDetailsContainer;
