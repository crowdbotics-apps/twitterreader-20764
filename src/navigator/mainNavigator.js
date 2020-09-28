import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen20113321Navigator from '../features/BlankScreen20113321/navigator';
import BlankScreen19113320Navigator from '../features/BlankScreen19113320/navigator';
import Settings113284Navigator from '../features/Settings113284/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen20113321: { screen: BlankScreen20113321Navigator },
BlankScreen19113320: { screen: BlankScreen19113320Navigator },
Settings113284: { screen: Settings113284Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
