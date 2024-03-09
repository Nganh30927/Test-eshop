import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import styles from './HomePage.module.css';
import {FaHeart } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, Navigation, Pagination } from 'swiper/modules';
import config from "../../constants/config";

const HomePage = () => {

  //TEST FETCH API
  const [product, setProduct] = React.useState(null);
  React.useEffect(()=>{
      const fetchData = async () =>{
          const res = await fetch ( config.urlAPI+'/v1/products/product-list/${page}');
          const data = await res.json();
          console.log(data.data)
      }
      fetchData();
  },[])
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
      </Helmet>
      <section
        data-section-id="1"
        data-share=""
        data-category="newest-products"
        data-component-id="4f76139a_01_awz"
        className="py-10 bg-gray-100 overflow-x-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
              <div className="mb-6 h-56 w-full rounded-xl overflow-hidden  bg-slate-100 border">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true} modules={[Navigation]} className="mySwiper">
                  <SwiperSlide className="">
                    <img
                      className="w-full h-full  rounded-xl"

                      src="https://cdn.tgdd.vn/2023/11/banner/IP15-720-220-720x220-3.png"
                      alt="Slide 1"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="w-full h-full  rounded-xl"

                      src="https://fptshop.com.vn/Uploads/Originals/2023/11/30/638369652345682991_F-H1_800x300.png"
                      alt="Slide 2"
                    />
                  </SwiperSlide>
                </Swiper>

              </div>
              <div
                className="relative h-56 w-full bg-cover bg-center bg-no-repeat rounded-xl">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true} modules={[Navigation]} className="mySwiper">
                  <SwiperSlide className="">
                    <img
                      className="w-full h-full  rounded-xl"

                      src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/12/1/638369858913409919_F-H1_800x300.png"
                      alt="Slide 1"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="w-full h-full  rounded-xl"

                      src="https://digizone.com.vn/wp-content/uploads/2023/06/fill-banner4.jpg"
                      alt="Slide 2"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-3">
              <div
                className="relative inline-block mb-6 h-80 lg:h-full w-full bg-no-repeat bg-cover rounded-xl"
                style={{ backgroundImage: `url('https://img4.thuthuatphanmem.vn/uploads/2020/06/25/mau-banner-dien-may-dep-va-chuyen-nghiep_024310892.jpg')` }}
                data-config-id="image3"
              >


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* m */}
      <section
        data-section-id={1}
        data-share=""
        data-category="item-cards-gradient"
        data-component-id="61ca2afa_02_awz"
        className="py-12 py-md-24 bg-gray-300 container mx-auto"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-sm md:max-w-xl mx-auto lg:max-w-none contents">
            <div className="flex flex-wrap mx-4 mb-3  justify-between">

              <div>
                <h1
                  className="text-3xl text-white font-bold mb-2"
                  data-config-id="auto-txt-1-2"
                >
                  Featured Collections
                </h1>
                <span>
                  <div className="w-28 mb-6  border-b border-red-700 dark:border-gray-400"></div>
                </span>
              </div>

              <p className="text-gray-500" data-config-id="auto-txt-2-2">
                Most Selling and Trending Products in our shop
              </p>


            </div>
            <div className="-mx-4 grid grid-cols-1 sm:gap-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div>
               <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div>
               <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* m */}


      {/* Test swiper */}
      <section
        data-section-id={1}
        data-share=""

        className="py-12 mt-6 py-md-24 bg-gray-300  container mx-auto"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-sm md:max-w-xl mx-auto lg:max-w-none contents">
            <div className="flex flex-wrap mx-4 mb-3  justify-between">

              <div>
                <h1
                  className="text-3xl text-white font-bold mb-2"
                  data-config-id="auto-txt-1-2"
                >
                  Featured Collections
                </h1>
                <span>
                  <div className="w-28 mb-6  border-b border-red-700 dark:border-gray-400"></div>
                </span>
              </div>

              <p className="text-gray-500" data-config-id="auto-txt-2-2">
                Most Selling and Trending Products in our shop
              </p>


            </div>
            <div className="flex flex-wrap -mx-4">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className=""
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                  },

                }}
              >
                <SwiperSlide> <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div></SwiperSlide>
                <SwiperSlide> <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div></SwiperSlide>
                <SwiperSlide> <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div></SwiperSlide>
                <SwiperSlide> <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div></SwiperSlide>
                <SwiperSlide> <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>
                 
              </div></SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* End test  */}
      <section
        data-section-id={1}
        data-share=""
        data-category="ta-banners"
        data-component-id="b753d053_01_awz"
        className="py-8"
      >
        <picture className="relative">
        <img className='opacity-80 object-cover w-full' style={{height: '500px'}}  src="../../../public/images/model-iphone.PNG" alt="" />
          
            <div className="absolute top-[60%] left-[26%] text-center">
              <div className="w-full">
                <h3 className="mb-1 text-8xl font-black text-white opacity-90">
                  <span className="" data-config-id="header-p1">
                    E COLLECTION
                  </span>
                </h3>
                
               
              </div>  
             <div className="mt-8 mb-8">
             <a className="text-white font-medium py-3 px-6 bg-red-600 hover:bg-red-400 rounded-md" href="#">
                  <span data-config-id="primary-action">SHOP NOW</span>
                </a>
             </div>

            </div>
          
        </picture>
      </section>


      <section className="bg-gray-100 border-t border-b py-6  my-6 rounded-md">
        <h2 className="pb-2 ml-8 text-xl font-bold text-left text-gray-800 md:text-3xl ">
          Hot Products
        </h2>
        <div className="w-20 mb-6 ml-8 border-b border-red-700 dark:border-gray-400"></div>
        <Swiper
          slidesPerView={1}

          spaceBetween={20}
          rewind={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },

          }}
          className="mySwiper py-6 mx-auto px-5  grid grid-cols-1 sm:gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center  mt-10"
        >
          <SwiperSlide className={styles.slide_a}>
            <div className="w-64  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="h-80 w-64 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-64">
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide_a}>
            <div className="w-64  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="h-80 w-64 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-64">
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide_a}>
            <div className="w-64  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="h-80 w-64 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-64">
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide_a}>
            <div className="w-64  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="h-80 w-64 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-64">
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>

        </Swiper>
        <div className="flex justify-center">
          <a href="#" className="px-4 py-2 mt-5 text-orange-500 border border-orange-500 rounded-full hover:text-gray-50 hover:bg-orange-500 dark:text-gray-400 dark:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-700 dark:hover:bg-gray-700">
            View More</a>
        </div>
      </section>



      <section
        id="Projects"
        className=""
      >
        <div className="p-3 mx-auto bg-gray-200">
          <div className="w-fit mx-auto  grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  justify-items-center justify-center gap-y-10 gap-x-10 mt-10 mb-5">
            <div className="w-64  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="h-80 w-64 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-64">
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-64  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="h-80 w-64 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-64">
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-64  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="h-80 w-64 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-64">
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-64  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="h-80 w-64 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-64">
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-64  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="h-80 w-64 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-64">
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-64  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="h-80 w-64 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-64">
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-64  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="h-80 w-64 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-64">
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-64  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="h-80 w-64 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-64">
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
