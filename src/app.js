const express = require('express');
const path = require('path');
const authRouter = require('./routes/auth.routes')
const mainRouter = require('./routes/main.routes')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/auth', authRouter);
app.use('/', mainRouter);


app.listen(3333, () => console.log('aplicação rodando na porta 3333 🚀'));