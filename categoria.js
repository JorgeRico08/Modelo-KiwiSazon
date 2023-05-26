const categoriaSchema=new mongoose.Schema({
    categorias:{
        type:String,
        required:true,
        unique: true
    }
})