require('dotenv').config()

const { User, Post } = require('../models')
const sequelize = require('../db')

async function seeder() {
  await sequelize.sync({ force: true })
  console.log('-----Seeding Data-----')

  try {
    await
  }
}