const Product = require('./product.model');

exports.create = (req, res) => {
    //Validacion de Request
    if (!req.body){
        return res.status(404).send({
            message: "Debe cargar un Producto"
        });
    }

    const product = new Product ({
        title: req.body.title || "Titulo no Disponible",
        description: req.body.description,
        price: req.body.price,
        company: req.body.company
    });

    //Guardar Producto en la DB
    product.save()
        .then(data =>{
            res.send(data);
        }).catch(err =>{
            res.status(500).send({
                message: err.message || "Algo fue mall cuando se creo el Producto"
            });
        });
};


//Obtener todos los items de la DB
exports.findAll = (req,res) =>{{
    Product.find()
    .then(products =>{
        res.send(products);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Algo fallo al obtener el producto"
        });
    });
}};

//Obtener items de la DB por ID
exports.findOne = (req,res) =>{
    Product.findById(req.params.productId)
    .then(product =>{
        if(!product){
            return res.status(404).send({
                message: "Producto no encontrado para id :" + req.params.productId
            })
        }
        res.send(product);
    }).catch(err =>{
        if (err.kind ==="ObjectId"){
            return res.status(404).send({
                message: "Producto no encontrado para id :" + req.params.productId
            })
        }
        res.status(500).send({
            message: err.message || "Algo fallo al obtener el producto"
        });
        return res.status(500).send({
            message: err.message || "Algo fallo al obtener el producto: " + req.params.productId
        });
    });
};

exports.update = (req, res) => {
    //Validacion de Request
    if (!req.body){
        return res.status(404).send({
            message: "Debe cargar un Producto"
        });
    }
    Product.findByIdAndUpdate(req.params.productId, {
        title: req.body.title || "Titulo no Dsponble",
        description: req.body.description,
        price: req.body.price,
        company: req.body.company
    },{new: true })
    .then(product =>{
        if(!product){
            return res.status(404).send({
                message: "Producto no encontrado para id :" + req.params.productId
            })
        }
        res.send(product);
    }).catch(err =>{
        if (err.kind ==="ObjectId"){
            return res.status(404).send({
                message: "Producto no encontrado para id :" + req.params.productId
            })
        }
        res.status(500).send({
            message: err.message || "Algo fallo al obtener el producto"
        });
        return res.status(500).send({
            message: err.message || "Algo fallo al obtener el producto: " + req.params.productId
        });
    });
}

exports.delete = (req, res) =>{
    Product.findByIdAndDelete(req.params.productId)
    .then(product =>{
        if(!product){
            return res.status(404).send({
                message: "Producto no encontrado para id :" + req.params.productId
            })
        }
        res.send({message: "Producto eliminado Correctamente"});
    }).catch(err =>{
        if (err.kind ==="ObjectId" || err.kind === "NotFound"){
            return res.status(404).send({
                message: "Producto no encontrado para id :" + req.params.productId
            })
        }
        return res.status(500).send({
            message: err.message || "No se pude eliminar el producto: " + req.params.productId
        });
    });
}