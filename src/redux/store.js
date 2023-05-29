import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/rocketSlice';
import reducer from './missions/missions';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: reducer,
  },
});

export default store;
