import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
      <p>Copyright &copy; 2021</p>
      <Link to='/contact'>About</Link>
    </footer>
    )
  }
}

export default Footer