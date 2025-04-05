var express=require("express");
var app=express();
var port=2000;
require('./db')
var sampleModel=require('./model/sample')
//middleware
app.use(express.json());
//writing API add data to DB
app.post ('/',(req,res)=>{
    try {
        sampleModel(req.body).save();
        res.send("Data added")
    } catch (error) {
        res.send(error)
        
    }
})
app.get('/',async(req,res)=>{
    try {
        var data=await sampleModel.find();
        res.send(data)
    } catch (err) {
       res.send(err)
        
    }
})
//delete
app.delete ('/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await sampleModel.findByIdAndDelete(req.params.id);
        res.send("Data Deleted")
    } catch (error) {
        res.send(error)
        
    }
})








app.listen(port,()=>{
    console.log(`server is up running in ${port}`)
})
