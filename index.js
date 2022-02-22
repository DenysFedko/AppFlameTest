import {Navigation} from 'react-native-navigation';
import App from './app/App';
import React from 'react';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

import configureStore from './app/store/configureStore';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

Navigation.registerComponent(`com.${appName}.MainScreen`, () => RNRedux);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: `com.${appName}.MainScreen`,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
