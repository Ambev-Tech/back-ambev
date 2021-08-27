const Sequelize = require('sequelize');
const database  = require('../db')

const User = database.define('Users',{
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    unique: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull:false
  },
  email: {
    type: Sequelize.STRING,
    allowNull:false
  },
  cargo: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  estadoCivil: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  sexo: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  diaNascimento: {
    type: Sequelize.INTEGER,
    allowNull:false,
  },
  mesNascimento: {
    type: Sequelize.INTEGER,
    allowNull:false,
  },
  anoNascimento: {
    type: Sequelize.INTEGER,
    allowNull:false,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  telefone1: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  telefone2: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  celular: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  contato: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  identidade: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  habilitacao: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  veiculo: {
    type: Sequelize.STRING,
    allowNull:false,
  }
})

module.exports = User;