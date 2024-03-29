import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import styles from './ProductDetail.module.css';
import axios from 'axios';
import config from '../../constants/config';
import {
  useQuery,
} from '@tanstack/react-query';
import { Helmet } from "react-helmet";
import { useCartStore } from '../../hooks/useCartStore';
import { Link, useParams } from 'react-router-dom';


export interface IProduct {
  data: {
    _id: string;
    name: string;
    category: {
      _id: string;
      name: string;
      description: string;
    };
    price: number;
    rating: number;
    reviews: {
      rating: number;
      comment: string;
      customerId: string;
      _id: string;
      createdAt: Date;
      updatedAt: Date;
      id: string;
    }[];
    thumbnail: string;
    images: string[];
    discount: number;
    salePrice: number;
  }
}

const ProductDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [activeThumbnail, setActiveThumbnail] = useState(1);
  const [isThumbOpen, setIsThumbOpen] = useState(false);
  const thumbnails = [1, 2, 3, 4];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveThumbnail(index);
  };

  const handlePreviousClick = () => {
    const previousIndex = activeThumbnail === 1 ? 4 : activeThumbnail - 1;
    setActiveThumbnail(previousIndex);
  };

  const handleNextClick = () => {
    const nextIndex = activeThumbnail === 4 ? 1 : activeThumbnail + 1;
    setActiveThumbnail(nextIndex);
  };

  const toggleThumb = () => {
    if (window.innerWidth > 768) {
      setIsThumbOpen(!isThumbOpen);
    }
  };

  const { addItem, items, itemCount, increaseQuantity, decreaseQuantity } = useCartStore();
  /*Tac vu & fetch product getById*/
  let params = useParams();
  console.log(params);
  //const id = params.id;
  const slug = params.slug;
  //Hàm fetch products
  const getProduct = (slug: string): Promise<IProduct> => {
    return axios.get(config.urlAPI + '/v1/products/slug/' + slug);
  }

  // Queries

  const { data: product, isLoading, isError, error } = useQuery<IProduct, Error>({
    queryKey: ['product_details', slug],
    queryFn: () => getProduct(slug as string),
    onSuccess: (data) => {
      //Thành công thì trả lại data
      console.log(data?.data.data);
    },
    onError: (error) => {
      console.log(error);
    },

  })



  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{product?.data?.data.name}</title>
      </Helmet>
      <div className='container mx-auto bg-slate-200'>
        <section className="py-10 bg-white ">
          <div className="max-w-6xl px-4 mx-auto">
            <div className="flex flex-wrap mb-24 -mx-4">
              <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                <div className=" top-0 overflow-hidden gap-8 py-10 md:gap-8">
                 {/* gallery thumb toggle model */}
                 {
                    isThumbOpen && (
                      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 inset-0 z-50 outline-none focus:outline-none justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" >
                        <div className="opacity-75 w-screen h-screen fixed  z-40 bg-black"
                        ></div>
                        <div
                          className="absolute top-16 min-w-fit container mx-auto xl:flex flex-col gap-8 justify-center  z-50"
                          id="light-2"
                        >
                          <div className="h-fit w-full mx-auto" onClick={(event) => {
                            if (event.target === event.currentTarget) {
                              setIsThumbOpen(false);

                            }
                          }}>
                            <div className="flex items-center justify-center w-[35%] rounded-xl m-auto bg-orange xl:w-[28%]">
                              <button onClick={handlePreviousClick}
                                className="bg-white relative left-6 rounded-full flex justify-center items-center pr-4 pl-3 py-3 ml-3 z-50 group"
                                id="previous"
                              >
                                <svg
                                  width={12}
                                  height={18}
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="stroke-[#1D2026] group-hover:stroke-orange-500 transition"
                                  id="previous"
                                >
                                  <path
                                    d="M11 1 3 9l8 8"
                                    strokeWidth={3}
                                    fill="none"
                                    fillRule="evenodd"
                                    id="previous"
                                  />
                                </svg>
                              </button>
                              <img
                                src={`../../../public/images/image-product-${activeThumbnail}.jpg`}
                                alt="sneaker"
                                className="rounded-xl"
                                id="hero-lightbox"
                              />

                              <button onClick={handleNextClick}
                                className="bg-white relative right-6 rounded-full flex justify-center items-center pr-3 pl-4 py-3 mr-3 z-20 group"
                                id="next"
                              >
                                <svg
                                  width={13}
                                  height={18}
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="stroke-[#1D2026] group-hover:stroke-orange-500 transition"
                                  id="next"
                                >
                                  <path
                                    d="m2 1 8 8-8 8"
                                    strokeWidth={3}
                                    fill="none"
                                    fillRule="evenodd"
                                    id="next"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="thumbnails thumbnails-light w-1/3 flex justify-between gap-4 m-auto lg:mt-6 xl:w-1/4">
                            {thumbnails.map((index) => (
                              <div
                                key={index}
                                id={index.toString()}
                                className={`w-1/5 cursor-pointer rounded-xl sm:w-28 md:w-32 lg:w-[72px] xl:w-[78px] ${activeThumbnail === index ? styles.ring_active : ''
                                  }`}
                                onClick={() => handleThumbnailClick(index)}
                              >
                                <img
                                  src={`../../../public/images/image-product-${index}.jpg`}
                                  alt="thumbnail"
                                  className="rounded-xl hover:opacity-50 transition"
                                  id={`thumb-${index}`}
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    )
                  }
                 {/* ================================= */}

                  {/* gallery thumb màn hình chính */}
                  <picture className="relative flex items-center bg-orange-500 sm:bg-transparent" onClick={toggleThumb}>
                    <button
                      className="bg-white w-10 h-10 flex items-center justify-center pr-1 rounded-full absolute left-6 z-10 sm:hidden"
                      id="previous-mobile"
                      onClick={handlePreviousClick}
                    >
                      <svg
                        width={12}
                        height={18}
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-[#1D2026] group-hover:stroke-orange-500 transition"
                        id="previous"
                      >
                        <path
                          d="M11 1 3 9l8 8"
                          strokeWidth={3}
                          fill="none"
                          fillRule="evenodd"
                          id="previous"
                        />
                      </svg>
                    </button>
                    <img
                      src={`../../../public/images/image-product-${activeThumbnail}.jpg`}
                      alt="sneaker"
                      className="block sm:rounded-xl xl:w-[70%] xl:rounded-xl m-auto pointer-events-none transition duration-300 lg:w-3/4 lg:pointer-events-auto lg:cursor-pointer lg:hover:shadow-xl"
                      id="hero"
                    />
                    <button
                      className="bg-white w-10 h-10 flex items-center justify-center pl-1 rounded-full absolute right-6 z-10 sm:hidden"
                      id="next-mobile"
                      onClick={handleNextClick}
                    >
                      <svg
                        width={13}
                        height={18}
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-[#1D2026] group-hover:stroke-orange-500 transition"
                        id="next"
                      >
                        <path
                          d="m2 1 8 8-8 8"
                          strokeWidth={3}
                          fill="none"
                          fillRule="evenodd"
                          id="next"
                        />
                      </svg>
                    </button>
                  </picture>
                  <div className="thumbnails hidden justify-between mt-5 gap-4 m-auto sm:flex  sm:justify-center sm:items-center sm:h-fit md:gap-5 lg:flex-row">
                    {thumbnails.map((index) => (
                      <div
                        key={index}
                        id={index.toString()}
                        className={`w-1/5 cursor-pointer rounded-xl sm:w-28 md:w-32 lg:w-[72px] xl:w-[78px] ${activeThumbnail === index ? styles.ring_active : ''
                          }`}
                        onClick={() => handleThumbnailClick(index)}
                      >
                        <img
                          src={`../../../public/images/image-product-${index}.jpg`}
                          alt="thumbnail"
                          className={`rounded-xl hover:opacity-50 transition `}
                          id={`thumb-${index}`}
                        />
                      </div>
                    ))}
                  </div>
                  {/* ==================================*/}
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="lg:pl-20">
                  <div className="mb-6 ">

                    <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                      {product?.data?.data.name}
                    </h2>
                    <div className="flex flex-wrap items-center mb-6">
                      <ul className="flex mb-4 mr-2 lg:mb-0">
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                            </svg>
                          </a>
                        </li>
                      </ul>

                    </div>
                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                      <span>{product?.data.data.price}</span>
                      <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">
                        {product?.data.data.salePrice}
                      </span>
                    </p>
                  </div>
                  <div className="mb-6">
                    <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                      Thông tin sản phẩm:
                    </h2>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                      <div className="p-3 lg:p-5 ">
                        <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                          <p>Thông tin sản phẩm đang được cập nhật...</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div>
                    <button onClick={toggleModal} data-modal-target="crud-modal" data-modal-toggle="crud-modal" type="button" className="w-full  text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Xem thêm cấu hình chi tiết</button>

                    {
                      isModalOpen && (
                        <>
                          <div id="crud-modal" tabIndex={-1} aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 inset-0 z-50 outline-none focus:outline-none justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={(event) => {
                            if (event.target === event.currentTarget) {
                              setIsModalOpen(false);
                            }
                          }}>
                            <div className="relative top-20 left-1/3 p-4 w-full max-w-md max-h-full ">

                              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Thông số kỹ thuật
                                  </h3>
                                  <button onClick={() => {
                                    setIsModalOpen(false)
                                  }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                  </button>
                                </div>

                                <ul className="px-4">
                                  <li className="flex justify-between py-5">
                                    <span className="block w-40 text-gray-600 text-sm">Hệ điều hành:</span>
                                    <span className="block text-gray-700">Android 11</span>
                                  </li>
                                  <li className="flex justify-between border-t border-gray-300 py-5">
                                    <span className="block w-40 text-gray-600 text-sm">Camera sau:</span>
                                    <span className="block text-gray-700">Chính 12 MP & Phụ 64 MP, 12 MP</span>
                                  </li>
                                  <li className="flex justify-between border-t border-gray-300 py-5">
                                    <span className="block w-40 text-gray-600 text-sm">Camera trước:</span>
                                    <span className="block text-gray-700">10 MP</span>
                                  </li>
                                  <li className="flex justify-between border-t border-gray-300 py-5">
                                    <span className="block w-40 text-gray-600 text-sm">CPU:</span>
                                    <span className="block text-gray-700">Exynos 2100 8 nhân</span>
                                  </li>
                                  <li className="flex justify-between border-t border-gray-300 py-5">
                                    <span className="block w-40 text-gray-600 text-sm">RAM:</span>
                                    <span className="block text-gray-700">8 GB</span>
                                  </li>
                                  <li className="flex justify-between border-t border-gray-300 py-5">
                                    <span className="block w-40 text-gray-600 text-sm">Bộ nhớ trong:</span>
                                    <span className="block text-gray-700">128 GB</span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                      )
                    }

                  </div>
                  <div className="py-6 mb-6 border-t border-gray-200 dark:border-gray-700">

                  </div>
                  <div className="mb-6 " />
                 
                    {/* Điều chỉnh số lượng sản phẩm, mặc định 1 */}
                    <div className="flex flex-wrap items-center mb-6">
                    <div className="mb-4 mr-4 lg:mb-0">
                      <div className="w-28 bg-red-400">
                        <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                          {
                            items.map((item) => {
                              return (
                                <>
                                  <button onClick={() => {
                                    increaseQuantity(item.id);
                                  }} className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                  </button>
                                  <input
                                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                    value={item.quantity}
                                  />
                                  <button onClick={() => {
                                    decreaseQuantity(item.id);
                                  }} className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                    <span className="m-auto text-2xl font-thin">-</span>
                                  </button>
                                </>
                              )
                            })
                          }
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 lg:mb-0 ">
                     
                    </div>
                    <button onClick={() => {
                      console.log('Thêm giỏ hàng ID', slug);
                      const item = product?.data?.data;

                      addItem({
                        id: item._id,
                        price: item.price,
                        name: item.name,
                        quantity: 1,
                        thumb: item.thumbnail
                      });
                    }} type='button'

                      className="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl"
                    >
                      Add to cart
                    </button>
                  </div>

                  {/* click chuyển sang trang cart & thêm 1 sp vào cart */}
                  <div className="flex gap-4 mb-6">
                    <Link
                      to={'/cart'}
                      onClick={() => {
                        console.log('Thêm giỏ hàng ID', slug);
                        const item = product?.data?.data;
  
                        addItem({
                          id: item._id,
                          price: item.price,
                          name: item.name,
                          quantity: 1,
                          thumb: item.thumbnail
                        });
                      }}
                      className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
                    >
                      Buy now
                    </Link>
                  </div>
                      {/* end buy */}

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
            <div className="lg:grid-cols-[50%,1fr] grid grid-cols-1 gap-6">
              <div>
                <div className="p-6 mb-6 bg-gray-100 rounded-md lg:p-6 dark:bg-gray-900">
                  <div className="items-center justify-between block mb-4 lg:flex">
                    <div className="flex flex-wrap items-center mb-4 lg:mb-0">
                      <img className="object-cover mb-1 mr-2 rounded-full shadow w-14 h-14 lg:mb-0"
                        src="https://i.postimg.cc/ZYLBy1kr/Cheerful-cute-girl-greeting-with-namaste-cartoon-art-illustration.jpg " />
                      <div>
                        <h2 className="mr-2 text-lg font-medium text-gray-700 dark:text-gray-400">
                          Isha Singh</h2>
                        <p className="text-sm font-medium text-gray-400 dark:text-gray-400"> 12, SEP 2022 </p>
                      </div>
                    </div>
                    <div>
                      <ul className="flex mb-1">
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-fill"
                              viewBox="0 0 16 16">
                              <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                              </path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-fill"
                              viewBox="0 0 16 16">
                              <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                              </path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-fill"
                              viewBox="0 0 16 16">
                              <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                              </path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-half"
                              viewBox="0 0 16 16">
                              <path
                                d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z">
                              </path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-half"
                              viewBox="0 0 16 16">
                              <path
                                d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z">
                              </path>
                            </svg>
                          </a>
                        </li>
                      </ul>
                      <p className="text-xs font-thin text-gray-400 dark:text-gray-400"> 2h ago </p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an
                    unknown
                    printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <div className="flex items-center">
                    <div className="flex mr-3 text-sm text-gray-700 dark:text-gray-400">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="w-4 h-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-hand-thumbs-up-fill"
                          viewBox="0 0 16 16">
                          <path
                            d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z">
                          </path>
                        </svg>
                      </a>
                      <span>Like</span>
                    </div>
                    <div className="flex text-sm text-gray-700 dark:text-gray-400">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="w-4 h-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-chat"
                          viewBox="0 0 16 16">
                          <path
                            d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z">
                          </path>
                        </svg>
                      </a>
                      <span>Reply</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 mb-6 bg-gray-100 rounded-md lg:p-6 dark:bg-gray-900">
                  <div className="items-center justify-between block mb-4 lg:flex">
                    <div className="flex flex-wrap items-center mb-4 lg:mb-0">
                      <img className="object-cover mb-1 mr-2 rounded-full shadow w-14 h-14 lg:mb-0"
                        src="https://i.postimg.cc/Qt3CFq04/7294794.jpg " />
                      <div>
                        <h2 className="mr-2 text-lg font-medium text-gray-700 dark:text-gray-400">
                          Siya Smith</h2>
                        <p className="text-sm font-medium text-gray-400 dark:text-gray-400"> 12, SEP 2022 </p>
                      </div>
                    </div>
                    <div>
                      <ul className="flex mb-1">
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-fill"
                              viewBox="0 0 16 16">
                              <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                              </path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-fill"
                              viewBox="0 0 16 16">
                              <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                              </path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-fill"
                              viewBox="0 0 16 16">
                              <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                              </path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-half"
                              viewBox="0 0 16 16">
                              <path
                                d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z">
                              </path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-half"
                              viewBox="0 0 16 16">
                              <path
                                d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z">
                              </path>
                            </svg>
                          </a>
                        </li>
                      </ul>
                      <p className="text-xs font-thin text-gray-400 dark:text-gray-400"> 3m ago </p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an
                    unknown
                    printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <div className="flex items-center">
                    <div className="flex mr-3 text-sm text-gray-700 dark:text-gray-400">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="w-4 h-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-hand-thumbs-up-fill"
                          viewBox="0 0 16 16">
                          <path
                            d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z">
                          </path>
                        </svg>
                      </a>
                      <span>Like</span>
                    </div>
                    <div className="flex text-sm text-gray-700 dark:text-gray-400">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="w-4 h-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-chat"
                          viewBox="0 0 16 16">
                          <path
                            d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z">
                          </path>
                        </svg>
                      </a>
                      <span>Reply</span>
                    </div>
                  </div>
                </div>

              </div>
              <div>
                <div className="p-6 bg-gray-100 rounded-md dark:bg-gray-900">
                  <h2 className="px-2 mb-6 text-2xl font-semibold text-left text-gray-600 dark:text-gray-400">
                    Leave a comment</h2>
                  <form className="">
                    <div className="px-2 mb-6">
                      <label htmlFor="review" className="block mb-2 font-medium text-gray-700 dark:text-gray-400">
                        Your review *
                      </label>
                      <textarea
                        id="review"
                        placeholder="Write a review"
                        required

                        className="block w-full px-4 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-500 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                      ></textarea>
                    </div>
                    <div className="px-2 mb-6">
                      <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-400">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        required

                        className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded bg-gray-50 lg:mb-0 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                      />
                    </div>
                    <div className="px-2 mb-6">
                      <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-400">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="abc@gmail.com"
                        required
                        className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                      />
                    </div>
                    <div className="px-2">
                      <button
                        type="submit"

                        className="px-4 py-2 font-medium text-gray-100 bg-blue-800 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700"
                      >
                        Submit Comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-section-id={1}
          data-share=""
          data-category="ecommerce-gallery"
          data-component-id="4c009313_02_awz"
          className="py-10 "
        >
          <div className="container px-4 mx-auto">


            {/* img carousel */}
            <div className="flex items-center">

              <div className="flex flex-wrap -mx-3">
                <Swiper className="mySwiper  mx-auto grid grid-cols-1 sm:gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center"
                  modules={[Autoplay, Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  rewind={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                    1280: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },

                  }}
                >
                  <SwiperSlide>
                    <div className="p-10 xl:px-9  h-full bg-white rounded-3xl border border-gray-200">
                      <a className="block mx-auto mb-8  max-w-max duration-500 hover:scale-110" href="#">
                        <img
                          className=" object-cover "
                          src="https://shuffle.dev/uinel-assets/images/ecommerce-product-list/iphone-12-pro.png"
                          alt=""
                          data-config-id="auto-img-1-2"
                        />
                      </a>
                      <a href="#">
                        <p
                          className="mb-4 text-lg leading-8  font-medium hover:text-red-600"
                          data-config-id="auto-txt-5-2"
                        >
                          Apple iPhone 12 Pro (128GB) Silver
                        </p>
                      </a>
                      <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                        <span className="mr-2 text-xs" data-config-id="auto-txt-7-2">
                          $
                        </span>
                        <span data-config-id="auto-txt-6-2">544.90</span>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-10 xl:px-9  h-full bg-white rounded-3xl border border-gray-200">
                      <a className="block mx-auto mb-8  max-w-max duration-500 hover:scale-110 " href="#">
                        <img
                          className=" object-cover"
                          src="https://shuffle.dev/uinel-assets/images/ecommerce-product-list/iphone-12-pro.png"
                          alt=""
                          data-config-id="auto-img-1-2"
                        />
                      </a>
                      <a href="#">
                        <p
                          className="mb-4 text-lg leading-8  font-medium hover:text-red-600"
                          data-config-id="auto-txt-5-2"
                        >
                          Apple iPhone 12 Pro (128GB) Silver
                        </p>
                      </a>
                      <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                        <span className="mr-2 text-xs" data-config-id="auto-txt-7-2">
                          $
                        </span>
                        <span data-config-id="auto-txt-6-2">544.90</span>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-10 xl:px-9  h-full bg-white rounded-3xl border border-gray-200">
                      <a className="block mx-auto mb-8  max-w-max duration-500 hover:scale-110" href="#">
                        <img
                          className=" object-cover"
                          src="https://shuffle.dev/uinel-assets/images/ecommerce-product-list/iphone-12-pro.png"
                          alt=""
                          data-config-id="auto-img-1-2"
                        />
                      </a>
                      <a href="#">
                        <p
                          className="mb-4 text-lg leading-8  font-medium hover:text-red-600"
                          data-config-id="auto-txt-5-2"
                        >
                          Apple iPhone 12 Pro (128GB) Silver
                        </p>
                      </a>
                      <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                        <span className="mr-2 text-xs" data-config-id="auto-txt-7-2">
                          $
                        </span>
                        <span data-config-id="auto-txt-6-2">544.90</span>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-10 xl:px-9  h-full bg-white rounded-3xl border border-gray-200">
                      <a className="block mx-auto mb-8  max-w-max duration-500 hover:scale-110" href="#">
                        <img
                          className=" object-cover"
                          src="https://shuffle.dev/uinel-assets/images/ecommerce-product-list/iphone-12-pro.png"
                          alt=""
                          data-config-id="auto-img-1-2"
                        />
                      </a>
                      <a href="#">
                        <p
                          className="mb-4 text-lg leading-8  font-medium hover:text-red-600"
                          data-config-id="auto-txt-5-2"
                        >
                          Apple iPhone 12 Pro (128GB) Silver
                        </p>
                      </a>
                      <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                        <span className="mr-2 text-xs" data-config-id="auto-txt-7-2">
                          $
                        </span>
                        <span data-config-id="auto-txt-6-2">544.90</span>
                      </p>
                    </div>
                  </SwiperSlide>




                </Swiper>
              </div>
              {/* end */}
            </div>

          </div>
        </section>


      </div>
    </>
  )
}
export default ProductDetailsPage