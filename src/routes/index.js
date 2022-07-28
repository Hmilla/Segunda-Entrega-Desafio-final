import { Router } from 'express';



const router = Router()
import { getProductos,putProduct,  postnewProducts, getProductoId,deleteProduct} from '../controllers/ControllerProducto.js'

import { postnewCarrito, deleteCarrito, verCarritos, verCarrito} from '../controllers/ControllerCarrito.js'

export const auth = (req, res, next)=>{
    const admin = true
    if(admin) {
        return next()
    } 
    else {
        let err={
            error : "-1",
            descripcion: `ruta: ${req.url} metodo: ${req.method} no autorizado`
        }
        res.status(401).json(err)
    }
}

router.get('/productos', getProductos)
router.get('/productos/:id', getProductoId)
router.post('/productos', postnewProducts)
router.put('/productos/:id', putProduct)
router.delete('/productos/:id', deleteProduct )


router.post('/carrito',auth, postnewCarrito) 


router.get('/carrito/:id/productos', verCarrito)
router.delete('/carrito/:id',auth, deleteCarrito )
router.get('/carrito', verCarritos)
export default router