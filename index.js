/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import GoogleSigin from './src/GoogleSignin'
AppRegistry.registerComponent(appName, () => GoogleSigin);
