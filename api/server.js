if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const app = require('./app');

// Set port
const port = 7000;
app.listen(port, () => {
    console.log(`Movies API server running on ${port}`);
});
