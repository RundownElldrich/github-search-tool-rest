import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

/* eslint-disable import/no-cycle */ // due to reduxjs/toolkit implementation https://stackoverflow.com/a/63924400
import rootSaga from 'app/rootSaga';
import usersSearchReducer from 'features/usersSearch/usersSearchSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    usersSearch: usersSearchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
