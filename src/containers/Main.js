import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Routes } from '../routes'
import './Main.scss'

export default function Main () {
  return (
    <div className="layout">
      <BrowserRouter>
        <main>
          <Switch>
            {
              Routes.map((route) => {
                const { path, id, component, exact } = route

                return <Route key={id} exact={exact} path={path} component={component} />
              })
            }
          </Switch>
        </main>
      </BrowserRouter>
      <div id="footer"><i className="fa fa-copyright" />&nbsp;&nbsp;Copyright Feed Challenge | 2020</div>
    </div>
  );
}