import React, { useState } from 'react';
import '../App.css'

export const SearchBox = () => {
    const List = [
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
      ]
  const [list,setList] = useState(List)

  const handleSearch = (event) =>{
   if(event.target.value==""){
    setList(list)
    return
   }
   const filterValue = list.filter((item)=>item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
   setList(filterValue)
  }
  return (
   <>
   <div className='container'>
   <h1>Build Search Filter</h1>
   <input type='text' name='input' onChange={handleSearch} className='inputBox' />
   {list && list.map((items)=>{
    return <li className='listData'>{items}</li>
   })}
   </div>   
   </>
  )
}
