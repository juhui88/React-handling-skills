const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();


posts.get('/',postCtrl.list);
posts.post('/',postsCtrl.write);
posts.get('/:id',postsCtrl.read);
posts.delete('/:id',postsCtrl.remove);
posts.put('/:id',postsCtrl.replace);
posts.patch('/:id',postsCtrl.update);

module.export = posts;