import React, {FunctionComponent, useState} from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  "./PromoSlider.scss"


type PrevArrowProps = {
    onClick: () => void;
};

type NextArrowProps = {
    onClick: () => void;
};

const PrevArrow: FunctionComponent<PrevArrowProps> = ({ onClick }) => {
    return (
        <div className="prev-arrow" onClick={onClick}>
            <img src="/images/promo_left_arrow.svg" alt="Назад" />
        </div>
    );
};

const NextArrow: FunctionComponent<NextArrowProps> = ({ onClick }) => {
    return (
        <div className="next-arrow" onClick={onClick}>
            <img src="/images/promo_right_arrow.svg" alt="Вперед" />
        </div>
    );
};



export const ProductSlider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    // Обработка нажатия стрелки "назад"
    const handlePrevArrowClick = () => {
        setCurrentSlide(currentSlide - 1);
    };
    // Обработка нажатия стрелки "вперед"
    const handleNextArrowClick = () => {
        setCurrentSlide(currentSlide + 1);
    };
    const settings = {
        dots: true, // Точки индикатора
        infinite: true, // Бесконечное прокручивание
        speed: 500, // Скорость анимации
        slidesToShow: 4, // Количество отображаемых элементов
        slidesToScroll: 1, // Количество элементов, которые прокручиваются за раз
        initialSlide: currentSlide, // Текущий слайд
        prevArrow: <PrevArrow onClick={handlePrevArrowClick}/>, // Компонент для стрелки "назад"
        nextArrow: <NextArrow onClick={handleNextArrowClick}/>, // Компонент для стрелки "вперед"
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="product-slider">
            <Slider {...settings}>
                <div className="product">
                    <img src="/images/product1.png" alt="Product 1" />
                    <p>Легкий, брусок 180 г</p>
                </div>
                <div className="product">
                    <img src="/images/product2.png" alt="Product 2" />
                    <p>Легкий, слайсы
                        120 г</p>
                </div>
                <div className="product">
                    <img src="/images/product3.png" alt="Product 3" />
                    <p>Сливочный, брусок
                        200, 300 г</p>
                </div>
                <div className="product">
                    <img src="/images/product4.png" alt="Product 4" />
                    <p>Сливочный, слайсы
                        130, 250 г</p>
                </div>
                <div className="product">
                    <img src="/images/product2.png" alt="Product 5" />
                    <p>Легкий, слайсы
                        225 г</p>
                </div>
            </Slider>
        </div>
    );
};
