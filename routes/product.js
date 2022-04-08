import express from 'express';
import { creatProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from '../controllers/product'
import { userById } from '../controllers/user';
import { isAdmin, isAuth, requiredSignin } from '../middlewares/checkAuth';
const router = express.Router();

router.get('/products', listProduct);
router.get('/products/:id', listProductDetail);
router.post('/products/:userId', requiredSignin, isAuth, isAdmin, creatProduct);
router.delete('/products/:id', deleteProduct);
router.put('/products/:id', updateProduct);

router.param('userId', userById)

export default router