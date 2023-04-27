const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express')
//const mongoose = require('mongoose')
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const cors = require('cors');

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
//**tried to seperate mongodb connection and server listening */
// mongoose.connect(process.env.MONGO_URI,{
//   useNewUrlParser : true,
//   useUnifiedTopology : true
// })
//   // .then(() => {
  //   // listen for requests
  //   app.listen(process.env.PORT, () => {
  //     console.log('connected to db & listening on port', process.env.PORT)
  //   })
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
  mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
  }).then(console.log('Db connected')).catch((e)=>{
    console.log(e);
  })

  app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`);
  })
