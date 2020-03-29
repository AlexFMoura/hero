exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};

/**
 * instala o slqlite3
 * inicia o knex migrete:make create_ongs para criar a tabela
 */
