
let noteInput = require('../db/db.json');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(noteInput));

    app.post('/api/notes', (req, res) => {
        console.log(req.body);

        noteInput.push(req.body);
    });
}