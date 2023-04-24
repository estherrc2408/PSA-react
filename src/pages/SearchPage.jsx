import React,{useState} from 'react'
import { SearchForm } from '../components/SearchForm'
import { ProductList } from '../components/ProductList'

export const SearchPage = () => {
  let [search,setSearch]=useState('')

  const takeSearch=(input)=>{
    console.log('lo que llega a SearchPage ',input.search);//search={search:dog}
    if(!input){return console.log('Realiza una búsqueda')};
    setSearch(input.search)
    return search;
  }

  return (
    <main className='main'>
    <section className='sec-search'>
    <h1 className='page-title'>Buscador de productos:</h1>
    <SearchForm takeSearch={takeSearch}/>
    </section>
    <h2 className='subtitle'>Productos encontrados:</h2>
    <section className='sec-found'>  
      <ProductList search={search}/>
    </section>
    </main>
  )
}
