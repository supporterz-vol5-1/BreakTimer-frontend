import React, {Component} from 'react'
import './Header.css'

class Header extends Component{
    render(){
        return (
            <div className='header'>
                <div className='headerelement' id='appname'>Break Timer</div>
                <div className='headerelement' id='inputs'>
                    <input className='headerinput' type='text' placeholder='username' />
                    <button className='headerbutton' >enter</button>
                </div>
            </div>
        )
    }
}

export default Header
