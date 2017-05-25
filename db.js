var mssql = require('mssql');

var dbConfig = {
    user:  'musicstore',
    password: 'nickelpen2',
    server: 'musicstore.cliaj813vwy8.us-west-2.rds.amazonaws.com',
    database:'musicstore'
};


var connection = mssql.connect(dbConfig, function (err) {
    if (err)
        throw err; 
});

module.exports = mssql;