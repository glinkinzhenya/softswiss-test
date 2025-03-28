// Импортируем изображения
import { Banner } from '../Banner/Banner';
import offerBgImage01 from '../../assets/bg-space-offer-01.webp';
import offerBgImage01X2 from '../../assets/bg-space-offer-01@2x.webp';
import offerBgImage02 from '../../assets/bg-space-offer-02.webp';
import offerBgImage02X2 from '../../assets/bg-space-offer-02@2x.webp';
import offerBgImage03 from '../../assets/bg-space-offer-03.webp';
import offerBgImage03X2 from '../../assets/bg-space-offer-03@2x.webp';
import offerBgImage04 from '../../assets/bg-space-offer-04.webp';
import offerBgImage04X2 from '../../assets/bg-space-offer-04@2x.webp';
import './Offers.scss';

const banners = [
  {
    size: 'big',
    title: 'Move the borders of reality!',
    description: 'Go on a space adventure - it`s possible with us!',
    imgLinkOne: offerBgImage01,
    imgLinkTwo: offerBgImage01X2,
    link: '/',
  },
  {
    size: 'small',
    title: 'Space is not just stars and planets',
    description: 'Go on a space adventure',
    imgLinkOne: offerBgImage02,
    imgLinkTwo: offerBgImage02X2,
    link: '/',
  },
  {
    size: 'small',
    title: 'For those who dream of stars',
    description: 'Our offer: make your dream come true',
    imgLinkOne: offerBgImage03,
    imgLinkTwo: offerBgImage03X2,
    link: '/',
  },
  {
    size: 'big',
    title: 'Fulfill your fantastic dreams',
    description: 'Space has never been so close',
    imgLinkOne: offerBgImage04,
    imgLinkTwo: offerBgImage04X2,
    link: '/',
  },
];

export const Offers = () => {
  return (
    <section className='offers'>
      <h2 className='offers__title'>Offers</h2>

      <ul className='offers__list'>
        {banners.map((banner, index) => (
          <li key={index}>
            <Banner
              size={banner.size}
              title={banner.title}
              description={banner.description}
              imgOne={banner.imgLinkOne}
              imgTwo={banner.imgLinkTwo}
              linkButton={banner.link}
            />
          </li>
        ))}
      </ul>

      <h2 className='offers__title'>Embark on a space journey</h2>

      <input type='checkbox' id='toggle' class='offers__checkbox' />
      <p class='offers__description'>
        Travelling into space is one of the most exciting and unforgettable adventures that can
        change your life forever. And if you have ever dreamed of exploring stars, planets and
        galaxies, then our company is ready to help you realize this dream. We offer a unique
        experience that will allow you to go on a space journey and see all the secrets of the
        universe. We guarantee that every moment in space will be filled with incredible
        impressions, excitement and new discoveries. Our team of professionals takes care of your
        safety and comfort so that you can fully enjoy your adventure in space. We offer various
        options for space excursions.
      </p>
      <label for='toggle' class='offers__btn'>
      </label>
    </section>
  );
};
