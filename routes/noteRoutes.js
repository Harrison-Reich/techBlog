const router = require('express').Router()
const { Post, User, Note } = require('../models')
const passport = require('passport')

// GET all comments
router.get('/notes', passport.authenticate('jwt'), async function (req, res) {
  const notes = await Note.findAll({ include: [User, Post] })
  res.json(notes)
})