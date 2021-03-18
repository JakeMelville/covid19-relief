const Patient = require('./Patient');
const Location = require('./Location');
const User = require('./User');

Location.belongsToMany(Patient, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
});

Patient.belongsToMany(Location, {
    foreignKey: 'patient_id',
    onDelete: 'CASCADE'
});

User.belongsTo(Patient, {
    foreignKey: "user_id",
});

module.exports = { Patient, Location, User };

