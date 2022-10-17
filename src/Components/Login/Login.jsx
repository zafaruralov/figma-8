import React from 'react'
import './Loginn.css'
import loginImg from '../../assets/3390.png'

const Login = () => {
  return (
    <div className='container'>
      <div className="left-r">
        <img src={loginImg} alt="" />
      </div>
      <div className="right">
        <h2>
          Tizimga xush kelibsiz !
        </h2>
        <span>
          Tizimga kirish uchun, login va parol orqali
          {/* <br /> */}
          autentifikatsiya jarayonidan o’ting
        </span>
        <div className="rectangle"></div>
        <input type="text" placeholder='        Email'/>
        <div className='first'></div>
        <input type="text" placeholder='        Password'/>
        <div className="btn">Tizimga Kirish</div>
      </div>
    </div>
  )
}

export default Login