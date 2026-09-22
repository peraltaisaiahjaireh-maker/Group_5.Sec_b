const router = require('express').Router();

router.get('/', (req, res) => res.json({ suppliers: [

{
  id: 2006,
  company_Name: RenebButterChicken,
  email: RenebutterchickenEmail.com
}
] }));
router.post('/', (req, res) => res.status(201).json(req.body));          
router.get('/', (req, res) => res.json({ supplier: req.params.id }));
router.delete('/', (req, res) => res.status(204).send());

module.exports = routers;







