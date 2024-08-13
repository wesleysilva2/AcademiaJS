const Academy = require('../models/Academia');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index (request, response) { // Listar Academias 
        const academias = await Academy.find();

        return response.json(academias);
    },

    async store(request, response) {
        const { name, img_academy_url, endereco, cidade, latitude, longitude } = request.body;

        let academy = await Academy.findOne({ name });

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }

        if (!academy) {
            academy = await Academy.create({
                name,
                img_academy_url,
                endereco,
                cidade,
                user_list: [],
                location
            })
        }
        return response.json(academy);
    }
}