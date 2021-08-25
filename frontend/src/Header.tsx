import React, {Component, useRef, MutableRefObject} from 'react'
import './Header.css'

type Props = {
    setUsername: any
}

const Header = (props: Props) => {
    let username = useRef() as MutableRefObject<HTMLInputElement>
    const setUsername = props.setUsername
    return (
        <div className='header'>
            <div className='headerelement' id='appname'>Break Timer</div>
            <div className='headerelement' id='inputs'>
                <input className='headerinput' type='text' placeholder='username' ref={username}/>
                <button className='headerbutton' onClick={()=>{setUsername(username.current.value)}}>enter</button>
            </div>
        </div>
    )
}

export default Header
