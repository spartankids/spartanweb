import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';




SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Slider() {
    return (
        <div>
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoPlay
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className="grid sm:grid-cols-2 sm:mx-auto container h-auto my-16 mx-auto">
          <div className="flex-auto place-self-center">
          <h1 className=" font-bold text-5xl mb-2 text-purple-900">
                  Learn. Share. Laugh. Grow.
                </h1>
                <p className="antialiased  text-gray-500 sm:subpixel-antialiased md:antialiased lg:subpixel-antialiased xl:antialiased text-lg">we strive to create an environment that helps childrens to learn and grow
                  in the perfect launchpad to explore their creativity, learn more about the world around them and
                  develop skills that they will use throughout their life.</p>
                  <button class="mt-5 bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 border-b-4 bg-indigo-400 hover:bg-indigo-300 rounded">
MORE DETAILS</button>
          </div>
          <div className="flex-auto slide-image">
            <img className="float-right" src="/images/slider1.png" alt="spartankid"/>
          </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="grid sm:grid-cols-2 sm:mx-auto container h-auto my-16 mx-auto">
          <div className="flex-auto place-self-center">
          <h1 className=" font-bold text-5xl mb-2 text-purple-900">
                  Learn. Share. Laugh. Grow.
                </h1>
                <p className="  text-gray-500 antialiased sm:subpixel-antialiased md:antialiased lg:subpixel-antialiased xl:antialiased text-lg">we strive to create an environment that helps childrens to learn and grow
                  in the perfect launchpad to explore their creativity, learn more about the world around them and
                  develop skills that they will use throughout their life.</p>
                  <button class="mt-5 bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 border-b-4 bg-indigo-400 hover:bg-indigo-300 rounded">
MORE DETAILS</button>
          </div>
          <div className="flex-auto slide-image">
            <img className="float-right" src="/images/slider1.png" alt="spartankid"/>
          </div>
          </div></SwiperSlide>  
              {/* <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>

    
        </div>
    )
}