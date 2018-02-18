import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// import Category from './Category.js';
import Videos from '../dashboard/Videos/Videos.js';
import Profile from '../dashboard/Profile/Profile.js';
import Hashtags from '../dashboard/Hashtags/Hashtags.js';
import Discover from '../dashboard/Discover/Discover.js';

export const VideosStack = StackNavigator ({
  Videos: {
    screen: Videos,
    navigationOptions: {
      title: 'Videos',
    },
  },
  // CategoryList: {
  //   screen: CategoryList,
  //   navigationOptions: {
  //     title = ({ state } => )
  //   }
  // },
});

export const Tabs = TabNavigator ({
  Videos: {
    screen: Videos,
    navigationOptions: {
      tabBarLabel: 'Videos',
      tabBarIcon: ({ tintColor }) => <Icon name="playlist-play" size={35} color={tintColor} />,
    },
  },
  Hashtags: {
    screen: Hashtags,
    navigationOptions: {
      tabBarLabel: 'Hashtags',
      tabBarIcon: ({ tintColor }) => <Icon name="tag-text-outline" size={35} color={tintColor} />,
    },
  },
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarLabel: 'Discover',
      tabBarIcon: ({ tintColor }) => <Icon name="explore" size={35} color={tintColor} />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
    },
  },
});

// export default class CategoryRouter extends React.Component {
//   render() {
//     return (
//       <NavigatorIOS
//         initialRoute={{
//           component: MyScene,
//           title: '#STEM',
//           passProps: {index: 1},
//         }}
//         style={{flex: 1}}
//       />
//     );
//   }
// }
//
// class MyScene extends React.Component {
//   static propTypes = {
//     route: PropTypes.shape({
//       title: PropTypes.string.isRequired,
//     }),
//     navigator: PropTypes.object.isRequired,
//   };
//
//   constructor(props, context) {
//     super(props, context);
//     this._onForward = this._onForward.bind(this);
//   }
//
//   _onForward() {
//     let nextIndex = ++this.props.index;
//     this.props.navigator.push({
//       component: MyScene,
//       title: 'Scene ' + nextIndex,
//       passProps: {index: nextIndex},
//     });
//   }
//
//   render() {
//     return (
//       <View>
//         <Text>Current Scene: {this.props.title}</Text>
//         <Button
//           onPress={this._onForward}
//           title="Tap me to load the next scene"
//         />
//       </View>
//     );
//   }
// }
