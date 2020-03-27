const conn = require('../database/connection');


module.exports = {
    async create(request,response){
        const ong_id = request.body.ong_id
        console.log(ong_id)
        var ong = await conn('ongs').select('name').where('id', ong_id).first();
        if (!ong){
            response.status(400).send('id nao encontrado')
        } else {
            response.send('Seja bem vindo, '+ong['name'])
        }
    
        
    }
}