import { NextFunction, Request, Response, query } from 'express';
import { sendJsonSuccess } from '../helpers/responseHandler';
import productsService from '../services/products.service';
import Product from '../models/products.model';
import Category from '../models/categories.model';
import { IProduct } from '../types/model';



const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = req.query.page  ? parseInt(req.query.page as string) : 1;
    const limit = req.query.limit  ? parseInt(req.query.limit as string) : 12; // 10 item trên 1 limit
    const category = req.query.category as string;
    const products = await productsService.getAllItems(category,page,limit);
    // check số lượng sản phẩm hiện thị trên 1 page.
    // console.log(products.length);
    sendJsonSuccess(res)(products); // Gọi hàm mà có truyền giá trị cho data
  } catch (error) {
    next(error);
  }
};

const getItemById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productsService.getItemById(req.params.id);
    sendJsonSuccess(res)(product);
  } catch (error) {
    next(error);
  }
};

const getProductCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //const categorySlug = req.params.categorySlug;
    //const cid = req.params.id;

    //Lấy tất cả ngoại trừ __v
    const categorys = await Category.findOne({slug: req.params.slug});
    
    const products = await Product.find({category: categorys}).populate('category', '-__v').
    populate('supplier','-__v').
    lean({ virtuals: true });;

    sendJsonSuccess(res)({categorys, products});
  } catch (error) {
    next(error);
  }
};

const getProductController = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const product = await Product.find({}).populate('category', '-__v').
      populate('supplier','-__v').limit(12).sort({ createdAt: -1 });
      sendJsonSuccess(res)(product);
    }catch (error) {
    next(error);
  }
}



const productFiltersController = async (req: Request, res: Response, next: NextFunction) => {
  
  try{
    const {checked, radio} = req.body;
    let args: Partial<IProduct> = {};
    
    if (checked.length > 0) args.category = checked;
    const products = await Product.find(args);
    sendJsonSuccess(res)(products);
  }catch (error) {
    next(error);
  }
}

//GET ALL
const productCountController = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const total = await Product.find({}).estimatedDocumentCount();
    sendJsonSuccess(res)(total);
  }catch (error) {
    next(error);
  }
}
const productListController = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const perPage = 6;
    const page = req.params.page ? parseInt(req.params.page) : 1;
    const products = await Product
      .find({})
      .skip((page - 1) * perPage)
      .limit(perPage)
      .sort({ createdAt: -1 });
      sendJsonSuccess(res)(products);
  }catch (error) {
    next(error);
  }
}


const getItemBySlug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productsService.getItemBySlug(req.params.slug);
    sendJsonSuccess(res)(product);
  } catch (error) {
    next(error);
  }
};


const createItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const newProduct = await productsService.createItem(payload);
    sendJsonSuccess(res)(newProduct);
  } catch (error) {
    next(error);
  }
};

const updateItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    console.log(id, req.body);
    const payload = req.body;
    const updatedProduct = await productsService.updateItem(id, payload);
    sendJsonSuccess(res)(updatedProduct);
  } catch (error) {
    next(error);
  }
};

const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productsService.deleteItem(id);
    sendJsonSuccess(res)(deletedProduct);
  } catch (err) {
    next(err);
  }
};

export default {
  getAll,
  getItemById,
  updateItem,
  createItem,
  deleteItem,
  getItemBySlug,
  getProductCategory,
  productCountController,
  productFiltersController,
  productListController,
  getProductController
};