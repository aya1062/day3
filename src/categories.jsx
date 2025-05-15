import React from 'react'
import Card from './Card';
import getData from './data';
function categories() {
    let arr = getData()
    console.log(arr);
    
  return (
    <>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {arr.map((products) => <Card name={arr.products.} desc={products.description} image={products.thumbnail} />)}
            </div>
            
    </>
  )
}


export default categories