import React, { useEffect, useState } from 'react'

const EditIcon = () => {
    const [ isHovered , setIsHovered] = useState(false);

    const transition1=()=>{
        setIsHovered(true);
    }
    const transition2 = () => {
        setIsHovered(false);
    }
    const styles = {
        backgroundColor: (isHovered===true)? "#dcdee2" : "white" ,
        borderRadius:"10px",
        padding:"2px"
    }
  return (
    <i onMouseEnter={transition1} onMouseLeave={transition2} class="ri-pencil-line" style={styles}></i> 
  )
}

export default EditIcon