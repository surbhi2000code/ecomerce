const express = require('express')
const mysql= require('mysql')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'ecommerce'
});

db.connect(function(err){
    if (err) throw err;
    console.log("connected");
})

app.post('/product', (req, res) => {

    const { prodName, prodPrice, prodImage, prodDetail } = req.body;
    db.query(`INSERT INTO product (prodName, prodPrice, prodImage, prodDetail) VALUES (?,?,?,?)`,
        [prodName, prodPrice, prodImage, prodDetail],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/products', (req, res) => {

    const { prodtName, prodtPrice, prodtImage1,prodtImage2,prodtImage3,prodtImage4, prodtDetail } = req.body;
    db.query(`INSERT INTO shoproduct (prodtName, prodtPrice, prodtImage1,prodtImage2,prodtImage3,prodtImage4, prodtDetail) VALUES (?,?,?,?,?,?,?)`,
        [prodtName, prodtPrice, prodtImage1,prodtImage2,prodtImage3,prodtImage4, prodtDetail],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/category', (req, res) => {

    const { cateName, cateImage} = req.body;
    db.query(`INSERT INTO category (cateName, cateImage) VALUES (?,?)`,
        [cateName, cateImage],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})
app.get('/showCategory', (req, res) => {
    db.query(
        `SELECT * FROM category`,
        (err, result) => {
            return res.json(result);
        }
    )
})



app.get('/allProduct', (req, res) => {
    db.query(
        `SELECT * FROM product`,
        (err, result) => {
            return res.json(result);
        }
    )
})
app.get('/showProducts', (req, res) => {
    db.query(
        `SELECT * FROM shoproduct`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/allUser', (req, res) => {
    const { userId } = req.body;
    db.query(
        `SELECT * FROM userdata WHERE email='${userId}'`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/productList', (req, res) => {
    const { id } = req.body;
    db.query(
        `SELECT * FROM product WHERE CatId='${id}'`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/userSignin', (req, res) => {

    const { email, password } = req.body;
    db.query(`INSERT INTO userdata (email, password) VALUES (?,?)`,
        [email, password],
        (err, result) => {
            if (err) {
                res.status(400).json('Already Register');
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/userLogin', (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    db.query(
        `SELECT * FROM userdata WHERE email='${email}' AND password='${password}'`,
        (err, result) => {
            if(result.length === 0) {
                res.json('Email and Password is wrong');
            } else if(result.length === 1) {
                res.status(200).json({message:'Successfully', data:result});
            } else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/cartProduct', (req, res) => {

    const { userId, productId, productName,quantity, productImage, productPrice,price } = req.body;
    db.query(`INSERT INTO usercart (userId, productId, productName,quantity, productImage, productPrice,price) VALUES (?,?,?,?,?,?,?)`,
        [userId, productId, productName,quantity, productImage, productPrice,price],
        (err, result) => {
            if (err) {
                res.status(400).json({errs:err});
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/productDetail', (req, res) => {
    const { productId } = req.body;
    db.query(
        `SELECT * FROM shoproduct WHERE id= '${productId}'`,
        (err, result) => {
            return res.send(result);
        }
    )
}) 

app.post('/showCart', (req, res) => {
    const { userId } = req.body;
    
    db.query(
        `SELECT * FROM usercart WHERE userId='${userId}'`,
        (err, result) => {
            if(result.length === 0) {
                res.json('id not found');
            } else if(result.length > 0) {
                res.status(200).json({message:'Successfully', data:result});
            } else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/addquantity', (req, res) => {
    const { id } = req.body;
    
    db.query(
        `SELECT * FROM usercart WHERE ID='${id}'`,
        (err, result) => {
            res.status(200).json(result);
            
        }
    )
})

app.post('/removeCart', (req, res) => {
    const { ID } = req.body;
    console.log(ID);
    
    db.query(
        `DELETE FROM usercart WHERE ID='${ID}'`,
        (err, result) => {
            
                res.status(200).json(result);
            
            
        }
    )
})

app.post('/updateCart', (req, res) => {
    const { ID, quantity, price } = req.body;
    console.log(ID);
    
    db.query(
        `UPDATE usercart SET quantity= '${quantity}', price='${price}' WHERE ID='${ID}'`,
        (err, result) => {
            
                res.status(400).json(result);
   
            
        }
    )
})

app.post('/userOrder', (req, res) => {

    const { userId,  prodtName,totalPrice, prodtImage } = req.body;
    db.query(`INSERT INTO userorder (userId,  prodtName,totalPrice, prodtImage) VALUES (?,?,?,?)`,
        [userId,  prodtName,totalPrice, prodtImage],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/showOrder', (req, res) => {
    const { userId } = req.body;
    
    db.query(
        `SELECT * FROM userorder WHERE userId='${userId}'`,
        (err, result) => {
            if(result.length === 0) {
                res.json('order not found');
            } else if(result.length > 0) {
                res.status(200).json({message:'Successfully', data:result});
            } else {
                res.status(400).json(err);
            }
            
        }
    )
})


app.post('/showOrderAdmin', (req, res) => {
    
    db.query(
        `SELECT * FROM userorder `,
        (err, result) => {
            if(result.length === 0) {
                res.json('order not found');
            } else if(result.length > 0) {
                res.status(200).json({message:'Successfully', data:result});
            } else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/adminLogin', (req, res) => {
    const { email, password } = req.body;

    if(email === '' || password === ''){
        res.send('empty feild ')
    } else if(email === 'admin123@gmail.com' && password === 'admin123'){
        res.send('Successfully')
    } else (
        res.send('user not found')
    )
})

app.listen(3001, ()=>{
    console.log('server is run on 3001');
})