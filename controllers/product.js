import Product from '../models/product'
// const products = [
//     { id: 1, name: "Product 1" },
//     { id: 2, name: "Product 2" },
// ]
export const listProduct = async (req, res) => {
    try {
        const product = await Product.find({}).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: "Ko thể hiển thị" })
    }
    // res.json(products);
}
export const listProductDetail = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: "Ko thể hiển thị" })
    }
    // const product = products.find(item => item.id === +req.params.proId)
    // res.json(product)
}
export const creatProduct = async (req, res) => {
    try {
        const product = await Product(req.body).save()
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: "Ko thể thêm sp" })
    }
    // products.push(req.body);
    // res.json(products);
}
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: "Ko xóa được" })
    }
    // const product = products.filter(item => item.id != +req.params.proId)
    // res.json(product);
}
export const updateProduct = async(req, res) => {
    try {
        const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true}).exec()
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: "Ko cập nhật được" })
    }
    // res.json(products.map(item => item.id === +req.params.proId ? req.body : item));
}