const routes = require('next-routes')();

routes.add('/posts/new', '/posts/new');
routes.add('/posts/:id', '/posts/details');

module.exports = routes;
