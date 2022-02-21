import React,{useState} from 'react';
//components

import SelectProductInfo from '../SelectProductInfo'

//api

//hooks

//style

const initialState = {
    initialProduct:{},
    selectedProductItem :[],
    selectValue:''
}

const SelectProduct = (props)=>{
    const[state,setState]=useState(initialState);
    
    
    /*setState({
        singleProductData:{
            itemName:local_var[0].itemName,
            itemPurity:local_var[0].itemPurity,
            saleLabour:local_var[0].saleLabour,
            saleWastage:local_var[0].saleWastage


        }
    })*/
    

    const handleSelectOnChange = (e)=>{
        //console.log(state.selectValue);
         const selectedProduct=props.productList.filter(product=> e.target.value===product._id);
         setState(()=>({selectValue:e.target.value,selectedProductItem:[...selectedProduct]}));


        
    }
    
    return(<div>
        <label className='form-label'>Select Product</label>
        <select className='form-control' value={state.selectValue} name='productId' onChange={handleSelectOnChange}>
            {props.productList.map(product=>{
                return (<option value={product._id} key={product._id} >
                    {product.itemName}
                </option>)
            })}
        </select>
        {state.selectValue?<SelectProductInfo productInfo={state.selectedProductItem[0]} />:<SelectProductInfo productInfo={props.productList[0]}/>}
        
    </div>)
}

export default SelectProduct;