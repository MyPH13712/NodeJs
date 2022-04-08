import Category from '../models/category'
import Product from '../models/product'

export const listCate = async (req, res) => {
    try {
        const cate = await Category.find({}).exec()
        res.json(cate)
    } catch (error) {
        res.status(400).json({ message: "Ko thể hiển thị" })
    }
}
export const listCateDetail = async (req, res) => {
    try {
        const category = await Category.findOne({ _id: req.params.id }).exec()
        const product = await Product.find({ category }).populate("category").exec()
        res.json({ category, product })
    } catch (error) {
        res.status(400).json({ message: "Ko thể hiển thị" })
    }
}
export const creatCate = async (req, res) => {
    try {
        const cate = await Category(req.body).save()
        res.json(cate);
    } catch (error) {
        res.status(400).json({ message: "Ko thể thêm" })
    }
}
export const deleteCate = async (req, res) => {
    try {
        const cate = await Category.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(cate);
    } catch (error) {
        res.status(400).json({ message: "Ko xóa được" })
    }
}
export const updateCate = async (req, res) => {
    try {
        const cate = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
        res.json(cate);
    } catch (error) {
        res.status(400).json({ message: "Ko cập nhật được" })
    }
}