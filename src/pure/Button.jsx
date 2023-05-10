import React from 'react'

const style = {
    'button':{
        fontFamily:'RobotoRegular',
        margin:'15px 0px 15px 0px',
        width:'120px',
        height:'30px',
        border:'none',
        borderRadius:'15px',
        backgroundColor:'#001950',
        color:'#fff',
        fontSize:'16px',
        cursor:'pointer',
    }
}

const Button = (Props) => {
  return (
    <button style={style.button} type="submit">
        {Props.children}
    </button>
  )
}

export default Button