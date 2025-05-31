import express from 'express';
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Server Running Successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
