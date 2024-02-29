import * as React from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import * as styles from './slider.module.css'; 


// スライドのデータを配列で定義
const slidesData = [
    { title: "リニューアルキャンペーン", genre:"キャンペーン",image: "/img/image1.jpg" },
    { title: "HYKEとコラボレーション", genre:"THE NORTH FACE", image: "/img/image2.jpg" },
    { title: "好みのウェアでランニン...", genre:"特集", image: "/img/image3.jpg" },
    { title: "パーテックシールドエア...", genre:"Goldwin", image: "/img/image4.jpg" },
    { title: "花粉の季節でも外出を楽...", genre:"特集", image: "/img/image5.jpg" },
    { title: "GREEN BATONに参加...", genre:"お知らせ", image: "/img/image6.jpg" },
    { title: "リニューアル記念　限定ア...", genre:"THE NORTH FACE", image: "/img/image7.jpg" },
    { title: "２月２０日 リニューアルオ...", genre:"お知らせ", image: "/img/image8.jpg" },
  ];
  
  
  const Slider = () => {
    const swiperRef = useRef(null);
  
  
    return (
      <div className={styles.swiperContainer}>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
                <div key={index}>
                    <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className={styles.cardImage}     
                    />
                    <div className={styles.cardTitleContainer}>
                        <p className={styles.cardGenre}>{slide.genre}</p>
                        <p className={styles.cardTitle}>{slide.title}</p>
                    </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default Slider;