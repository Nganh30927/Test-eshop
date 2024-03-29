import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import config from '../../constants/config';
import {
  useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { useCartStore } from '../../hooks/useCartStore';
import Pagination from '../../components/Pagination';
import { RiShoppingCartLine } from "react-icons/ri";
import { IProduct } from "../ProductDetailsPage";
const ProductsPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);

  const [checked, setChecked] = useState<string[]>([]);

  const [total, setTotal] = useState(0);
  // const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { addItem } = useCartStore();


  const getCategory = async () => {
   
      return axios.get( config.urlAPI+'/v1/categories');
  };

  const queryCategorys = useQuery({ 
    queryKey: ['categories'],
    queryFn: ()=>getCategory(),
    onSuccess: (data)=>{
      //Thành công thì trả lại data
      console.log(data.data.data.categories);
    },
    onError: (error)=>{
      console.log(error);
    },

  })


  const [params] = useSearchParams();

  

  const page = params.get('page');
  const int_page = page? parseInt(page) : 1;
  const getProducts = async (page=1)=> {
    return axios.get(config.urlAPI+`/v1/products?page=${page}`);
  }
  
 
   const queryProducts = useQuery({ 
    queryKey: ['products', int_page],
    queryFn: ()=> getProducts(int_page),
    onSuccess: (data)=>{
      //Thành công thì trả lại data
      console.log(data.data.data.products);
    },
    onError: (error)=>{
      console.log(error);
    },

  })

  // const getTotal = async () => {
  //   try {
  //     const { data } = await axios.get(config.urlAPI+"/v1/products/product-count");
  //     setTotal(data?.total);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getCategory();
    getProducts();
    //getTotal();
  }, []);

  // useEffect(() => {
  //   if (page = 1) return;
  //   loadMore();
  // }, [page]);
  // const loadMore = async () => {
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.get(config.urlAPI+`/v1/products?page=${page}`);
  //     setLoading(false);
  //     setProducts([...products, ...data?.products]);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };



  const handleFilter = (value: any, id: string) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (checked.length) {
      filterProduct();
    } else {
      getProducts();
    }
  }, [checked]);
  useEffect(() => {
    if (checked.length) filterProduct();
  },[checked]);

  const filterProduct = async () => {
    try {
      const { data } = await axios.post(config.urlAPI+"/v1/products/product-filters", { checked });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  
  // Handle lỗi khi ko fetch được API
  // if(queryProducts.isError){
  //   return (
  //     <h1>Error Processing</h1>
  //   )
  // }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products Page</title>
      </Helmet>
    
        <section data-section-id="1" data-share="" data-category="search-solid" data-component-id="fce12138_02_awz" className="py-10 bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className=" flex flex-wrap -mx-4">
            <div className="w-full lg:w-4/12 xl:w-3/12 px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 md:gap-8 lg:gap-10 lg:max-w-2xs lg:pt-28  lg:pb-9 px-4">
                <div className="hidden lg:block pb-10 lg:border-b border-gray-600">
                  <h6 className="font-bold text-black mb-5" data-config-id="auto-txt-2-2">Price</h6>
                  <input className="w-full bg-blue-500" type="range" data-config-id="auto-input-1-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600" data-config-id="auto-txt-3-2">$0</span>
                    <span className="text-sm font-medium text-gray-600" data-config-id="auto-txt-4-2">$200</span>
                  </div>
                </div>
                <div className="hidden lg:block pb-10 lg:border-b border-gray-600">
                  <h6 className="font-bold text-black mb-8" data-config-id="auto-txt-5-2">Category</h6>
                  {
                     queryCategorys.data && queryCategorys.data.data.data.categories ? queryCategorys.data.data.data.categories.map((c: any) => {
                      return (
                      <div className="flex">
                         <input key={c._id} type="checkbox" onChange={(e) => handleFilter(e.target.checked, c._id)} />
                        {c.name}
                      </div>
                      )
                      }):null
                  }
                </div>
                <div className="hidden lg:block max-w-xs">
                  <h6 className="font-bold text-black mb-8" data-config-id="auto-txt-5-2">Brand</h6>
                  {/* {
                    queryProducts.data && queryProducts.data.data.data.products ? queryProducts.data.data.data.products.map((product: any)=>{
                      return(
                        <ul className="list-unstyled mb-0">
                          <li className="mb-4"><a className="inline-block font-medium text-gray-600 hover:text-gray-400" href="#" data-config-id="auto-txt-6-2">{product.category.name}</a></li>
                        </ul>
                      )
                    }):null
                  } */}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-8/12 xl:9/12 px-4">
              <div className="flex flex-col sm:flex-row mb-6 sm:items-center pb-6 border-b border-gray-400  ">
                <div className="mb-3 sm:mb-0 sm:mr-5">
                  <div className="relative border border-gray-600">
                    <span className="absolute top-1/2 right-0 mr-4 transform -translate-y-1/2" data-config-id="auto-txt-18-2">
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.96967 0.71967C1.26256 0.426777 1.73744 0.426777 2.03033 0.71967L6 4.68934L9.96967 0.71967C10.2626 0.426777 10.7374 0.426777 11.0303 0.71967C11.3232 1.01256 11.3232 1.48744 11.0303 1.78033L6.53033 6.28033C6.23744 6.57322 5.76256 6.57322 5.46967 6.28033L0.96967 1.78033C0.676777 1.48744 0.676777 1.01256 0.96967 0.71967Z" fill="white"></path>
                      </svg>
                    </span>
                    <select className="relative w-full pl-6 pr-10 py-4 bg-transparent font-medium text-gray-600 outline-none appearance-none" name="" id="" data-config-id="auto-input-7-1">
                      <option value="1">Brand</option>
                      <option value="2">Price</option>
                      <option value="3">Ratings</option>
                      <option value="4">Popularity</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 sm:mb-0 sm:mr-5">
                  <div className="relative border border-gray-600">
                    <span className=" absolute top-1/2 right-0 mr-4 transform -translate-y-1/2" data-config-id="auto-txt-19-2">
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.96967 0.71967C1.26256 0.426777 1.73744 0.426777 2.03033 0.71967L6 4.68934L9.96967 0.71967C10.2626 0.426777 10.7374 0.426777 11.0303 0.71967C11.3232 1.01256 11.3232 1.48744 11.0303 1.78033L6.53033 6.28033C6.23744 6.57322 5.76256 6.57322 5.46967 6.28033L0.96967 1.78033C0.676777 1.48744 0.676777 1.01256 0.96967 0.71967Z" fill="white"></path>
                      </svg>
                    </span>
                    <select className="relative w-full pl-6 pr-10 py-4 bg-transparent font-medium text-gray-600 outline-none appearance-none" name="" id="" data-config-id="auto-input-7-1">
                      <option value="1">Category</option>
                      <option value="2">Clothes</option>
                      <option value="3">Home</option>
                      <option value="4">Kids</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="lg:hidden md:w-80 ml-4">
                    <h6 className="font-bold text-black mb-5" data-config-id="auto-txt-2-2">Price</h6>
                    <input className="w-full bg-blue-500" type="range" data-config-id="auto-input-1-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600" data-config-id="auto-txt-3-2">$0</span>
                      <span className="text-sm font-medium text-gray-600" data-config-id="auto-txt-4-2">$200</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mb-20">
                {JSON.stringify(checked, null, 4)}
                {
                  
                   
                  queryProducts.data && queryProducts.data.data.data.products ? queryProducts?.data?.data.data.products.map((product: any)=>{
                   return(
                    <div className="w-full sm:w-1/2  xl:w-1/3 bg-white overflow-hidden group border border-gray-300 ">
                    <Link to={`/products/${product.slug}`} className="block p-5 ">
                      <img className="block w-full h-80 mb-8 object-cover transition-all group-hover:scale-105" src={product.thumnail} alt={product.name} data-config-id="auto-img-1-9" />
                      <div className="">

                        <h6 className="font-bold text-black mt-2 mb-5" data-config-id="auto-txt-2-9">{product.name}</h6>

                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <span className="font-bold text-black" data-config-id="auto-txt-1-9">{product.price}</span>
                            <del className="ms-2 font-semibold text-red-600">{product.discount}</del>
                          </div>
                          <div className="w-12 h-12  text-sky-500 hover:bg-sky-600 hover:text-white rounded-3xl border border-sky-500 flex items-center justify-center"><a  onClick={() => {
                        console.log('Thêm giỏ hàng ID');
                        const item = product?.data?.data;
  
                        addItem({
                          id: item._id,
                          price: item.price,
                          name: item.name,
                          quantity: 0,
                          thumb: item.thumbnail
                        });
                      }}><RiShoppingCartLine /></a></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                   )
                  }):null
                   
                   
                 
                }

              </div>
              {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore 
                  </>
                )}
              </button>
            )}
          </div> */}
            </div>
          </div>
        </div>
      </section>
     
    </>
  )
    }

export default ProductsPage