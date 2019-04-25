var connection = require('../config/connection.js');

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableInput, condition, cb) {
        var queryString = "UPDATE " + tableInput + " SET devoured=true WHERE id= " + condition + ";";

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, val, cb) {
        var queryString = "INSERT INTO " + tableInput + " (burger_name) VALUES (?);";
        console.log(queryString);

        connection.query(queryString, [val], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;