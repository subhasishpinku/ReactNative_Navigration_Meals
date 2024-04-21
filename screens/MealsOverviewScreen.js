import { useEffect } from 'react';
import { useLayoutEffect } from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';
// import {useRoute } from '@react-navigation/native'
import MealItem from '../components/MealList/MealItem';
import { MEALS , CATEGORIES} from '../data/dummy-data';
import MealsList from '../components/MealList/MealsList';

function MealsOverviewScreen({ route , navigation}){
    // const route = useRoute();
    // route.params
   const catId = route.params.categoryId;
   const displayedMeals = MEALS.filter((mealItem) =>{
    return mealItem.categoryIds.indexOf(catId) >= 0;
   });
   
//    useEffect(() => {
//     const categoryTitle = CATEGORIES.find((category) => category.id===catId).title;

//     navigation.setOptions({
//       title: categoryTitle
//     });
//    }, [catId,navigation]);

useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id===catId).title;

    navigation.setOptions({
      title: categoryTitle
    });
   }, [catId,navigation]);

//    function renderMealItem(itemData){
//     const item = itemData.item;
//     const mealItemProps = {
//         id: item.id,
//         title: item.title,
//         imageUrl: item.imageUrl,
//         affordability: item.affordability,
//         complexity: item.complexity,
//         duration: item.duration
//     }
    // return <MealItem title={itemData.item.title} 
    // imageUrl={itemData.item.imageUrl} />
    // return <MealItem {...mealItemProps}/>
  // }
//  return <View>
//     {/* <Text>Meals Overview Screen - {catId}</Text> */}
//     <FlatList  
//     data={displayedMeals}
//      keyExtractor={(item)=> item.id}
//      renderItem={renderMealItem}/>
//  </View>
return <MealsList items={displayedMeals} />;

}
export default MealsOverviewScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding:16,
//     }
// })