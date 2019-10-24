const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path'); //in case we have any problems with the path
const anotherPage = require('./routes/index');

const hbs = handlebars.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/main'),
    partialsDir: path.join(__dirname, 'views/parts'),

    //create CUSTOM HELPER 
    helpers: {
        calculation: (value) => {
            return value + 50
        },

        list: (value, options) => {
            //return '<h2>' + options.fn({ value: value, test: 'mweinwei' }) + '</h2>';
            let out = '<ul>';

            for (let i = 0; i < value.length; i++) {
                out = out + '<li>' + options.fn(value[i]) + '</li>';
            }

            return out + '</ul>'
        }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/admin', anotherPage);

app.listen(3000, () => {
    console.log('---Server: Working')
});