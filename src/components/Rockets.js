import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Rocket from './Rocket';
import { getRockets } from '../redux/Rockets/rocketSlice';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rocketsList.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rocketsList]);

  return (
    <Container>
      {rocketsList.map((r) => (
        <Rocket key={r.id} rocket={r} />
      ))}
    </Container>
  );
};

export default Rockets;
