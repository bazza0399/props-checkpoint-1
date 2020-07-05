import React from 'react';
function products(props){
    return(
        <table border>
        <thead>
        <tr>
          <th>category</th>
          <th>name</th>
          <th>price</th>
        </tr>
        </thead>

        <tbody>
                {props.prod.map(product =>{
                    console.log(product.category)
                    return(
                        
                        <tr>
                        <td>{product.category}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        </tr>


                    )  
            }
                )}
        </tbody> 
        
      </table>
    )
}
export default products;