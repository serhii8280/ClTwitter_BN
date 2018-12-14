import * as express from 'express'
import * as PostController from './../controllers/postController';

const router = express.Router();
router.post('/post', PostController.post);

export default router;
