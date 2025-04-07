var express=require("express");
var app=express();
var port=4000;
require('./db')
var sModel=require('./model/sample')
//middleware
app.use(express.json());
//writing API add data to DB
app.post ('/',(req,res)=>{
    try {
        sModel(req.body).save();
        res.send("Data added")
    } catch (error) {
        res.send(error)
        
    }
})
//API read
app.get('/',async(req,res)=>{
    try {
        var data=await sModel.find();
        res.send(data)
    } catch (error) {
        res.send(error)
        
    }
})
//delete
app.delete ('/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await sModel.findByIdAndDelete(req.params.id);
        res.send("Data Deleted")
    } catch (error) {
        res.send(error)
        
    }
})
app.put('/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await sModel.findByIdAndUpdate(req.params.id,req.body);
        res.send("Edited")
    } catch (error) {
      res.send(error)  
    }
})


app.listen(port,()=>{
    console.log(`server is up running in ${port}`)
})
