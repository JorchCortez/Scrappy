const axios    = require('axios')
const cheerio  = require('cheerio');
const express  = require('express')

const app = express();
const PORT = 8000;
const URL = "https://skyrocket2022.webflow.io/projects"


axios(URL)
    .then(res => {
        const html = res.data
        const $ = cheerio.load(html)
        const items = [] 
        $('.card-body', html).each(function(){
            let curr = $(this).find(".h-s")
            if(curr){ 
                let itemName = curr.text(); 
                items.push({
                    itemName
                })
            }
           // console.log(itemName)
        })
        console.log(items)
        
    })
    .catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))