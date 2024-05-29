const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors({
    origin: ['http://localhost:3000' , "https://t-shirt-store.onrender.com"]
}));
app.use(express.json());

const tshirts = [
    { id: 1, name: 'Red Polo', color: 'Red', type: 'Polo', gender: 'Men', price: 20, quantity: 10 },
    { id: 2, name: 'Blue T-shirt', color: 'Blue', type: 'T-shirt', gender: 'Men', price: 15, quantity: 5 },
    { id: 3, name: 'Green Polo', color: 'Green', type: 'Polo', gender: 'Men', price: 25, quantity: 8 },
    { id: 4, name: 'Yellow T-shirt', color: 'Yellow', type: 'T-shirt', gender: 'Women', price: 18, quantity: 12 },
    { id: 5, name: 'Black T-shirt', color: 'Black', type: 'T-shirt', gender: 'Men', price: 22, quantity: 7 },
    { id: 6, name: 'White Polo', color: 'White', type: 'Polo', gender: 'Women', price: 30, quantity: 4 },
];

app.get('/tshirts', (req, res) => {
    res.json(tshirts);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
