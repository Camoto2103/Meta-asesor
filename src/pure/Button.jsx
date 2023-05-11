import React from 'react'

const style = {
    'button':{
        fontFamily:'RobotoRegular',
        margin:'20px 0px 20px 25px',
        width:'200px',
        height:'30px',
        border:'none',
        borderRadius:'5px',
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