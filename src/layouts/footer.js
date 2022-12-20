import React from 'react'
import config from '../config.js';

export default class Footer extends React.Component {
  render() {
    const socialLinks = config.socialLinks
    const socialLinksMarkup = socialLinks.map(
      link => {
        return <li key={link.id}>
          <a href={link.url} target='_blank' rel='noopener noreferrer'>
          </a>
        </li>
      }
     )
    return (
      <div style={{flex: 0.5}} className="footer-wrapper">
        <footer className='layout-footer' style={{color: 'rgb(128, 128, 128)'}}>
          <p style={{padding: 10, fontWeight: 'bold'}}>&#169;
            2022 Sebastian Gertz</p>
          <p>Made with <a href="https://www.gatsbyjs.org" target="_blank" rel='noopener noreferrer'>Gatsby.JS</a></p>
          <ul className="icons">
            {socialLinksMarkup}
          </ul>
        </footer>
    </div>
    )
  }
}