// Dependencies
// =============================================================

// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");

var Student = sequelize.define('student', {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    student_id: {
        type: Sequelize.INT
    },
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    school_id: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

// Sync model with DB
Book.sync();
// Export the book model for other files to use
module.exports = Book;