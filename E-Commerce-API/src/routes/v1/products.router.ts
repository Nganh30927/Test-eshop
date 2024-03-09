import express from 'express';
import productsController from '../../controllers/products.controller';
import validateSchema from '../../middleware/validateSchema.middleware';
import productsValidation from '../../validations/product.validation';
/***
 * Route chỉ làm nhiệm vụ định tuyến
 * Mapping request giữa client với Server
 * ==> Không nên chứa các Logic
 */
const router = express.Router();

//Get All products from DB
router.get('/', productsController.getProductController);

// router.get('/', (req, res) => {
//     const { category, currentPage, pageSize } = req.query;
//     productsController.getAll(category, currentPage, pageSize)
//       .then(result => res.json(result))
//       .catch(err => res.status(500).json({ error: err.message }));
//   });

//get user by ID
//Gắn middleware vào để check id có phải là số không
router.get('/:id', productsController.getItemById);

router.get("/product-category/:slug", productsController.getProductCategory);
 
router.post("/product-filters", productsController.productFiltersController);
router.get("/product-count", productsController.productCountController);
router.get("/product-list/:page", productsController.productListController);

//Create a new user
router.post('/', productsController.createItem);

/**
 * Update a user by ID
 * PATH /api/v1//:id
 */
router.patch('/:id', productsController.updateItem);
router.get('/slug/:slug', productsController.getItemBySlug);

// router.get('/category/:category', productsController.getItemByCategory);
/**
 * Delete a user by ID
 * DELETE /api/v1//:id
 */
router.delete('/:id', productsController.deleteItem);

//Xuất router ra
export default router;
