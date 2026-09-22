const router = require("express").Router();

router.get('/', (rep, res) => res.json({ users: [
    {
        'id': 202521037,
        'fullName': Isaiah_Jaireh_Peralta,
        'email': 'peralta@example2.com'
    }
] }));
router.post('/', (req, res) => res.status(201.).json(req.body));
router.get('/:id', (req, res) => res.json({user: req.params.id}));
router.delete('/:id', (rec, res) => res.status(204).send());

module.exports = routers;