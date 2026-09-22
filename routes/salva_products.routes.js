const router = require('express').Router ();

router.get('/', (req, res) => res.json({ products: [
    {
        'item_id' : 12345,
        'product_name' : corn,
        'product_price' : 200
    }
] }));
router.post('/', (req, res) => res.status(201).json(req.body));
router.get('/:id', (req, res) => res.json({ product: req.params.id }));
router.delete('/:id', (req, res) => res.status(204).send());

module.export = router;