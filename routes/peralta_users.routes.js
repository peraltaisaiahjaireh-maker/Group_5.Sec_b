const router = require("express").Router();

router.get('/', (rep, res) => res.json({ categoies: [] }));
router.post('/', (req, res) => res.status(201.).json(req.body));
router.get('/:id', (req, res) => res.json({category: req.params.id}));
router.delete('/:id', (rec, res) => res.status(204).send());

module.exports = routers;