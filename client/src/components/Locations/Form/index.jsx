import React, { useContext, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { NotificationContext } from '../../shared/Notifications';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

const LocationForm = ({ endpoint, preload }) => {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);

  useEffect(() => {
    setInputs({...preload});
  }, [preload])

  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputs);

    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
      ...inputs,
      secret_token: (user && user.token)
    })
    .then(({ data }) => {
      if (data) {
        setNotification({
          type: "success",
          message: "Your Location has been updated successfully"
        });
      }

      setRedirect(true);
    })
    .catch((error) => {
      setNotification({
        type: "danger",
        message: `There was an error updating the location you've chosen: ${error.message}`
      });
    });
  };

  if (redirect) return <Redirect to="/locations"/>;
  return (
    <Form onSubmit={handleSubmit}>
      <input 
        onChange={handleChange} 
        name="Account ID:" 
        placeholder="accountID"
        defaultValue={inputs.location}
      />
      <input 
        onChange={handleChange} 
        name="Location:" 
        placeholder="location"
        defaultValue={inputs.location}
      />
      <input 
        onChange={handleChange} 
        name="Region:" 
        placeholder="region"
        defaultValue={inputs.location}
      />
      <input 
        onChange={handleChange} 
        name="Type of Place:" 
        placeholder="typeOfOpportunity"
        defaultValue={inputs.location}
      />
      <input 
        onChange={handleChange} 
        name="date" 
        placeholder="YYYY-MM-DD"
        defaultValue={inputs.date}
      />
      <button type="submit">Submit</button>
    </Form>
  );
}
 
export default LocationForm;