const Academy = require('../models/Academia');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async store(request, response) {
        const { name, img_academy_url, latitude, longitude } = request.body;

        let academy = await Academy.findOne({ name });

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }

        if (!academy) {
            const academy = await Academy.create({
                name,
                img_academy_url,
                user_list: [],
                location
            })
        }
        return response.json(academy);
    }
}