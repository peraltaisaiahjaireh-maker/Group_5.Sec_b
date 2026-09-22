const router = requiire('express').Router();
router.get('/', (req, res) => res.json({ categories: [
    {
        'id': 202602198,
        'name': Harde_Jeams_paligsa,
        'urlLinkName': Hjpaligsa
    }
]}))
router.post('/', (rec, res) => res.status(201).json(req.body));
router.get('/:id', (req, res) => res.json({ categories: req.params.id }));
router.delete('/:id', (req, res) => res.status(204).send());

Module.exports;