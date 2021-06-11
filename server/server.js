const express = require('express')
const app = express()
const port = 3001
const Harrow = require("./data/Harrow")
const Heathrow = require("./data/Heathrow")
const stratford = require("./data/stratford")
const cors = require("cors")
app.use(cors())

app.get('/', (req, res) => {
     res.send('Hello World!')
})
app.get('/:city/pharmacies', (req, res) => {
    const {city} = req.params;
    if (city === "harrow"){
        res.send(Harrow.pharmacies)
    } else if (city === "heathrow"){
        res.send(Heathrow.pharmacies)
    } else if (city === "stratford"){
        res.send(stratford.pharmacies)
    } 
})
app.get('/:city/pharmacies', (req, res) => {
    const {city} = req.params;
    if (city === "harrow"){
        res.send(Harrow.pharmacies)
    } else if (city === "heathrow"){
        res.send(Heathrow.pharmacies)
    } else if (city === "stratford"){
        res.send(stratford.pharmacies)
    } 
})
app.get('/:city/doctors', (req, res) => {
    const {city} = req.params;
    if (city === "harrow"){
        res.send(Harrow.doctors)
    } else if (city === "heathrow"){
        res.send(Heathrow.doctors)
    } else if (city === "stratford"){
        res.send(stratford.doctors)
    } 
})
app.get('/:city/hospitals', (req, res) => {
    const {city} = req.params;
    if (city === "harrow"){
        res.send(Harrow.hospitals)
    } else if (city === "heathrow"){
        res.send(Heathrow.hospitals)
    } else if (city === "stratford"){
        res.send(stratford.hospitals)
    } 
})
app.get('/:city/colleges', (req, res) => {
    const {city} = req.params;
    if (city === "harrow"){
        res.send(Harrow.colleges)
    } else if (city === "heathrow"){
        res.send(Heathrow.colleges)
    } else if (city === "stratford"){
        res.send(stratford.colleges)
    } 
})
app.listen(port, () => console.log(` app listening on port ${port}!`))
