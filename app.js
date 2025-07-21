const express = require('express');
const connectDB = require('./src/util/db.js');
const cors = require('cors');
const bookRoutes = require('./src/routes/book.route.js');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/book', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});