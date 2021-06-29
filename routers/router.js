const userRouter = require('./user_router');

function initRouter(app) {
    app.use('/user', userRouter);
}

module.exports = initRouter;