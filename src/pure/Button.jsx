import React from 'react'

const style = {
    'button':{
        fontFamily:'RobotoRegular',
        //margin:'20px 0px 18px 57%',
        //rigth:'0px',
        width:'100%',
        height:'35px',
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