const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        name: 'Demis Russo',
        age: 20,
        isDisplayName: true,
        isAgeEnabled: true,

        people: [
            {firstName: 'John', lastName: 'Swagger'},
            {firstName: 'Maria', lastName: 'Sway'},
            {firstName: 'Denny', lastName: 'Manny'},
        ]
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        description: 'this is a description'
    })
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        title: 'Dashboard Page',
        isListEnabled: false
    })
})

router.get('/each/helper', (req, res) => {
    res.render('contact', {
        title: 'Contact Page',
        brand: [
            'Mclaren',
            'Suzuki',
            'Bugatti',
            'Mazda'
        ],


        list: [
            {
                items: ['maçã', 'banana', 'mamao']
            },
            {
                items: ['nodejs', 'express', 'path']
            }
        ]
    })
})

router.get('/lookup', (req, res) => {
    res.render('lookup', {
        title: 'Lookup Page',

        game: {
            gameTitle: 'Call of Duty',
            subtitle: 'Modern Warfare',
            year: '2019',
            genre: 'First-Person-Shooter',
        },
        brand: [
            'Mclaren',
            'Suzuki',
            'Bugatti',
            'Mazda'
        ],
    })
})

module.exports = router;