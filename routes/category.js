import express from 'express';
import {listCate, listCateDetail, creatCate, deleteCate, updateCate } from '../controllers/category'
const router = express.Router();

router.get('/category', listCate);
router.get('/category/:id', listCateDetail);
router.post('/category', creatCate);
router.delete('/category/:id', deleteCate);
router.put('/category/:id', updateCate); 

export default router