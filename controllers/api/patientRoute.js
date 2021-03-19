const router = require('express').Router();
const { Patient } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const patientData = await Patient.create(req.body);
        res.status(200).json(patientData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req,res) => {
    try {
        const patientData = await Patient.destroy({
            where: { id: req.params.id }
        });
        if (!patientData) {
            res.status(404).json({ message: 'No information saved with this login!' });
            return;
        }
        res.status(200).json(patientData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;