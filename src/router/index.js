import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import App from '../App'

import Dashboard from '../view/Dashboard/Dashboard'
import NotPage from '../view/404/NotPage'
import Game from '../view/Game'
import TodoList from '../view/TodoList'

class Router extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" render={
					props => (
						<App>
							<Switch>
								<Route path="/" exact component={ Dashboard } />
								<Route path="/game" component={ Game } />
								<Route path="/todolist" component={ TodoList } />
								<Route path="/404" component={ NotPage } />
								<Route render={() => <Redirect to="/404" />} />
							</Switch>
						</App>
					)
				}>
				</Route>
			</Switch>
		)
	}
}

export default Router
