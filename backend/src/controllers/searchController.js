const Academy = require('../models/Academia');

module.exports = {
    async index(request, response){
        const {latitude, longitude} = request.query;
    
        const academias = await Academy.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({ academias })
    }
}