import { View, Text, StyleSheet } from 'react-native';
import UserScreen from '../screens/UserScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function WelcomeScreen() {
  return (
<Tab.Navigator>
          <Tab.Screen name="User" component={UserScreen} 
           options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
          />
          <Tab.Screen name="Meals" component={MealsStackNavigator} 
           options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
          />
      </Tab.Navigator>
    
          
  );
}

export default WelcomeScreen;
function MealsStackNavigator() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}
      >
        <Stack.Screen
          name="MealsCategories"
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
          }}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverviewScreen}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
        />
      </Stack.Navigator>
    );
  }
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});