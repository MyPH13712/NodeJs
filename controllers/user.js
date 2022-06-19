import User from '../models/user'


export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec()
        if (!user) {
            res.status(400).json({ message: 'User ko ton tai' })
        }
        req.profile = user;
        req.profile.password = undefined;
        next()
    } catch (error) {
        console.log(error);
    }
}
export const listUser = async (req, res) => {
    try {
        const user = await User.find({}).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: "Ko thể hiển thị" })
    }
    // res.json(products);
}