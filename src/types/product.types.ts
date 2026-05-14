export type Rating = {
    rate:number,
    count:number
}

export type Product ={
    id: string,
    title:string,
    price:number,
    desription: string,
    category:"women's clothing" | "men's clothing" | "jewelery" | "electronics",
    image:string,
    rating:Rating
}