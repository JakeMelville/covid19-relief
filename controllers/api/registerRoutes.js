const router = require('express').Router();
const { Register } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const regData = await Register.create(req.body);
        res.status(200).json(regData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const regData = await Register.destroy({
            where: { id: req.params.id }
        });
        if  (!regData) {
            res.status(404).json({ message: 'No registration with this id!' });
            return;
        }
        res.status(200).json(regData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;