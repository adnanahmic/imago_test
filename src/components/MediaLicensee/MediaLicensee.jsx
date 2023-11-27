import './MediaLicensee.scss';
import PropTypes from 'prop-types';

const MediaLicensee = ({
  creator,
  mediaidpadded,
  width,
  height,
  creationdate,
  info,
  usagelicences
}) => {
  const creationDate = new Date(creationdate);
  const minCredit = Math.min(...(usagelicences?.map((license) => license.credits) ?? []));

  return (
    <section className="media-licensee">
      <h4>Choose your Licensee</h4>
      <div className="media-licensee__billing">
        <div className="media-licensee__billing-header">
          <div>
            <span>Premium RF</span>
          </div>
          <div>
            <span className="media-licensee__billing-caption">from</span>
            <span>{minCredit} Credits</span>
          </div>
        </div>
        {usagelicences?.map((license) => (
          <div className="media-licensee__billing-row" key={license.languagePointer}>
            <div className="media-licensee__credit-row">
              <div>
                <input type="checkbox" />
                <span>{license.name}</span>
              </div>
              <span>{license.credits} Credits</span>
            </div>
            <div>
              <span className="media-licensee__billing-caption">
                {license.currency} {license.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="media-licensee__actions">
        <button>Add to basket</button>
        <button>Buy now</button>
      </div>
      <div className="media-licensee__details">
        <div className="media-licensee__row">
          <span>CREDIT</span>
          <span>{creator}</span>
        </div>
        <div className="media-licensee__row">
          <span>IMAGE ID</span>
          <span>{mediaidpadded}</span>
        </div>
        <div className="media-licensee__row">
          <span>MAX SIZE</span>
          <span>
            {width}x{height} PIXELS
          </span>
        </div>
        <div className="media-licensee__row">
          <span>DATE</span>
          <span>
            {creationDate.getDate()}.{creationDate.getMonth()}.{creationDate.getFullYear()}
          </span>
        </div>
        <div className="media-licensee__row">
          <span>INFO</span>
          <span>{info}</span>
        </div>
      </div>
    </section>
  );
};

MediaLicensee.propTypes = {
  usagelicences: PropTypes.array,
  creator: PropTypes.string,
  mediaidpadded: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  creationdate: PropTypes.string,
  info: PropTypes.string
};

export default MediaLicensee;
