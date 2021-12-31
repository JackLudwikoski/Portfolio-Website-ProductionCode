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
    return connection;
}

var connection = initializeConnection({
    host    : 'sitesbyjack.com',
    user    : 'u1uo0e1wu4ncr',
    password: 'Sportjack137955',
    database: 'db0xwkjrbcvqop'
});

exports.contactSubmitController = (req, res) => {
    //console.log(req.body);
    data = req.body;
    const date = new Date();
    connection.query(`INSERT INTO ContactMessages VALUES ('${date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay()}',
                                                            '${date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}', 
                                                            '${data.contactFirst}', 
                                                            '${data.contactLast}',
                                                            '${data.contactFormEmail}',
                                                            '${data.contactReason}',
                                                            '${data.contactTextBox}');`, function (error, results, fields) {
                                                                console.log(error);
                                                            });
    res.json({
        data: "successful post request and retrieval"
    })
}