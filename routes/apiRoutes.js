const fs = require('fs');
let noteInput = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
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

        fs.writeFile('./db/db.json', JSON.stringify(noteWithId), (err) => {
            if (err) throw err;
        });

        res.json(noteInput);
    });

    app.delete('/api/notes/:id', (req, res) => {
        
        const noteId = req.params.id;

        for (let i = 0; i < noteInput.length; i++) {
            if(noteInput[i].id === noteId) {
                noteInput.splice(i, 1);
            }
        }

        fs.writeFile('./db/db.json', JSON.stringify(noteInput), (err) => {
            if (err) throw err;
        });

        res.json(noteInput);
    });


}