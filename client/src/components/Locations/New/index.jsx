import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Locations">
      This is where your locations are submitted.
      </Header>

      <Container>
        <Form endpoint="locations"/>
      </Container>
    </>
  );
}
 
export default New;