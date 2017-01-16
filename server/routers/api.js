const router = require('express').Router(),
      storage = require('./../lib/storage.service'),
      _ = require('lodash');

router.get('/about', (req, res) => {
    res.json({
        name: 'Wypożyczalnia wideo "Pod 7 kotami"',
        hours: {
            monday: "9:00 - 19:00",
            thusday: "9:00 - 19:00",
            wednesday: "9:00 - 19:00",
            thursday: "9:00 - 19:00",
            friday: "9:00 - 19:00",
            saturday: "11:00 - 15:00",
            sunday: "Zamknięte"
        }
    });
});

router.get('/movies', (req, res) => {
    res.json(storage.getAllMovies());
});

router.get('/movies/:category', (req, res) => {
    res.json(storage.getMoviesFrom(req.params.category))
});

router.post('/borrow', (req, res) => {
    if (!/\w+/.test(_.get(req, 'body.form.firstName', ''))) {
        res.status(500).send('Niepoprawne imię.');
        return;
    }
    if (!/\w+/.test(_.get(req, 'body.form.lastName', ''))) {
        res.status(500).send('Niepoprawne nazwisko.');
        return;
    }
    if (!/\d{9,10}/.test(_.get(req, 'body.form.phone'))) {
        res.status(500).send('Niepoprawny numer telefonu.');
        return;
    }
    if (storage.borrow(req.body.movieIds)){
        res.status(200).send();
    } else {
        res.status(500).send('Podczas składania zamówienia wystąpił problem.');
    }
});

module.exports = router;
