const crypto = require('crypto');
const conn = require('../database/connection');


module.exports = {
    async create(request,response) {
        const { name, email, whattsapp, city, uf } =  request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await conn('ongs').insert({
            id,
            name,
            email,
            whattsapp,
            city,
            uf
        });
        return response.json({ id });
    },
    async index(request, response) {
        
        var ongs = await conn('ongs').select('*');
        var i = ongs.length - 1;
        var list = [];
        for (var number = i;number >= 0;number--){
            list.push(ongs[number]['name']);
        }
        return response.json(ongs);

        
        
    
    
            
    }
}