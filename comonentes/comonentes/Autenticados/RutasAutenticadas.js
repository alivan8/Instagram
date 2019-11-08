import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './Home';
import Follow from './Follow';
import Profile from './Profile';
import Add from './Add';
import Search from './Search';

export const RutasAutenticadas = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Search: {
    screen: Search,
  },
  Add: {
    screen: Add,
  },
  Follow: {
    screen: Follow,
  },
  Profile: {
    screen: Profile,
  },
});
