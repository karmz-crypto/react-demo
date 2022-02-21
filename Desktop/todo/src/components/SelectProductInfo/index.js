import React from 'react';
import { useState } from 'react/cjs/react.development';



/*const initialState = {
    
    itemName:'',
    itemPurity:0,
    salePurity:0,
    saleLabour:0
}*/

const SelectProductInfo = (props)=>{
    console.log(props.productInfo)
    const {productInfo} = props
    //const {itemName,itemPurity,salePurity,saleLabourMax}=props.productInfo;
   // const [state,setState] = useState(initialState);
    

    
    /*setState(()=>({
        itemName:itemName,
        itemPurity:itemPurity,
        salePurity:salePurity,
        saleLabour:saleLabourMax}))*/


    return(
        props.productInfo?
            <div className='row text-secondary text-capitalize'>
                <div className='col-6'><span className='form-text'>item Name </span><span className='text-success fw-bold mx-1'>{productInfo.itemName}</span></div>
                <div className='col-6'><span className='form-text'>item purity </span><span className='text-success fw-bold mx-1'>{productInfo.itemPurity}</span></div>
                <div className='col-6'><span className='form-text'>item in stock</span><span className='text-success fw-bold mx-1'>{productInfo.inStockQuantity}</span>grms</div>
                <div className='col-6'><span className='form-text'>sale labour</span><span className='text-success fw-bold mx-1'>{productInfo.saleLabourMax}</span>rupees</div>
            </div>

            :
            <div>loading...</div>
            )
}

export default SelectProductInfo