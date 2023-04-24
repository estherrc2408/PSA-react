import React, {useState} from 'react'
import { useForm } from '../hooks/useForm';

export const SearchForm = ({takeSearch}) => {

    const {inputValues,setInputValues,handlerClick}=useForm('');//inicializa el useForm en ''

    const [send,setSend] = useState(false);

    const serializerForm = (dataForm) =>{
        const data = new FormData(dataForm);
        const obj = {};
        for(let[key,value] of data){
            if(!value)return;
            obj[key]=value;
        }
        return obj;
    }

    const handlerSubmit=(ev)=>{
        ev.preventDefault();
        const data = serializerForm(ev.target);
         if(!data){return};
        setInputValues(data);
        takeSearch(inputValues);
        setSend(true);
    }

  return (
    <>
    <form className='form' id="form" onSubmit={handlerSubmit}>
    <input className='i-form' id="search" name="search" type="text" placeholder='Search' onClick={handlerClick} />
    <input className='s-form' type="submit" value="Buscar"/>
    </form>
    {/* {send && <p>Searching...</p>} */}

    </>
  )
}
