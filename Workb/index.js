const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000


app.use(morgan('combined'))

var sum=(a,b)=>{
    a=a*2
    b=b*2
    return a+b+3
}
var x=sum(1,3)
 
app.get('/home', (req, res) =>
  res.send('Con cac di me may')
)
app.get('/shop', (req, res) =>{
  res.send('value is:' + x)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

