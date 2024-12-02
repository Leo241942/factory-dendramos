import React, { useState } from "react";
// Импорт локального CSS модуля
import styles from "./Slider.module.css";
import 'remixicon/fonts/remixicon.css';

// Данные для слайдов
const sliderData = 
[
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    comment: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    userImage: "/images/slider/ViezhRobert.png",
    ratingImage: "/images/slider/rating.png",
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: 4.5,
    comment: "I like it because I like to travel far and still can connect with high speed.",
    userImage: "/images/slider/YessicaChristy.png",
    ratingImage: "/images/slider/rating.png",
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: 4.5,
    comment: "This is very unusual for my business that currently requires a virtual private network that has high security.",
    userImage: "/images/slider/KimYoungJou.png",
    ratingImage: "/images/slider/rating.png",
  },
];

const Slider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slidersContainer}>
        {sliderData.map((slide, index) => (
          <div className={styles.testimonialCard} key={index}>
            <div className={styles.userContainer}>
              <div className={styles.userInfoContainer}>
                <img className={styles.logoUser} src={slide.userImage} alt={`user ${slide.name}`} />
                <div className={styles.dataUser}>
                  <h1>{slide.name}</h1>
                  <p>{slide.location}</p>
                </div>
              </div>

              <div className={styles.userRating}>
                <p>{slide.rating}</p>
                <img src={slide.ratingImage} alt="rating" />
              </div>
            </div>
            <p className={styles.commentUser}>{`“${slide.comment}”`}</p>
          </div>
        ))}
      </div>

      <div className={styles.sliderControl}>

        <div className={styles.indicators}>
          {sliderData.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>

        <div className={styles.sliderButtos}>
          <button onClick={handleNext} className={styles.sliderNextButton}><i class="ri-arrow-left-line"></i></button>
          <button onClick={handlePrev} className={styles.sliderPrevButton}><i class="ri-arrow-right-line"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
