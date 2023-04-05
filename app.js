const express = require("express");

const app = express();

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.get("/",(req,res)=>{
  
  res.status(200).send("Home Page")
})

app.get("*",(req,res)=>{
  res.status(404).send("Your requested page isn't found")
})


app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
