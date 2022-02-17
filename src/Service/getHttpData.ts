import http from './http'

export function GetElectronicsProducts(){
    return http.get("/products/category/electronics");
}
export function GetJeweleryProducts(){
    return http.get("/products/category/jewelery");
}
export function GetMenClothingProducts(){
    return http.get("/products/category/men's clothing");
}
export function GetWomenClothingProducts(){
    return http.get("/products/category/women's clothing");
}
export function GetAProductWithId(id: string){
    return http.get("https://fakestoreapi.com/products/" + id)
}