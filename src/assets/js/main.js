"use strict";

initPreloader();

$(document).ready(function () {

    feather.replace();

    initNavbar();
    
    initMobileMenu();

    initSidebar();

    initModals();

    initScrollReveal();

    initBackToTop();
    
    initBackgroundImages();

    initScrollToHash();

})


// Using Express.js to map endpoints
const express = require('express');
const app = express();

app.get('/mapa', (req, res) => {
    console.log(__dirname)
    res.sendFile('mapa.html', { root: __dirname });
});

app.get('/labs', (req, res) => {
    console.log(__dirname)
    res.sendFile('labs.html', { root: __dirname });
});