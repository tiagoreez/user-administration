const axios = require('axios')

exports.homeRoutes = (req, res, next) => {
  axios.get('http://localhost:3000/api/users')
    .then((response) => {
      res.render('index.ejs', { users: response.data })
    }).catch((err) => {
      res.status(500).send(err)
    })
}
exports.addUsers = (req, res, next) => {
  res.render('add-user.ejs')
}
exports.updateUsers = (req, res, next) => {
  axios.get(`http://localhost:3000/api/users/${req.query.id}`)
    .then(userData => {
      res.render('update-user', { user: userData.data })
    })
    .catch(err => {
      res.send({ message: err.message })
    })
}
