import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators/login'
import { Login } from './Login.jsx'
import classnames from 'classnames'

//Navigation Outside of Router

class Nav extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.checkAuth()
  }
  menuClick(e) {
   e.preventDefault()
   this.props.toggleMenu()
  }
  render() {
    const { user, menuCollapse } = this.props
    const links =  user ?
            [<li key={1}><a href="/#/explore">Explore</a></li>,
            <li key={2}><a href="/#/account">Account</a></li>,
            <li key={3}><a href="/#/projects">Projects</a></li>] :
            [<li key={1}><a href="/#/explore">Explore</a></li>,
            <li key={2}><a href="/#/signup">Sign Up</a></li>]
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.menuClick.bind(this)}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Timelines</a>
          </div>
          <div className="navbar-collapse navbar-left collapse">
            <ul className="nav navbar-nav">
              {
                links
              }
             </ul>
          </div>
          <Login loginState={this.props.loginState}
                 toggleLogin={this.props.toggleLogin}
                 userLogin={this.props.userLogin}
                 user={this.props.user}
                 userLogout={this.props.userLogout}/>
        </div>
      </nav>
    )
  }
}

reactMixin(Nav.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    user: state.get('user'),
    menuCollapse: state.getIn(['navigation', 'menuCollapse']),
    loginState: state.getIn(['navigation', 'login'])
  }
}

export const NavContainer = connect(mapStateToProps, actionCreators)(Nav)
