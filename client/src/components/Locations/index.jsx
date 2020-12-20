import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Locations = () => {
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const { user } = useContext(UserContext);

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/locations`)
    .then(({ data }) => {
      setLocations(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving your location: ${error.message}`
      });
    });
  }, [globalStore, setNotification]);

  return (
    <>
      <Header title="Locations"/>

      <Container>
        {locations && locations.length > 0 ? (
          locations.map((location, i) => (
            <>
              <blockquote>
                {location.accountID}: "{location.location}" ~ "{location.region}" ~ "{location.typeOfOpportunity}" ~ {location.date}
              </blockquote>

              {user && user.token ? (
                
                <Link to={`/locations/edit/${locations._id}`}>...edit...</Link>
                
              ) : null}
            </>
          ))
        ) : null}
      </Container>
    </>
  );
}
 
export default Locations;