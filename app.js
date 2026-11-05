
import express from 'express';
const app = express();
const PORT = 3011;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const person = {name: 'Donald Duck', occupation: 'plumber', color: 'blue' };
    res.render('home', {person});
});

// Define a default "route" ('/')
app.get('/friends', (req, res) => {
    const friends = [ 'Mickey', 'Goofy', 'Minnie', 'Daisy' ];
    res.render('friends', { friends });
});

// Define a default "route" ('/')
app.get('/movies', (req, res) => {
    const movies = [ 'Goofy Movie', 'Moana', 'Frozen', 'Tangled' ];
    res.render('movies', { movies });
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));