import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import SideNav from "./SideNav";
import ProductListingCard from '../ProductLisitingCard/ProductLisitngCard';
import './ProductListing.css'

const ProductListing = () => {
  const [productsData, setproductsData] = useState(null);
  const [categoryData, setcategoryData] = useState(null)
  const [categoryId, setCategoryId] = useState('5b6899953d1a866534f516e2')
 
  useEffect(() => {
    const data = async () => {
      const response = await fetch("http://localhost:3001/products");
      const responseJson = await response.json();
      const categories= await fetch('http://localhost:3001/categories')
      const categoriesJson = await categories.json()
      console.log(categoriesJson, responseJson)
      await setcategoryData(categoriesJson)
      await setproductsData(responseJson);
    };
    data();
  }, []);
  return (
    <>
      <Header />
      <div className="productPage">
      <div className='sidenav'>
             {categoryData && categoryData.sort((a, b) => a.order - b.order).map ((item,index) => {
        if(item.enabled) return <><button className="categoryButton" onClick={()=>setCategoryId(item.id)}>
            {item.name}
        </button> <hr /></>
})}
        </div>
        <div className="cards">
        {productsData &&
          productsData
            .sort((a, b) => a.order - b.order)
            .map((item) => {
               return categoryId === item.category && <ProductListingCard category={item} />
               })}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
