var mysql = require("mysql");

function initializeConnection(config) {
    function addDisconnectHandler(connection) {
        connection.on("error", function (error) {
            if (error instanceof Error) {
                if (error.code === "PROTOCOL_CONNECTION_LOST") {
                    //console.error(error.stack);
                    //console.log("Lost connection. Reconnecting...");

                    initializeConnection(connection.config);
                } else if (error.fatal) {
                    throw error;
                }
            }
        });
    }

    connection = mysql.createConnection(config);

    // Add handlers.
    addDisconnectHandler(connection);

    connection.connect();
    return connection;
}

var connection = initializeConnection({
    host    : 'sitesbyjack.com',
    user    : 'u1uo0e1wu4ncr',
    password: 'Sportjack137955',
    database: 'db0xwkjrbcvqop'
});

exports.messagesController = (req, res) => {
    connection.query('SELECT * FROM ContactMessages;', function (err, results, fields) {
        if (err) throw err;
        //console.log("The solution is: ", results);
        res.json({
            data: results
        })
    });
}