const router = require('express').Router();

router.get('/', (req, res) => res.json({ orders: [ 
    {

        'id': 202521142,
        'totalAmount': 222,
        'status': double

    }
    
]}));
routers.post('/', (req, res) => res.status(201).json(req.body));   
routers.get('/:id', (req, res) => res.json({ order: req.params.id }));
routers.delete('/:id', (req, res) => res.status(204).send());

module.exports = routers;
