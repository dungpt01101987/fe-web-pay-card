import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import Image from 'react-bootstrap/Image';

import classNames from "classnames/bind";
import styles from 'page/Application/Home/HorPanel/HorPanel.module.scss';
import image1 from 'assets/img/hor-panel/1.webp';
import imageTitle from 'assets/img/hor-panel/编组 13.png';

const cx = classNames.bind(styles);

const HorPanel = () => {
    const slides = [
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1,
        image1
        // Add more images or content here
    ];

    return (
        <div className={cx('hor-panel')}>
            <Image
                className={cx('hor-panel-title')}
                src={imageTitle}
            />
            <div className={cx('panel-goods')}>
                <ResponsiveCarousel autoPlay interval={3000} infiniteLoop>
                    {slides.map((slide, index) => (
                        <div key={index} className={cx('panel-goods-item')}>
                            <img src={slide} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </ResponsiveCarousel>
            </div>

        </div>
    );
}

export default HorPanel;