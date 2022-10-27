import React, {useState} from 'react'
import {HiHome} from 'react-icons/hi'
import {BsSun, BsMoon} from 'react-icons/bs'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {

	return (
		<Link to='/calculator'>
				<HiHome className='home' />
		</Link>
	)
}

export default Nav;