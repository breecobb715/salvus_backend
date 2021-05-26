// Dependencies
// =============================================================

// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");

var Student = sequelize.define('student', {
    student_id: {
        type: Sequelize.INTEGER
    },
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.STRING
    },
    parent_first_name: {
        type: Sequelize.STRING
    },
    parent_last_name: {
        type: Sequelize.STRING
    },
    parent_contact_method: {
        type: Sequelize.STRING
    },
    parent_contact_info: {
        type: Sequelize.STRING
    },
}, {
    timestamps: false
});

// Sync model with DB
Student.sync();
// Export the book model for other files to use
module.exports = Student;