const User = require("../database/models/user")
const axios = require('axios');

const VerifyCPF = async (req, res, next) => {
    const { cpf } = req.params

    const resu = await User.findAll(
        {
            where: { cpf }
        }
    )

    return res.json({ validate: resu.length === 0, resu })
}

const VerifyCEP = async (req, res, next) => {
    const { cep } = req.params
    const resu = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
    return res.json(resu.data)
}

const NewRegister = async (req, res, next) => {
    const {
        nome,
        cargo,
        bairro,
        estadoCivil,
        sexo,
        endereco,
        diaNascimento,
        mesNascimento,
        anoNascimento,
        cidade,
        cep,
        telefone1,
        telefone2,
        celular,
        contato,
        identidade,
        email,
        cpf,
        habilitacao,
        veiculo
    } = req.body

    const resu = await User.create({
        nome,
        cargo,
        bairro,
        estadoCivil,
        sexo,
        endereco,
        diaNascimento,
        mesNascimento,
        anoNascimento,
        cidade,
        cep,
        telefone1,
        telefone2,
        celular,
        contato,
        identidade,
        email,
        cpf,
        habilitacao,
        veiculo
    })

    return res.json(resu)
}

module.exports = { NewRegister, VerifyCPF, VerifyCEP }