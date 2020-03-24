const express = require('express');
const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 *
 * GET: Buscar ou listar uma inforação no back-end
 * POST: Criar  uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

// Rota / Recurso
app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Omnistack 11',
        aluno: 'Leandro Vieira Santos'
    });
});

app.listen(3333);
