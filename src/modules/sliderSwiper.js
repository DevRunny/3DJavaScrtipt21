import Swiper from "swiper";

const sliderSwiper = () => {
  const slider = new Swiper("swiper", {
    spaceBetween: 30,
    conteredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
};

export default sliderSwiper;
