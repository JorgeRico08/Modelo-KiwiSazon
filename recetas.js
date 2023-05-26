const recetaSchema =mongoose.Schema({
    user: {
        type: mongoose.ObjectId,
        ref: "users",
    },
    platilloNombre:{
        type:String
    },
    ingredientes:{
        type: String
    },
    pasosSeguir:{
        type: String
    },
    dificultad: {
        type: String
    },
    tiempo: {
        type: Number
    },
    porciones: {
        type: Number
    },
    cuentaMas: {
        type: Number
    },
    tips: {
        type: String
    },
    precentacion:{
        type: String
    },
    categoria: {
        type: String
    },
    calificacion:[
        {
            type:mongoose.ObjectId,
            ref:"calificcacion"
        },
    ],
})