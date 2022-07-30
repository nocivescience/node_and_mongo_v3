const express=require('express');
const app=express();
const {engine}=require('express-handlebars');
const morgan=require('morgan');
const path=require('path')
const indexRouter=require('./routers/index.routers')
app.set('port', process.env.PORT||3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
    '.hbs',
    engine({
        defaultLayout:'main',
        layoutsDir:path.join(app.get('views'),'layouts'),
        partialsDir: path.join(app.get('views'),'partials'),
        extname:'.hbs'
    })
);
app.set('view engine', '.hbs');
app.use(indexRouter)
app.listen(app.get('port'),()=>{
    console.log(`puerto ${app.get('port')} listo`)
})