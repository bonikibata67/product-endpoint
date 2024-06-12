import { Router } from "express";
import { getProduct, getProducts,addProduct,updateProduct,deleteProduct } from "../controllers";


const router=Router()
router.get('',getProducts)
router.get('/:id',getProduct)
router.post('',addProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

export default router