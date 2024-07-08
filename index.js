import express from "express";
import axios from "axios";
const app=express();
const PORT=3000;
const currency="INR";
const URL=`https://api.currencyapi.com/v3/latest?apikey=cur_live_xU1K6z1aXGt4BaGtrfsuw1u6czGtNZk6KUNodrUZ&currencies=&base_currency=${currency}`
app.get("/",async (req,res)=>{
    const apiresponse=await axios.get(URL);
    console.log(`Api response ${JSON.stringify(apiresponse.data.data.ADA)}`)
    console.log(Object.keys(apiresponse.data.data));
    return res.send("Hello");
});


app.listen(PORT,(err)=>{
    if(err){
        console.log(`Error starting server ${err}`);
    }
    else{
        console.log(`Server running on port :${PORT}`);
    }
})