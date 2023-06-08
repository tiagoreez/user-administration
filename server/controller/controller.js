const Userdb = require('../models/model.js')

// create

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty' })
  }

  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status
  })

  // save user in the database

  user.save(user)
    .then(data => {
      res.redirect('/')
    }).catch(err => {
      res.status(400).send({ message: err.message })
    })
}

exports.find = (req, res) => {
  Userdb.find()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

exports.findOne = (req, res) => {
  const { id } = req.params
  Userdb.findById(id)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty' })
  }

  const { id } = req.params
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      res.redirect('/update-user')
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

exports.delete = (req, res) => {
  const { id } = req.params

  if (!req.params.id) {
    res.status(500).send({ message: 'We need the id to delete this bruh' })
  }
  Userdb.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `cannot delete the user with id ${id}` })
      } else {
        res.status(200).send({ message: 'User deleted Successfully' })
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}
