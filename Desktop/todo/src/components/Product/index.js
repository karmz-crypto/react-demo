import React,{useState,useEffect} from 'react';
import SelectProduct from '../SelectProduct';

//components

//api

//hooks

//styles

const initialState = {
    resultSet:[],
}

const Product =()=>{
    const [state,setState] = useState(initialState);
    const [error,setError] = useState(false);
    const fetchProductData = async ()=>{
        try{
            const productData = (await(await fetch('/apiPageRouter/getCompleteProduct')).json());
            setState(()=>({
                resultSet:[...productData]
            }))
            setError(()=>(false))
        }catch(error){
            setError(()=>(true));
        }
        
    }
    useEffect(()=>{
        fetchProductData()
    },[])

    return(
        <div className='container mb-3'>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                    {error?<span>Error in loading</span>:
                   state.resultSet?<SelectProduct productList={state.resultSet}/>:<div>Loading</div>} 
                    
                </div>
            </div>
        </div>
    ) 
}

export default Product;