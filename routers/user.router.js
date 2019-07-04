const router = require('express').Router();

module.exports = (wagner) => {
    const userCtrl = wagner.invoke((User) => require('../controllers/user.controller')(User));
                                            //nombre del metodo
    router.post('/', (req, res) => userCtrl.createUser(req, res));
    router.get('/', (req, res) => userCtrl.findAll(req, res));
    router.get('/:id', (req, res) => userCtrl.findUserById(req, res));
    router.put('/:id', (req, res) => userCtrl.updateById(req, res));
    router.delete('/:id', (req, res) => userCtrl.deleteById(req, res));
    router.post('/login', (req, res) => userCtrl.login(req, res));
    return router;
}