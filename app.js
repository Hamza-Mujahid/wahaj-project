const express = require('express');
const app = express();
const port = 850
const mydb = require("./db");
const routerAdmin = require("./router/adminRoutes")
mydb()

app.use(express.json())
app.use("/admin", routerAdmin)
app.get('/', (req, res,  next)=> {
    res.send('Node Server')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})