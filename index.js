// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Create an Express application
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to my Express server!');
});
var location ;
var istrue = false ;

app.post('/api/save', (req, res) => {
    const data = req.body;
     location = data ;
    
    console.log('Received data:', data);
    res.status(200).json({ message: 'Data saved successfully' });
  });
app.get('/api/location', (req, res)=>{
   if(!location){
       return res.status(404).json({message:"No Location Found"})
   }else{
       res.status(200).json(location)
   }
})

app.get('/api/ack',(req,res)=>{
    var text= "We Have your Location, Help will arrive shortly" ;
    
    istrue = true ;
    res.send(text) ;
})
app.get('/api/ackfront',(req,res)=>{
   
    res.send(istrue) ;
})
app.get('/api/ackback',(req,res)=>{
    istrue = false ;
   
   
    res.send(istrue) ;
})
// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
