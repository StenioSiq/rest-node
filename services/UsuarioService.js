const connection = require('../config/database');
const bcrypt = require('bcrypt');
const saltRounds = 10

class UsuarioService{

    static async getAllUsuarios(){
        const [rows] = await connection.query('SELECT usuario FROM usuarios');
        return rows;
    }
    static async createUsuario({usuario, senha}){
        
        const hash = await bcrypt.hash(senha, saltRounds);
        const [result] =
            await connection.query(
                'INSERT INTO usuarios (usuario, senha) VALUES (?, ?)',
                [usuario , hash]
            );
            return { id: result.insertId, usuario };
    };
};

module.exports = UsuarioService;