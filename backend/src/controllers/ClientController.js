const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    // List client
    async list (request, response) {
        const clients = await connection('client').select('*');
        return response.json(clients);
    },
    
    // Create client
    async create (request, response) {
        const { name, email, contact, zipcode} = request.body;
    
        const id = crypto.randomBytes(2).toString('HEX');
    
        await connection('client').insert({
            id,
            name,
            email,
            contact,
            zipcode
        });
        
        return response.json({id, name, email, contact, zipcode});
    },

    // Update client
    async update (request, response) {
        const {id} = request.params;
        const { name, email, contact, zipcode} = request.body;

        await connection('client').update({
            name,
            email,
            contact,
            zipcode
        });
        return response.json({id, name, email, contact, zipcode});
    },

    // Delete Client
    async delete(request,response) {
        const {id} = request.params;

        const client = await connection('client').where('id', id).delete();
        return response.status(204).send();
    }
}
