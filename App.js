import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import DogPage from './src/pages/DogPage'
import HomePage from './src/pages/Home'
const AppNavigator=createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      headerShown:false,
    }
  },
  DogPage: {
    screen: DogPage
  },
})

export default createAppContainer(AppNavigator)