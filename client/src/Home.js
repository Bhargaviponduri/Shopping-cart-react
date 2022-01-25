import React, {useEffect, useState}  from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Card from './Components/Card/Card'


const Home = () => {
    const [categoryData, setcategoryData] = useState(null)
    useEffect(()=>{
        const data = async () => {
           const response= await fetch('http://localhost:3001/categories')
           const responseJson = await response.json()
           await setcategoryData(responseJson)
        }
        data()
    },[])
    return <>
    <Header />
    <Banner />
    {categoryData && categoryData.sort((a, b) => a.order - b.order).map ((item,index) => {
        if(item.enabled) return <Card category={item} left={index%2}/>
})}
    </>
}

export default Home