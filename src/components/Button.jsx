import React from 'react'

const Button = ({name,style}) => {
  return (
    <div className={style}>
      {name}
    </div>
  )
}

export default Button
