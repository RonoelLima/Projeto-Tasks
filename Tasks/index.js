/**
 * @format
 */
 import 'react-native-gesture-handler';
 import { AppRegistry } from 'react-native'
 import Navigator from './src/Navigator'
 import { name as appName } from './app.json'
 import {LogBox } from 'react-native';
 import TaskList from './src2/screens/TaskList'
 
 LogBox.ignoreLogs(['Reanimated 2']);
 
 AppRegistry.registerComponent(appName, () =>TaskList)
 