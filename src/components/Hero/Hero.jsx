import earthImage from '../../assets/earth.webp';
import earthImage2x from '../../assets/earth@2x.webp';
import { Button } from '../Button/Button';
import './Hero.scss';

export const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__container'>
        <div className='hero__content'>
          <h1 className='hero__heading'>
            Discover the vast expanses of <span className='hero__heading--accent'>space</span>
          </h1>
          <p className='hero__text'>
            Where the possibilities are <span className='hero__text--accent'>endless!</span>
          </p>
          <Button link={'/'} />
        </div>
        <div className='hero__image-container'>
          <img
            className='hero__image'
            src={earthImage}
            srcSet={`${earthImage} 1x, ${earthImage2x} 2x`}
            alt='Stylized Earth with a rocket circling around it.'
            width='300'
            height='335'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};
