import * as express from 'express'
import PostRouter from './routes/post';

class App {
  public express

  constructor () {
    this.express = express();
    this.mountRoutes();
    this.socketRoutes();
  }

  private mountRoutes (): void {
    this.express.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    
    this.express.use('/', PostRouter)
  }

  private socketRoutes() {
    
  }
}

export default new App().express
