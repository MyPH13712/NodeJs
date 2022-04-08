import expressJWT from "express-jwt";
export const checkAuth = (req, res) => {
    const isAdmin = true;
    if (isAdmin) {
        console.log("Xin chao Admin");
        next()
    }else {
        console.log("Ko co quyen truy cap");
    }
}
export const requiredSignin = expressJWT({
    secret: "123456",
    algorithms: ["HS256"],
    requestProperty: "auth"
})
export const isAuth = (req, res, next) => {
    console.log(req.auth);
    console.log(req.profile);
    const user = req.profile._id == req.auth._id;
    if (!user) {
        return res.status(400).json({message: "Ko co quyen truy cap"})
    }
    next()
}
export const isAdmin = (req, res, next) => {
    if (req.profile.role == 0 ) {
        return res.status(400).json({message: "Ko la Admin"})
    }
    next()
}