const database = require("../models");
const { Op } = require("sequelize");

class UserController {
    static async list(request, response) {
        // Obtém o parâmetro de consulta 'nome' da URL
        const { nome } = request.query;

        try {
            // Verifica se o parâmetro 'nome' foi fornecido
            if (!nome) {
                // Se 'nome' não foi fornecido, retorna todos os usuarios
                const users = await database.Usuario.findAll();
                return response.status(200).json(users);
            }

            // Se 'nome' foi fornecido, busca usuarios pelo nome
            const users = await database.Usuario.findAll({
                where: { nome: { [Op.substring]: nome } }
            });

            return response.status(200).json(users);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    static async create(body) {
        try {
            const { nome, email, senha, tipo } = body;
            console.log(body);
            // Validate user input
            if (!(email && senha && nome && tipo)) {
                throw "All input is required";
            }

            // check if user already exist
            // Validate if user exist in our database
            const oldUser = await database.Usuario.findOne({ where: { email } });

            if (oldUser) {
                throw "User Already Exist. Please Login";
            }

            //Encrypt user password
            // encryptedPassword = await bcrypt.hash(senha, 10);

            // Create user in our database
            const user = await database.Usuario.create({
                nome,
                email: email.toLowerCase(), // sanitize: convert email to lowercase
                senha: senha,
                tipo,
            });

            // return new user
            return user;
        } catch (error) {
            return error;
        }
    }

    static async findById(request, response) {
        const { id } = request.params;

        try {
            const user = await database.Usuario.findOne({
                where: { id: Number(id) }
            });

            if (user == null) {
                return response
                    .status(404)
                    .json({ message: "Usuário não encontrado." });
            }

            return response.status(200).json(user);
        } catch (error) {
            return response.status(590).json(error.message);
        }
    }

    static async update(request, response) {
        const { id } = request.params;
        const { email, senha, nome } = request.body;

        try {
            let user = await database.Usuario.findByPk(Number(id));

            if (!user) {
                return response
                    .status(404)
                    .json({ message: "Usuario não encontrado." });
            }

            if (email || senha) {
                if (user.email == email) {
                    return response
                        .status(400)
                        .json({ message: "E-mail já cadastrado!" });
                } else {
                    if (email && senha && nome) {
                        await user.update({ email, senha, nome });
                    } else if (email) {
                        await user.update({ email: email });
                    } else if (senha) {
                        await user.update({ senha: senha });
                    } else {
                        return response
                            .status(400)
                            .json({ message: "Requisição inválida." });
                    }
                }

                user = await database.Usuario.findOne({
                    where: { id: id },
                });

                return response.status(201).json(user);
            } else {
                return response.status(400).json({ message: "Requisição inválida." });
            }
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }

    static async find({ email }) {
        try {
            return await database.Usuario.findOne({ email });
        } catch (error) {
            return error;
        }
    }


}

module.exports = UserController;
