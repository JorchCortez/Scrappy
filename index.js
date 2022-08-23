const axios    = require('axios')
const cheerio  = require('cheerio');
const { response } = require('express');
const express  = require('express')

const app = express();
const PORT = 8000;
const URL = "https://www.thecoderaccoons.com/"


axios(URL)
    .then(res => {
        const html = res.data
        const $ = cheerio.load(html)
        const items = []
        //console.log(html)
        $('link', html).each(function(){
            let itemName    = $(this).attr('rel'); 
           // console.log(itemName)
            items.push({
                itemName
            })
        })
        console.log(items)
        
    })
    .catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))