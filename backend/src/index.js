const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Método HTTP:
  * 
  * GET: Busca/listar uma informação do backend
  * POST: Criar uma informação do backend
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informação no backend
  * ctrl + shift + p para abrir o campo de pesquisa
  */

  /**
   * Tipos de Parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota após o simbolo de "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Bory: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB
    */

    /**
     * executar o knex - npx knex init
     */



app.listen(3333);
