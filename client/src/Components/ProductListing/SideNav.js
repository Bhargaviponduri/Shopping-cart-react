import React, {useEffect, useState}  from 'react'
import './SideNav.css'

const SideNav = () =>{
    const [categoryData, setcategoryData] = useState(null)
    useEffect(()=>{
        const data = async () => {
           const response= await fetch('http://localhost:3001/categories')
           const responseJson = await response.json()
           await setcategoryData(responseJson)
        }
        data()
    },[])
    return (
        <div className='sidenav'>
             {categoryData && categoryData.sort((a, b) => a.order - b.order).map ((item,index) => {
        if(item.enabled) return <button>
            {item.name}
        </button>
})}
        </div>
    )
}

export default SideNav