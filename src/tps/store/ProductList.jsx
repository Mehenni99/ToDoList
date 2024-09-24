import { useEffect, useState } from "react"
import Product from "./Products"
import Category from "./Category"

export default function ProductList(){
   const [productList,setProductList]= useState([])
   const [categoryList,setCategoryList]=useState([])
   const [searchInput,setSearchInput]=useState()

   const displayProduct=()=>{
    const productsTemp= productList.filter(product=>{  
        return product.title.includes(searchInput)
        
    })
    if(productsTemp.length>0){      
        return productsTemp.map((product,key)=>{
return <Product product={product} key={key}/>

  })
       
}
return <tr><td colSpan={7}>
       No items
       </td></tr>

   }


   const displayCategories=()=>{
  
    return categoryList.map((category,key)=>{
      return  <Category category={category} key={key}/>
    })
   
   }

    const getProduct=()=>{
        fetch('https://fakestoreapi.com/products')
                       .then(response=>response.json())
                       .then(response=>setProductList(response))
    }
    const getCategories=()=>{
        fetch('https://fakestoreapi.com/products/categories')
                       .then(response=>response.json())
                       .then(response=>setCategoryList(response))
    }

useEffect(()=>{
    getProduct()
    getCategories()
},[])

const handleSearch = (e)=>{
e.preventDefault()
const searchValue=document.querySelector('#search').value
setSearchInput(searchValue)

}
const filterCategory=()=>{
    const productCategory= productList.filter(product=>{  
       return product.category
   
   })

   if(productCategory===categoryList) {
    console.log(categoryList)
   }
         
 }

    return <div className="container-fluix mx-auto w-75 my-3">
        <h2>Search:</h2>
        <form>
        <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label className="col-form-label">Search</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" id="search" className="form-control"/>
                    </div>
                    <div className="col-auto">
                        <input className='btn btn-dark mx-2' type="submit" value='Search' onClick={handleSearch}/>      
                    </div>
        </div>
        <div className="g-3 align-items-center" onClick={filterCategory}>
            {displayCategories()}
        </div>
                <hr/>
        </form>
        <h1>Liste des produits</h1>
        <div
            className="table-default"
        >
            <table
                className="table table-default"
            >
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Image</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {displayProduct()}
                </tbody>
            </table>
            
        </div>
        
    </div>
}