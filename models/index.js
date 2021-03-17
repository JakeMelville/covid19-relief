const Patient = require('./Patient');
const Location = require('./Location');

Location.belongsToMany(Patient, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
});

Patient.belongsToMany(Location, {
    foreignKey: 'patient_id',
    onDelete: 'CASCADE'
});

module.exports = { Patient, Location };

