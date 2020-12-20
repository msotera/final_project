import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';

const Home = () => {
  return (
    <>
      <Header title="Locations List">
        

        <p>
        <strong>  Welcome, </strong>this was created to help store and make a list of locations that you have visited.
        </p>
        <p>
          To create a list of your own, click on Locations at the top of this page. 
        </p>
      </Header>

      <Container>
        <hr/>
        <p>
        You don't have to register or make an account if you dont want to, but the only way to save your list is by making an account.
        </p>
        
      </Container>
    </>
  );
}
 
export default Home;