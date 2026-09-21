const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({limit:"2mb"}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req,res)=>res.json({ok:true, app:"PrintPro Tools"}));

app.get("*", (req,res)=>{
  res.sendFile(path.join(__dirname,"public","index.html"));
});

app.listen(PORT, ()=>console.log(`PrintPro Tools running on port ${PORT}`));
