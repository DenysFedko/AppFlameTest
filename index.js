import {Navigation} from 'react-native-navigation';
import App from './app/App';
import {name as appName} from './app.json';

Navigation.registerComponent(`com.${appName}.MainScreen`, () => App);

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
