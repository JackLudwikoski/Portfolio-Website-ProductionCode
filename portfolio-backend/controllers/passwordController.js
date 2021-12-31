// let players = require("../dummyDatabase");


exports.passwordController = (req, res) => {
    res.json({
        password: "Sportjack137955!"
    })
}

/*
exports.passwordController = async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    try {
        let player = players.find(player => player._id === id);
        res.status(200).json({
            data: player
        });
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
}
*/