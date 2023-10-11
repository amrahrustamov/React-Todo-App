import React from 'react'

const List = ({ListArr,setListArr}) => {
    const removeItem=(index)=>{ 
        setListArr((prev)=>{
  
        let newArr=[...prev];
        newArr.splice(index,1)
        return newArr;
      })
    }
  return (
      <ul>
        {ListArr?.map((value,index)=><li key={index} onClick={()=>removeItem(index)} ><input type="checkbox"/><p>{value}</p></li>)}
      </ul>
  )
}

export default List
