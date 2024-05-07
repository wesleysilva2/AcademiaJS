const User = require('../models/User');
const geraMatricula = require('../utils/geraMatricula')

module.exports = {

    async index (request, response) { // Listar Usuario
        const users = await User.find();

        return response.json(users);
    },

    async store(request, response) { // Cadastrar Usuario 
        const { nomeUsuario ,emailUsuario ,dataNascimento, funcionario, avatar_url } = request.body;

        let user = await User.findOne({ emailUsuario }); // Declarar variavel com Let permite que ela seja sobreposta
        
        const matriculaGerada = geraMatricula(999999, 100000);

        let userMat = await User.findOne({ matricula: matriculaGerada }); // Checando se ja não tem essa matricula
        
        if(userMat){ // Caso a matricula gerada seja identica a uma ja cadastrada
            while(userMat){
                const matriculaGerada = geraMatricula(999999, 100000);
                userMat = await User.findOne({ matricula: matriculaGerada });
            }
        }

        if (!user) { // Se esse emailUsuario existir no banco não recadastrar
            user = await User.create({
                nomeUsuario,
                matricula: matriculaGerada,
                emailUsuario,
                dataNascimento,
                matriculaVencida: false,
                funcionario,
                avatar_url,
            })
        }
        
        
        return response.json(user);
    }
}