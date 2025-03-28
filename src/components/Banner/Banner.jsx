import { Button } from '../Button/Button';
import './Banner.scss';

export const Banner = ({ size, title, description, imgOne, imgTwo, linkButton }) => {
  const backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), 
    image-set(url('${imgOne}') 1x, url('${imgTwo}') 2x)`;

  return (
    <div
      className={`banner ${size === 'big' ? 'banner--big' : 'banner--small'}`}
      style={{ backgroundImage }}
    >
      <h3
        className={`banner__title ${
          size === 'big' ? 'banner__title--big' : 'banner__title--small'
        }`}
      >
        {title}
      </h3>
      <p className='banner__description'>{description}</p>
      <Button type={'transparent'} link={linkButton} />
    </div>
  );
};
