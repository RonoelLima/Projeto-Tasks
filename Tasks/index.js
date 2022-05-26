/**
 * @format
 */
 import 'react-native-gesture-handler';
 import { AppRegistry } from 'react-native'
//  import Navigator from './src/Navigator'
 import { name as appName } from './app.json'
 import {LogBox } from 'react-native';
 import TaskList from './src2/screens/TaskList'
 import Auth from './src2/screens/Auth'
 import Navigator from './src2/Navigator'
 
 LogBox.ignoreLogs(['Reanimated 2']);
 
 AppRegistry.registerComponent(appName, () => Navigator)
 