import { Link } from 'react-router-dom';
import { A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { peruvianCurrencyFormat } from '../../utils/utils';
import ContainersImage from '../common/containers/ContainersImage';

const HomeNewProducts = ({ bestSellersProducts }) => {
    
  return (
    <div className='container'>
        <div className='py-2'>
            <h2 className='section__title section__title--lg'>Nuevos productos</h2>
        </div>
        <Swiper
        tag='section'
        wrapperTag='div'
        className='min-h-500'
        modules={[A11y, Autoplay, Pagination]}
        speed={500}
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={{ clickable: true }}
        preloadImages={false}
        breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
                width: 1024,
                slidesPerView: 4,
              },
          }}
        spaceBetween={30}
        >
        {bestSellersProducts.map(element => {
            const { nombre, slug, imagen, precio } = element;
            return (
            <SwiperSlide
                key={element.id}
                tag='section'
                className='card card--products'
            >
                <Link to={`/productos/${slug}`}>
                  <ContainersImage
                    src={imagen}
                    alt={nombre}
                    className="card__header-img card__header-img--products"
                  />
                </Link>
                <div className="card__body card__body--products">
                  <h3 className="card__subtitle card__subtitle--sm">Calzado Dep</h3>
                  <Link to={`/productos/${slug}`} className="card__title">{nombre}</Link>
                  <h4 className="card__highlighted mt-auto">{peruvianCurrencyFormat(precio)}</h4>
                  <a
                    href={`https://api.whatsapp.com/send?phone=51949495862&text=Deseo comprar el producto ${nombre}, marca: Calzado Dep`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--primary"
                  >
                    Comprar
                  </a>
                </div>
            </SwiperSlide>
            );
        })}
        </Swiper>
    </div>
  );
};

export default HomeNewProducts;