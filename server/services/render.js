exports.homeRoutes = (req, res, next) => {
  res.render('index.ejs')
}
exports.addUsers = (req, res, next) => {
  res.render('add-user.ejs')
}
exports.updateUsers = (req, res, next) => {
  res.render('update-user.ejs')
}
