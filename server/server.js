const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
const PORT = 5555;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/', async function(req, res){
    const {name, description, startDate, dueDate, idList, key, token} = req.body;
    try{
    const response = await fetch('https://api.trello.com/1/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${name}`,
          desc: `${description}`,
          start : `${startDate}`,
          due: `${dueDate}`,
          idList: `${idList}`, 
          key: `${key}`,
          token: `${token}`
        })
      });
      const data = await response.json();

      res.status(200).json({"Access-Control-Allow-Origin": "http://127.0.0.1:5500"
    });
    }catch(e){
        console.log("Error in sending request");
        res.status(500).json({message: e.message});
    }
});



app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});