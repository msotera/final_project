import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import UserForm from '../UserForm';

const New = () => {
  return (
    <>
      <Header title="Sign-up">
      <p>
            Welcome New User!
          </p>

          <p>
            Sign-up is super easy, we just want a name, an e-mail and a password please. :)
          </p>
      </Header>
      
      <Container>
        

        <UserForm endpoint="users"/>
      </Container>
    </>
  );
}
 
export default New;