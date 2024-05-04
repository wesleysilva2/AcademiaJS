const User = require('../models/User');
const geraMatricula = require('../utils/geraMatricula')

module.exports = {

    async index (request, response) { // Listar Usuario
        const users = await User.find();

        return response.json(users);
    },

    async store(request, response) { // Cadastrar Usuario 
        const {name,email,dataNascimento, funcionario,avatar_url} = request.body;

        let user = await User.findOne({ email }); // Declarar variavel com Let permite que ela seja sobreposta
        
        const matriculaGerada = geraMatricula(999999, 100000);

        let userMat = await User.findOne({ matricula: matriculaGerada }); // Checando se ja não tem essa matricula
        
        if(userMat){ // Caso a matricula gerada seja identica a uma ja cadastrada
            while(userMat){
                const matriculaGerada = geraMatricula(999999, 100000);
                userMat = await User.findOne({ matricula: matriculaGerada });
            }
        }

        if (!user) { // Se esse email existir no banco não recadastrar
            const user = await User.create({
                name,
                matricula: matriculaGerada,
                email,
                dataNascimento,
                matriculaVencida: 'false',
                funcionario,
                avatar_url,
            })
        }
        
        
        return response.json(user);
    }
}