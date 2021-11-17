const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const layouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());

app.use(express.static('public'));

app.use(session({
    secret: 'some_secret_key',
    cookie: {}
}));

//routes
const index = require('./routes/index');
const auth = require('./routes/auth');

app.use('/', index);
app.use('/auth', auth);

// use layouts
app.use(layouts);
app.set('layout', 'layouts/main.ejs');

// place all styles block in the layout at the head
app.set("layout extractStyles", true)
// place all scripts block in the layout at the end
app.set("layout extractScripts", true)


app.listen(3000);
console.log('Server runs at port 3000....')