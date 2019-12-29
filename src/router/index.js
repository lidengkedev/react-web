import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import App from '../App'

import Dashboard from '../view/Dashboard/Dashboard'
import NotPage from '../view/404/NotPage'
import Game from '../view/Game'
import TodoList from '../view/TodoList'
import BlogList from '../views/blog/BlogList'
import BlogDetail from '../views/blog/BlogDetail'

export const ROUTE_BASE_NAME = ''

class Router extends Component {
  userRoutes() {
    return [
      { path: '/', component: Dashboard },
      { path: '/game', component: Game },
      { path: '/todolist', component: TodoList },
      { path: '/blog', component: BlogList },
      { path: '/blog/detail', component: BlogDetail },
      { path: '/404', component: NotPage }
    ]
  }
	render() {
    const userRoutes = this.userRoutes()
		return (
      <BrowserRouter basename={ROUTE_BASE_NAME}>
        <Switch>
          <Route path="/" render={
            props => (
              <App>
                <Switch>
                  {
                    userRoutes.map((item, index) => {
                      const { path, component } = item
                      return <Route key={index} path={ path } exact component={ component } />
                    })
                  }
                  <Route render={() => <Redirect to="/404" />} />
                </Switch>
              </App>
            )
          }>
          </Route>
        </Switch>
      </BrowserRouter>
		)
	}
}

export default Router
