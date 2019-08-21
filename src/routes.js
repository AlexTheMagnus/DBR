//Dependences
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
// Estas variables almacenan componentes de los archivos index.js que hay dentro
//de cada una de estas carpetas.Habria por tanto que poner la ruta de estos
//archivos pero al ser llamados index se cogen por defecto.
//
import App from './components/App';
import Home from './components/Home';
import Score from './components/Score';     // Es lo mismo que: import Score from './components/Score/index.js';
import Player from './components/Player';
import Ia from './components/Ia';
import Page404 from './components/Page404';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={Home}  />
            <Route exact path="/score" component={Score}  />
            <Route exact path="/player" component={Player}  />
            <Route exact path="/ia" component={Ia}  />
            <Route component={Page404}  />
        </Switch>
    </App>;

export default AppRoutes;
