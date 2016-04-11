import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'
import Project from './Project'

//Projects

class Projects extends Component {
  constructor(props) {
    super(props)
  }
  handleSumbit(e) {
    e.preventDefault()
    this.props.createProject(this.refs.name.value)
    this.refs.name.value = ''
  }
  render() {
    const projects = this.props.projects ? this.props.projects.map(project => {
      console.log(project.get('name'))
    }) : ''
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Projects</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <h3>Create a new project</h3>
            <div className="row">
              <form onSubmit={this.handleSumbit.bind(this)}>
                <div className="col-md-9">
                  <input className="form-control" name="name" ref="name" id="name" type="text"/>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-success" type="submit">Create</button>
                </div>
              </form>
            </div>

          </div>
          <div className="col-md-9">

          </div>
          <div className="col-md-3">
            Side Bar
          </div>
        </div>
      </div>
    )
  }
}

reactMixin(Projects.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    projects: state.get('projects')
  }
}

export const ProjectsContainer = connect(mapStateToProps, actionCreators)(Projects)
