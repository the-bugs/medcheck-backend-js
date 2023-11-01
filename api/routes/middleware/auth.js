const AuthController = require('../../controllers/AuthController');
const UserController = require('../../controllers/UserController');
const verifyToken = (roles = []) => {
    return async (req, res, next) => {
        const token =
            req.body.token || req.query.token || req.headers["x-access-token"];

        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        try {
            const decoded = AuthController.verifyToken(token);
            console.log(decoded);
            req.user = decoded;
            if (roles.length) {
                const user = await UserController.find({ email: decoded.email });
                if (!user) {
                    return res.status(404).send("User not found");
                }
                if (!roles.includes(user.tipo)) {
                    return res.status(401).send("User not Authorized");
                }
            }
        } catch (err) {
            console.log(err);
            return res.status(401).send("Invalid Token");
        }
        return next();
    };
};

module.exports = verifyToken;