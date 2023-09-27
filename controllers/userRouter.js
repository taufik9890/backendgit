
const express = require('express')
const router = express.Router()


router.get('/',(req, res)=>{
    // res.send('hello world hiii')
    res.json(
        [
            {
                name: 'taufik'
            },
            {
                name: 'Koli'
            },
            {
                name: 'Mridula'
            },
            {
                name: 'Iffat'
            },
            {
                name: 'Amena'
            },
            {
                name: 'Khatun'
            },
        ]
    )
})
// jehitu ami json er through te api banabo tahole array te multiple object thakbe 



module.exports = router