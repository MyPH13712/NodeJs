//include thư viện http
import express from 'express';
import mongoose from 'mongoose';

import homeRoute from './routes/home'
import productRoute from './routes/product'
import categoryRoute from './routes/category'
import authRoute from './routes/auth'
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json());

app.use(homeRoute);
app.use('/api',productRoute);
app.use('/api',categoryRoute);
app.use('/api',authRoute);

mongoose.connect('mongodb://localhost:27017/we16307');
//lắng nghe cổng thực thi 
const port = 8000;
app.listen(port, () => {
    console.log(`Server chạy cổng ${port}`);
})