const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")








const app=express()
app.use(cors())
app.use(express.json())








mongoose.connect("mongodb://aleena:aleena1234@ac-etp0lvq-shard-00-00.rb4mymb.mongodb.net:27017,ac-etp0lvq-shard-00-01.rb4mymb.mongodb.net:27017,ac-etp0lvq-shard-00-02.rb4mymb.mongodb.net:27017/coursedb?ssl=true&replicaSet=atlas-mfk3xx-shard-0&authSource=admin&appName=Cluster0").then(








        ()=>{
            console.log("mongodb connected")
        }








    ).catch(
        (error)=>{
            console.log(error)
        }
    )






const Ev=mongoose.model("ev",new mongoose.Schema(


 {
    BookingID: String,
    OwnerName: String,
    Email: String,
    Phone: String,
    VehicleRegistrationNumber: String,
    VehicleBrand: String,
    VehicleModel: String,
    BatteryCapacity: String,
    ConnectorType: String,
    ChargingDate: String,
    TimeSlot: String,
    EstimatedUnits: String,
    ChargingBayNumber: String
 }




    ))












app.get("/test",(request,response)=>{   //Should be in this order 1st request then response








    response.send("Hello all")     //if this api called pass msg hello








})








app.post("/add",async(request,response)=>{








   await  Ev.create(request.body)    
    response.json({"status":"success"})
 
})
























app.listen(3000,()=>{








    console.log("Server Started")








})






