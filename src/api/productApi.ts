import type { Product } from '../types/product.types'

const API_BASE = "https://fakestoreapi.com";
 
export  async function fetchProducts() : Promise<Product[]> {
    const response = await fetch(`${API_BASE}/products`)

    if(!response.ok)
        throw new Error(`Api error ${response.status} : ${response.statusText}`)

    return response.json();

}