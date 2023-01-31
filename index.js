import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import visitorRoutes from './routes/visitorRoutes.js';
//intialize the app
const app = express();

//Middleware
//localhost: 5000/posts

// now we use all different methods on this app instance
// setting up body-parser to send our req properly
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/', visitorRoutes);


//Connect with mongo db
const CONNECTION_URL = 'mongodb+srv://Vandana12:test123@sei.pvhxva8.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

  mongoose.set("strictQuery", true);
