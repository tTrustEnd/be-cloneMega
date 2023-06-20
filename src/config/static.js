const path = require('path')
const express = require('express')
const configStatic = (app) =>{
    app.use(express.static('src/public'))
}
module.exports = configStatic;
