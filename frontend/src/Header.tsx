import React, {Component} from 'react'
import './Header.css'

class Header extends Component{
    render(){
        return (
            <div className='header'>
                    <div className='headerelement' id='appname'>Break Timer</div>
                    <input className='headerelement' type='text' />
            </div>
        )
    }
}

export default Header
