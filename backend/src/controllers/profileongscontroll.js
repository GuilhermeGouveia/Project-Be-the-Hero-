const conn = require('../database/connection');

module.exports = {
    async listSpecificOngs(request, response){
        var ong_id2 = request.headers.auth;
       
        var list = await conn('incidents').select('*').where('ong_id', ong_id2);
       
        return response.json(list);
    }
    
}