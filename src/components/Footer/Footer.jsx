import rocketIcon from '../../assets/rocket-icon.webp';
import rocketIcon2x from '../../assets/rocket-icon@2x.webp';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__icon-container">
          <img
            className="footer__icon"
            src={rocketIcon}
            srcSet={`${rocketIcon} 1x, ${rocketIcon2x} 2x`}
            alt="Rocket."
            loading="lazy"
          />
        </div>
        <p className="footer__heading">Exciting space adventure!</p>
      </div>
    </footer>
  );
};
