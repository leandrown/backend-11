const express = require('express');
const app = express();

/**
 * Métodos HTTP:
 *
 * GET: Buscar uma inforação no back-end
 * POST: Criar  uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/

// Rota / Recurso
app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 11',
        aluno: 'Leandro Vieira'
    });
});

app.listen(3333);
