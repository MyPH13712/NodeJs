import express  from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <p>Simple</p>
    `);
}); 

export default router