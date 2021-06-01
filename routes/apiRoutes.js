const fs = require('fs');
let noteInput = require('../db/db.json');
const uuid = require('uuid').v4;

module.exports = (app) => {

    // GET
    app.get('/api/notes', (req, res) => res.json(noteInput));

    //POST
    app.post('/api/notes', (req, res) => {
        console.log(req.body);

        // makes the database include an id for each object
        const noteWithId = {...req.body, id: uuid()};

        // pushes the req.body with id into the db json 
        noteInput.push(noteWithId);

        fs.writeFile(`${noteInput}`, JSON.stringify(noteWithId), (err) => {
            if (err) throw err;
        });

        res.json(noteInput);
    });


}