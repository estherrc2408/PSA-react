import React from 'react'

export const LoginPage = () => {
  return (
    <>
    <h1>Accede a tu cuenta!</h1>
    <form className='form' onSubmit={handlerSubmit}>
      <input className='i-form' type="text" name="user" placeholder='introduce tu usuario' onChange={handlerChange}/>
      <input className='s-form' type="submit" value="Login"/>
    </form>
    </>
  )
}
