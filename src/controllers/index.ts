import {Request, Response} from 'express'
import { Product, TypedBody } from '../models'

const products:Product[]=[]

export function getProducts(req:Request, res:Response){
    res.status(200).json(products)
}

export const addProduct=(req:TypedBody, res:Response)=>{
   
 const {title,description} = req.body
    let newproduct:Product={
        id:Math.floor(Math.random() * 10000),
        title,
        description,
        price: '0',
       
    }

    products.push(newproduct)
    res.status(201).json({message:" product  Added Successfully"})
}

export function getProduct(req:Request<{id:string}>, res:Response){
    
    const id = +req.params.id
 
    const product= products.find(x=>x.id===id)

    if(product!=undefined){
        return res.status(200).json(product)
    }
    return res.status(404).json({message:"Product Not Found"})
}

export function updateProduct(req:Request<{id:string}>, res:Response){
  
    const id = +req.params.id
    
    const product= products.find(x=>x.id===id)
    const {title,description} = req.body
    if(product!=undefined){
            product.description=description
            product.title=title
        return res.status(200).json({message:`Product ${id} updated`})
    }
    return res.status(404).json({message:"Product Not Found"})
}


export const deleteProduct=(req:Request<{id:string}>, res:Response)=>{
     
    const id = +req.params.id
    
    const index= products.findIndex(x=>x.id===id)

    if(index>=0){
        products.splice(index,1)
        return res.status(200).json({message:`Product ${id} deleted`})
    }
    return res.status(404).json({message:"Product Not Found"})
}



