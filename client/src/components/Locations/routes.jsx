import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';

import Index from './index';
import New from './New';
import Edit from './Edit';

const Routes = () => {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/locations" component={Index}/>

      {user && user.token ? (
        <>
          <Route exact path="/locations/new" component={New}/>
          <Route exact path="/locations/edit/:id" component={Edit}/>
          <Route exact path="/locations" component={Create}/>
          <Route exact path="/locations/destroy/:id" component={Destroy}/>
        </>
      ) : null}
    </Switch>
  );
}
 
export default Routes;