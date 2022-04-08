import User from '../models/user'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    const { email, name, password } = req.body
    try {
        const exitsUser = await User.findOne({ email }).exec()
        if (exitsUser) {
            return res.status(400).json({
                message: "User da ton tai"
            })
        }
        const user = await User({ email, name, password }).save()
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        console.log(error);
    }
}
export const signin = async (request, response) => {
    const { email, password } = request.body
    const user = await User.findOne({ email }).exec()
    if (!user) {
        return response.status(400).json({
            message: "User khong ton tai"
        })
    }
    if (!user.authenticate(password)) {
        return response.status(400).json({
            message: "Mat khau khong dung"
        })
    }
    const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: 3600 })
    response.json({
        token,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    })
}