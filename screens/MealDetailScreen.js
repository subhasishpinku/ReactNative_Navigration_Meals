import { useContext,useLayoutEffect } from 'react'
import { View ,Text , Image , StyleSheet , ScrollView, Button} from 'react-native'
import { MEALS } from '../data/dummy-data';

import MealDetails from '../components/MealDetails';
import List from '../components/MealDetail/List';
import SubTitle from '../components/MealDetail/SubTitle';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite , removeFavorite} from '../store/redux/favorites'
function MealDetailScreen({route , navigation}){
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  
   const dispatch = useDispatch();
    // const favoriteMealsCtx =  useContext(FavoritesContext);

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal)=> meal.id ===mealId);

    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler(){
        console.log('Pressed!');
        if(mealIsFavorite){
            // favoriteMealsCtx.removeFavorite(mealId);
            dispatch( removeFavorite( { id:mealId } ) );
        }else{
            // favoriteMealsCtx.addFavorite(mealId);
            dispatch( addFavorite( { id:mealId } ) );

        }
    }
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerRight: () =>{
            //   return <Button title='Tap me' onPress={changeFavoriteStatusHandler}/>
            return <IconButton 
            icon={mealIsFavorite ?  'star' : 'star-outline'} 
            color="white" 
            onPress={changeFavoriteStatusHandler}/>
            }
        })
    },[navigation,changeFavoriteStatusHandler]);


    return (
    <ScrollView style={styles.rootContainer}>
         <Image  style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
         <Text style={styles.title}>{selectedMeal.title}</Text>
         <MealDetails duration={selectedMeal.duration} 
          complexity={selectedMeal.complexity}
         affordability={selectedMeal.affordability} 
         textStyle={styles.dttailText}
        />
        {/* <View style={styles.subtitleContainer}>
         <Text style={styles.subtitles}>Ingredients</Text>
        </View> */}
         
         {/* {selectedMeal.ingredients.map((ingredient)=>(
         <Text key={ingredient}>{ingredient}</Text>

         ))} */}
         {/* <View style={styles.subtitleContainer}>
         <Text style={styles.subtitles}>Stpes</Text>
         </View> */}
       

         {/* {selectedMeal.steps.map((step)=>(
         <Text key={step}>{step}</Text>

         ))} */}
        <View style={styles.listOuterContent}>
         <View style={styles.listContainer}>
         <SubTitle>Ingredient</SubTitle>
          <List data={selectedMeal.ingredients}/>
          <SubTitle>Step</SubTitle>
          <List data={selectedMeal.steps}/>
         </View>

        </View>
    </ScrollView>
    );
}

export default MealDetailScreen;
const styles = StyleSheet.create({
    rootContainer: {
     marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    dttailText:{
        color: 'white'
    },
    listOuterContent: {
     alignItems: 'center'
    },
    listContainer: {
        width: '80%',
    }
    // subtitles:{
    //     color: '#e2b497',
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
        
    // },
    // subtitleContainer: {
    //     padding: 6,
    //     marginHorizontal: 24,
    //     marginVertical: 4,
    //     borderBottomColor: '#e2b497',
    //     borderBottomWidth: 2
    // }
})