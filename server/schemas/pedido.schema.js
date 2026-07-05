import odm from "../config/mongoose.js";

const pedidoSchema = new odm.Schema({
  numero_pedido: {
    type: Number,
    required: true,
  },
  cliente: {
    type: String,
    required: true,
  },
  monto_total: {
    type: Number,
    required: true,
  },
  lectura: {
    type: Boolean,
    default: false,
  },
  pagado: {
    type: Boolean,
    default: false,
  },
  fecha_registro: {
    type: Date,
    default: Date.now,
  }
}, {collection:"pedido", versionKey:"version"});

export const Pedido = odm.model('pedido', pedidoSchema);

export const findAll = async function(){
    console.log("------------schema------------");
    const results= await Pedido.find({});
    console.log(results);
    return results;
}

export const findById = async function(id_pedido){
    console.log("------------schema------------");
    const results= await Pedido.find({_id:id_pedido});
    console.log(results);
    return results;
}

export const create = async function(objPedido){
    console.log("------------schema------------");
    const results= await Pedido.create(objPedido);
    console.log(results);
    return results;
}

export const leer = async function(id_pedido){
    console.log("------------schema------------");
    const results= await Pedido.findByIdAndUpdate(
        id_pedido,
        {
            lectura:true,
        }
    );
    console.log(results);
    return results;
}

export const pagar = async function(id_pedido){
    console.log("------------schema------------");
    const results= await Pedido.findByIdAndUpdate(
        id_pedido,
        {
            pagado:true,
        }
    );
    console.log(results);
    return results;
}
