Intalar los modulos para enrutar las diferentes vistas:
yarn add react-dom

yarn add react-router-dom
importaciones de react-router-dom:

importar BrowserRouter en main.jsx
importar Router, Routers, Navigate en App.jsx
importar  en donde tengamos la barra de navegación NavLink o Link 



carpeta ui elementos comunes a los que podemos cambiar estilos segun donde nos encontremos

//movidas de clase
App: AppRouter
AppRouter -Routers>

Home page: dos componentes
App> Nav y HomePage

camis page: 
App>
camispage>productList(componente)
productlis>productitem(componente)
productitem>link 

search:
App>
general>form>containerresults


nota: meter unos helpers:
traer todos los elementos, traer traer por id   url = 'https://dummyjson.com/products/${id}';
traer moviles   'https://dummyjson.com/products/category/smartphones' 
categorias:
[
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"
]



traer pantalones    
traer por nombre    'https://dummyjson.com/products/search?q=${nombre}' 

nota con el search:
si metemos algo con lo que no coincidan resultados: 
comprobar que en la propiedad name este la palabra buscada, se puede hacer un tolowercase y un include

evento scroll en vez de click para hacer scroll infinito, cuandp la pantalla esté a X medida, se cargan 10 nuevos(o lo que sea), pero es de react native

almacenar camiseta y pantalones en un contexto, asi no hara falta volver a llamar al fetch