const { Router } = require('express');
const { VerifyCPF, NewRegister, VerifyCEP } = require('../controllers/usersController');
const routes = Router()

routes.get("/verificarCPF/:cpf", VerifyCPF)
routes.get("/verificarCEP/:cep", VerifyCEP)
routes.post("/cadastro", NewRegister)

module.exports = routes