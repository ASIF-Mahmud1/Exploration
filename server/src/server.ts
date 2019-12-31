import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from  './middlewares/logger' //'../middleware/logger'

//import PostsController from   './controllers' //'./controllers/posts/posts.controller'
import HomeController from  './controllers/home.controller' //'./controllers/home/home.controller'

const app = new App({
    port: 5000,
    controllers: [
        new HomeController(),
     //   new PostsController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()