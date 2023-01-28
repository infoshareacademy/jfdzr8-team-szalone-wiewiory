import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import img1 from "./SliderImg/sport1.jpg";
import img2 from "./SliderImg/sport2.jpg";
import img3 from "./SliderImg/sport3.jpg";
import img4 from "./SliderImg/sport4.jpg";
import img5 from "./SliderImg/sport5.jpg";
import img6 from "./SliderImg/fitness1.png";
import img7 from "./SliderImg/running1.jpg";

import icon1 from "./SliderImg/Icons/Tennis.png";
import icon2 from "./SliderImg/Icons/Swimming.png";
import icon3 from "./SliderImg/Icons/Running.png";
import icon4 from "./SliderImg/Icons/Gym.png";
import icon5 from "./SliderImg/Icons/Bike.png";
import icon6 from "./SliderImg/Icons/Basket.png";
import icon7 from "./SliderImg/Icons/Climbing.png";
import icon8 from "./SliderImg/Icons/Box.png";
import icon9 from "./SliderImg/Icons/Hiking.png";

import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <section>

        <h1 className={styles.homePageTitle}>FITPALS</h1>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide>
            <p className={styles.description}>
              Chcesz pobiegać, ale nie masz z kim?
            </p>
            <img src={img1} className={styles.sportImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.description}>
              Masz ochotę pograć w kosza, ale nie sam?
            </p>
            <img src={img2} className={styles.sportImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.description}>
              A może szukasz towarzystwa do meczu piłki nożnej?
            </p>
            <img src={img3} className={styles.sportImg} alt="" />
            <p className={styles.description}></p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.description}>Chcesz poznawać nowych ludzi?</p>
            <img src={img4} className={styles.sportImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.description}>
              Szukasz przyjaciela, partnera, sportowego towarzystwa?
            </p>
            <img src={img5} className={styles.sportImg} alt="" />
          </SwiperSlide>
        </Swiper>
        <p className={styles.homePageText}>Fitpal działa od 15 lat, skorzystało z niego ponad 200000 osób. Jesteś tu bezpieczny - profile są indywidualnie weryfikowane, dlatego wiarygodność uczestników jest bardzo wysoka. Twoja prywatność jest dla nas priorytetem!</p>
      </section>

      <section>
        <h2 className={styles.sliderText}>Przykładowe aktywności</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href="Tennis">
              <img src={icon1} className={styles.icon} alt=""></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="Swimming">
              <img src={icon2} className={styles.icon} alt=""></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="Running">
              <img src={icon3} className={styles.icon} alt=""></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="Gym">
              <img src={icon4} className={styles.icon} alt=""></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="Bike">
              <img src={icon5} className={styles.icon} alt=""></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="Basket">
              <img src={icon6} className={styles.icon} alt=""></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="Climbing">
              <img src={icon7} className={styles.icon} alt=""></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="Box">
              <img src={icon8} className={styles.icon} alt=""></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="Hiking">
              <img src={icon9} className={styles.icon} alt=""></img>
            </a>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className={styles.block}>
        <div className={styles.blockDescriptionFit}>
          <img src={img6} className={styles.fitnessImg} alt="" />
          <p className={styles.blockText}>
            Niezależnie od tego, czy szukasz osób, które zmobilizują Cię do
            treningu, miłości z którą połączy się pasja sportu, inspiracji,
            rozrywki czy poprawy nastroju dzięki wspólnej aktywności -
            znajdziesz to w Fitpal!
          </p>
        </div>
        <div className={styles.blockDescriptionRun}>
          <img src={img7} className={styles.runningImg} alt="" />
          <p className={styles.blockText}>
            Fitpal pomaga pozanać się tym, których łączą wspólne zainteresownia.
            Zbliża ludzi, pokazując jak niedaleko mają do siebie. Wspiera rozwój
            fizyczny i społeczny, by żyć zdrowiej, kreatywniej i szczęśliwiej!
          </p>
        </div>
      </section>
    </>
  );
};
