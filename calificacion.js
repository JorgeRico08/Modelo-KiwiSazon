const reviewSchema=new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    comment:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now()
    }
})