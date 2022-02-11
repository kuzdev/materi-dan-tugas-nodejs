const Express = require('express')
const App = Express()
const PORT = 2022
App.set('view engine', 'ejs')



App.use(Express.static('public'))

//link / route / endpoint / path sebuah page dalam website
//reg= request, res = response

// App.get('/', (req, res) => {
//     res.render('index')
// })
// App.get('/product/', (req, res) => {
//     res.render('product')
// })
// App.get('/products/', (req, res) => {
//     res.render('products')
// })

// Routing
const routing = require("./routes/routes");
App.use(routing);

App.listen (PORT, function() {
    console.log('Server is running in port : ' + PORT)
})
  