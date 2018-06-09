const express = require('express');
const router = express.Router();

const DOGS = [
  {id: 0, name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21), owner: 'Jack Daniels', walks: []},
  {id: 1, name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12), owner: 'Mike Perry', walks: []},
  {id: 2, name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6), owner: 'Sarah Abrahamson', walks: []},
  {id: 3, name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 15), owner: 'Lara Croft', walks: []},
  {id: 4, name: 'Prince', weight: 65, birthDate: new Date(2017, 5, 4), owner: 'Jerry Seinfeld', walks: []}
]

/* GET api listing. */
router.get('/dogs', (req, res) => {
 
     res.send(JSON.stringify(DOGS));
  
  }
);

router.get('/dogs/:id', (req, res) => {
    res.send(JSON.stringify(DOGS[req.params.id]));
  });

router.post('/dogs', (req, res) => {
    var dog = req.body.dog;
    dog.id = generateId();
    DOGS.push(dog);
    res.send(JSON.stringify(dog)); 
});

router.put('/dogs/:id', (req, res) => {
    var dogIndex = DOGS.findIndex((dog) => dog.id.toString() == req.params.id.toString());
    dogId = DOGS[dogIndex].id;
    DOGS[dogIndex] = req.body.dog;
    DOGS[dogIndex].id = dogId;
    res.send(JSON.stringify(DOGS[dogIndex]));
});

router.delete('/dogs/:id', (req, res) => {
    var dogIndex = DOGS.findIndex((dog) => dog.id.toString() == req.params.id.toString());
    DOGS.splice(dogIndex, 1);
    res.status(200).send({});
});

function generateId() {
    return DOGS[DOGS.length - 1].id + 1;
}

module.exports = router;
