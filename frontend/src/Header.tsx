import React, {Component, useRef} from 'react'
import './Header.css'

type Props = {
    setUsername: any
}

const Header = (props: Props) => {
    const username = useRef('')
    return (
        <div className='header'>
            <div className='headerelement' id='appname'>Break Timer</div>
            <div className='headerelement' id='inputs'>
                <input className='headerinput' type='text' placeholder='username' ref={username}/>
                <button className='headerbutton' onClick={()=>{console.log(username.current.value)}}>enter</button>
            </div>
        </div>
    )
}

export default Header
