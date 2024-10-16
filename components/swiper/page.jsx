"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from './page.module.css';

export default function SwiperComponent() {
    return (
        <div className={styles.swiperBox}>
            <Swiper
                className={styles.swiperContainer}
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 3000 }}
                navigation
                pagination={{ clickable: true }}
                speed={500}
            >
                <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: 'url(/reestrazia.webp)' }}></SwiperSlide>
                <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: 'url(/business.webp)' }}></SwiperSlide>
                <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: 'url(/vidstrochka.webp)' }}></SwiperSlide>
                <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: 'url(/vlk.webp)' }}></SwiperSlide>
                <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: 'url(/alimenty.webp)' }}></SwiperSlide>
                <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: 'url(/podatkova.webp)' }}></SwiperSlide>
                <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: 'url(/gospodarski.webp)' }}></SwiperSlide>
            </Swiper>
        </div>
    );
}
