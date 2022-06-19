const Koa = require('koa');
const Router = require('koa-router');
const router = new Router();

const app = new Koa();


router.get('/' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Home page</h1>'
})

router.get('/index' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Index page</h1>'
})

router.get('/about' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>about page</h1>'
})

router.get('/contact' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>contact page</h1>'
})


app.use(router.routes())

app.listen(3000);