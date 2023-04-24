import {useState} from 'react';

export const useForm = (initialState='')=>{

    const [inputValues,setInputValues] = useState(initialState);


    const handlerClick =({target})=>{
        const {name,value} = target;
        if (inputValues == '') return setInputValues({ ...inputValues, [name]: value });//search:(valor introducido en el input)
    }

    return{
        inputValues,
        setInputValues,
        handlerClick//movifica a tiempo real el input
    }

}