const database = require("../models");
const jwt = require('jsonwebtoken');

class AuthController {
    static async login(request, response) {
        try {
            const { email, senha } = request.body;

            const usuario = await database.Usuario.findOne({ where: { email } });
            const foreignModel = await database[usuario.tipo].findOne({ where: { usuarioId: usuario.id } });
            if (senha === usuario.senha && foreignModel) {
                //auth ok
                const access_token = jwt.sign({ user_id: usuario.id, email: email, tipo: usuario.tipo, id_externo: foreignModel.id }, process.env.JWT_SECRET, {
                    expiresIn: '2h'
                });
                return response.json({ auth: true, access_token });
            }

            response.status(500).json({ message: 'Login inválido!' });
        } catch (error) {
            console.log(error.response ? error.response.data : error.message);
            return response.status(500).json(error.message);
        }
    }

    static async me(request, response) {
        try {
            const usuario = request.user;
            const foreignModel = await database[usuario.tipo].findOne({ where: { usuarioId: usuario.user_id }, include: 'usuario' });

            if (foreignModel) {
                return response.json(foreignModel);
            }

            response.status(500).json({ message: 'Login inválido!' });
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    static verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            return false;
        }
    }

    static singup({ id, email, tipo, id_externo }) {
        try {
            return jwt.sign({ user_id: id, email, tipo, id_externo }, process.env.JWT_SECRET, {
                expiresIn: '2h'
            });
        } catch (error) {
            return false;
        }
    }
    // TODO: register
}



module.exports = AuthController;
