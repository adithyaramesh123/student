var mongoose=require("mongoose");

const sampleschema=mongoose.Schema({
    sName:String,
    sAge:Number,
    sDept:String
})
//mongoose passing.schema name
const sampleModel=mongoose.model("sample",sampleschema);
module.exports=sampleModel;