//https://reactnavigation.org/docs/getting-started/
//npm install @react-navigation/native
//npx expo install react-native-screens react-native-safe-area-context
//npm install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native-stack
//npm install @react-navigation/drawer
//npx expo install react-native-gesture-handler react-native-reanimated
//npm install react-native-gesture-handler react-native-reanimated
//npm install react-native-reanimated@1 --save --save-exact

import { StatusBar } from 'expo-status-bar';
import { StyleSheet , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

// import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import { Ionicons } from '@expo/vector-icons';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <>
//       <StatusBar style="light" />
//       {/* <NavigationContainer>
//         <Drawer.Navigator>
//           <Drawer.Screen name="Welcome" component={WelcomeScreen} />
//           <Drawer.Screen name="User" component={UserScreen} />
//         </Drawer.Navigator>
//       </NavigationContainer> */}
//       <NavigationContainer>
//         <Stack.Navigator 
//         screenOptions={{
//           headerStyle: { backgroundColor: '#351401'},
//             headerTintColor: 'white',
//             contentStyle: {backgroundColor : '#3f2f25'}
//         }}
//         >
//           <Stack.Screen name="MealsCategories" component={CategoriesScreen}
//           options={{
//             title: 'All Categories',
//             // headerStyle: { backgroundColor: '#351401'},
//             // headerTintColor: 'white',
//             // contentStyle: {backgroundColor : '#3f2f25'}
//           }}
//           />
//           <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
//           // options={
//           //   ({route, navigation})=> {
//           //     const catId = route.params.categoryId
//           //     return {
//           //       title: catId,
//           //     };
//           //   }
//           // }
//           />
//           <Stack.Screen  name="MealDetail" component={MealDetailScreen} />

//           {/* <Stack.Screen  name="MealDetail" component={MealDetailScreen} options={{
//             headerRight: () =>{
//               return <Button title="Tap me!" onPress={}/>
//             }
//           }}/> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator screenOptions={{
//          headerStyle: {backgroundColor: '#3c0a6b'},
//          headerTintColor: 'white',
//          drawerActiveBackgroundColor: '#f0e1ff',
//          drawerActiveTintColor: '#3c0a6b',
//          drawerStyle: {backgroundColor: '#ccc'}
//       }}>
//         <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{
//           drawerLabel: 'Welcome Screen',
//           drawerIcon: ({color ,size}) => (
//            <Ionicons name="home"  color={color} size={size}/>
//           ),
//         }}
//         />
//         <Drawer.Screen name="User" component={UserScreen}
//         options={{
//           drawerLabel: 'User Screen',
//           drawerIcon: ({color ,size}) => (
//            <Ionicons name="person"  color={color} size={size}/>
//           ),
//         }}
//         />
//         <Drawer.Screen name="Meals" component={MealsStackNavigator} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// function MealsStackNavigator() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#351401' },
//         headerTintColor: 'white',
//         contentStyle: { backgroundColor: '#3f2f25' }
//       }}
//     >
//       <Stack.Screen
//         name="MealsCategories"
//         component={CategoriesScreen}
//         options={{
//           title: 'All Categories',
//         }}
//       />
//       <Stack.Screen
//         name="MealsOverview"
//         component={MealsOverviewScreen}
//       />
//       <Stack.Screen
//         name="MealDetail"
//         component={MealDetailScreen}
//       />
//     </Stack.Navigator>
//   );
// }

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'About the Meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// Bottom tab screens
// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         activeTintColor: 'white',
//         inactiveTintColor: '#180202',
//         style: { backgroundColor: '#351401' },
//       }}
//     >
//       <Tab.Screen
//         name="Categories"
//         component={CategoriesScreen}
//         options={{
//           tabBarLabel: 'Categories',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Favorites"
//         component={FavoritesScreen}
//         options={{
//           tabBarLabel: 'Favorites',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// // Drawer navigator

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#351401' },
//         headerTintColor: 'white',
//         sceneContainerStyle: { backgroundColor: '#3f2f25' },
//       }}
//     >
//       <Drawer.Screen
//         name="Home"
//         component={TabNavigator} // Use the TabNavigator as the component here
//         options={{
//           title: 'Home',
//         }}
//       />
//       <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{
//         drawerLabel: 'Welcome Screen',
//         drawerIcon: ({ color, size }) => (
//           <Ionicons name="home" color={color} size={size} />
//         ),
//       }}
//       />
//       <Drawer.Screen name="User" component={UserScreen}
//         options={{
//           drawerLabel: 'User Screen',
//           drawerIcon: ({ color, size }) => (
//             <Ionicons name="person" color={color} size={size} />
//           ),
//         }}
//       />
//       <Drawer.Screen name="Meals" component={MealsStackNavigator} />
//     </Drawer.Navigator>
//   );
// }

// // Main App component

// export default function App() {
//   return (
//     <>
//       <StatusBar style="light" />
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             headerStyle: { backgroundColor: '#351401' },
//             headerTintColor: 'white',
//             contentStyle: { backgroundColor: '#3f2f25' },
//           }}
//         >
//           <Stack.Screen
//             name="Drawer"
//             component={DrawerNavigator}
//             options={{
//               headerShown: false,
//             }}
//           />
//           <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
//           <Stack.Screen
//             name="MealDetail"
//             component={MealDetailScreen}
//             options={{
//               title: 'About the Meal',
//             }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }

// // Meals stack navigator
// function MealsStackNavigator() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#351401' },
//         headerTintColor: 'white',
//         contentStyle: { backgroundColor: '#3f2f25' }
//       }}
//     >
//       <Stack.Screen
//         name="MealsCategories"
//         component={CategoriesScreen}
//         options={{
//           title: 'All Categories',
//         }}
//       />
//       <Stack.Screen
//         name="MealsOverview"
//         component={MealsOverviewScreen}
//       />
//       <Stack.Screen
//         name="MealDetail"
//         component={MealDetailScreen}
//       />
//     </Stack.Navigator>
//   );
// }
const style = StyleSheet.create({
  container: {},
});