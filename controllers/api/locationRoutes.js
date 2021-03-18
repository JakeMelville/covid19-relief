const router = rrquire('express').Router();
const { Location, Patient, Register } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const locationData = await Location.findOne(req.params.id, {
            include: [{ model: Register, through: Patient, as: 'location_user'}]
        });

        if (!locationData) {
            res.status(404).json({ message: 'No location found with this id!' });
            return;
        }

        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const locationData = await Location.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!locationData) {
            res.status(404).json({ message: 'No location found with this id!'});
            return;
        }

        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;