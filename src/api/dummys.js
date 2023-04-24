export const dummyJson = async(id,search,category)=>{
    let urlDummy='https://dummyjson.com/products';
    console.log('enlace',`${urlDummy}/search?q=${search}`)
    console.log(!search)
    try {
    if (search){
            url = `${urlDummy}/search?q=${search}`
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
                     

        } else if (category){
            url = `${urlDummy}/category/${category}`//
        }
        console.log(url);
        let response = await fetch(url);
        console.log(response);

        return response.json()
        // if(response.ok){return response.json()
        // }else{
        //     throw 'API error'
        // }
    }catch(error){console.log('error al obtener data de dummyJson')}
}


/*para el id
        if (id) {
            url = `${urlDummy}/${id}`;
        // } else if (!skip) {//si no hay limite ni skip
        //     url = `${urlDummy}?limit=${limit}&skip=0`;
        // } else if (skip) {
        //     url = `${urlDummy}?limit=${limit}&skip=${skip}`;
        } else 
*/