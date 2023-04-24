import { dummyJson } from "../api/dummyJson";

export const getItems=async (search)=>{
    console.log(search)
    if(!search){return}
    console.log('en getitems, search:', search);
    const {products}=await dummyJson(null,search,null);//debería traer en el item photos un array de seis elementos
    console.log(products);
    //si no se encuentran productos products= undefined, asignar algo
    const arrayDataItems=products.map(item=>({
        id:item.id,
        title:item.title,
        description:item.description,
        price:item.price,
        rating:item.rating,
        img:item.images[0]
    }))
    return arrayDataItems;
}
// {
//     "products": [
//       {
//         "id": 1,
//         "title": "iPhone 9",
//         "description": "An apple mobile which is nothing like apple",
//         "price": 549,
//         "discountPercentage": 12.96,
//         "rating": 4.69,
//         "stock": 94,
//         "brand": "Apple",
//         "category": "smartphones",
//         "thumbnail": "...",
//         "images": ["...", "...", "..."]
//       },
//       {...},
//       {...},
//       {...}
//       // 4 results
//     ],
//     "total": 4,
//     "skip": 0,
//     "limit": 4
//   }
         