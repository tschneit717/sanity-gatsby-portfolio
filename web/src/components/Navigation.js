import { Link } from 'gatsby';
import React from 'react';
import { ContainerStyles } from '../assets/styles/GlobalStyles';
import { ButtonStyles, NavStyles } from '../assets/styles/NavStyles';
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.navButton = React.createRef();
    this.navContainer = React.createRef();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.buttonScrollSwap = this.buttonScrollSwap.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('scroll', this.buttonScrollSwap);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('scroll', this.buttonScrollSwap);
  }

  buttonScrollSwap() {
    this.navButton.current.classList.toggle('dark', window.scrollY > 320);
  }

  handleClickOutside(event) {
    if (event.target.closest(!this.navButton.current)) {
      if (
        this.navContainer &&
        !this.navContainer.current.contains(event.target)
      ) {
        this.navButton.current.classList.remove('active');
        this.navContainer.current.classList.remove('active');
      }
    }
  }

  toggleMenu() {
    this.navButton.current.classList.toggle('active');
    this.navContainer.current.classList.toggle('active');
  }

  render() {
    const menuLinks = this.props.query.site.siteMetadata.menuLinks;
    console.log(this);
    return (
      <>
        <ButtonStyles
          type="button"
          onClick={(e) => this.toggleMenu(e)}
          ref={this.navButton}
          aria-controls="menu">
          <div>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </ButtonStyles>
        <NavStyles role="navigation" ref={this.navContainer} className="flex">
          <ContainerStyles>
            {menuLinks.map((link) => (
              <Link
                key={link.link}
                to={link.link}
                className={`${
                  link.link === '/contact' ? 'contact-button' : ''
                }`}>
                {link.name}
              </Link>
            ))}
          </ContainerStyles>
        </NavStyles>
      </>
    );
  }
}

export default Navigation;
