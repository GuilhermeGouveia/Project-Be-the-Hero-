const conn = require('../database/connection');


module.exports = {
    async create(request,response){
    var { title, description, value } = request.body;
    var ong_id = request.headers.auth
    await conn('incidents').insert({
        title,
        description,
        value,
        ong_id
    })
    response.send("sucessfully")
    },
    async list(request,response) {
        const {page = 1 } = request.query
        var count = await conn('incidents').count().first()
        
        var incidents = await conn('incidents')
        .join('ongs', 'ongs.id',"=" ,"incidents.ong_id")
        .limit(5)
        .offset((page - 1) * 5)
        .select(['incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.city',
        'ongs.whattsapp',
        'ongs.city',
        'ongs.uf']);
        response.header("X-Count", count["count(*)"]);
        return response.json(incidents);
    },
    async delete(request,response){
         var id_incident = request.params;
         
         var ong_id = request.headers.auth
         var ong_id2 = await conn('incidents').select('ong_id').where(id = id_incident);
         
         if (ong_id == ong_id2[0]['ong_id']) {
            await conn('incidents').delete("*").where(id = id_incident);
            return response.send("Caso de id:"+ id_incident["id"] + ",foi deletado." );
         } else {

         
         return response.status(401).json({error:"Not autorizated"});
         }
    }
    
}