import { Schema, model } from "mongoose";

const productoEsquema =new Schema(
    {
        nombre: {
            type: String,
            requiered: true,
            unique: true,
            trim: true,
        },
        descripcion:{
            type: String,
            requiered: true,
        },
        precio:{
            type: String,
            requiered: true,
        },
        opcion: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model("Productos", productoEsquema);