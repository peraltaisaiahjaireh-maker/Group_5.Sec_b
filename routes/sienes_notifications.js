const router = require('express'). Router();

router.get('/', (req, res) => res.json({ notifacation: [
    {
        id: 120434,
        type: souce,
        message: arayykoopooo
    }
]}));
router.post('/', (req, res) => res.status(201).json(req.body));
router.get('/:id', (req, res) => res.json({notifacation: req.params.id}));
router.delete('/:id', (req, res) => res.status(204).send());

module.export = router;