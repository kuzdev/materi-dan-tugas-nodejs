const Express = require('express')
const App = Express()
const PORT = 2022
App.set('view engine', 'ejs')

App.listen (PORT, function() {
    console.log('Server is running in port : ' + PORT)
})

App.use(Express.static('public'))

App.get('/', (req, res) => {
    res.render('index')
})
App.get('/product/', (req, res) => {
    res.render('product')
})
App.get('/products/', (req, res) => {
    res.render('products')
})