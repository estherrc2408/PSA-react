import { useEffect,useState } from "react";
import {getItems} from '../helpers/getItems'

export const useFetch = (search) =>{
    console.log('dato buscado en el fetch',search);
    const [products,setProducts]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    const getProducts = async(search)=>{
        console.log(search);
        const searchProducts = await getItems(search);
        setIsLoading(false);
        setProducts(searchProducts);
        console.log(searchProducts);
    }
    
    useEffect(()=>{
      getProducts(search)
      console.log('useffect');
    },[search])
    return{
        products,
        isLoading
    }

}