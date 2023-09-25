import React from 'react'

const Title = ( {color , title , Text }) => {
  return (
    <h1 style={{color}} className={title}>
        {Text}
    </h1>    
  )
}

export default Title