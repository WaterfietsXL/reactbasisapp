import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { Box, Center, Image, Flex, Badge, Text,Input } from "@chakra-ui/react";

export const App = () => {
  var [currentrecipe,setCurrentrecipe] = useState(null);

  

  if (currentrecipe) {
    return <RecipePage recipe={currentrecipe} setCurrentrecipe={setCurrentrecipe}></RecipePage>;
  } else {
    return <RecipeListPage setCurrentrecipe={setCurrentrecipe} />;
  }
};

const RecipePage = (props) => {
  var recipe = props.recipe.recipe
  return <Center>
    <Box mb="10" p="5" maxW="320px" borderWidth="1px">
      <p onClick={() => {props.setCurrentrecipe(null)}}><b>go back</b></p>
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt="" />
      <p><b>mealtype</b> {recipe.mealType[0]}</p>
      <p><b>dishtype</b> {recipe.dishType[0]}</p>
      <p><b>cooking</b> time {recipe.totalTime}</p>
      <p><b>dietlabel</b> {recipe.dietLabels[0]}</p>
      <p><b>healthlabel</b> {recipe.healthLabels.join(' ')}</p>
      <p><b>cautions</b> {recipe.cautions[0]}</p>
      <p><b>ingredients</b> {recipe.ingredientLines.join(' ')}</p>
      <p><b>servings</b> {recipe.yield}</p>
      <p><b>kcal</b> {recipe.calories / 1000}</p>
      <p><b>protein</b> {recipe.totalNutrients.PROCNT.quantity}</p>
      <p><b>fat</b> {recipe.totalNutrients.FAT.quantity}</p>
      <p><b>carbs</b> {recipe.totalNutrients.CHOCDF.quantity}</p>
      <p><b>cholesterol</b> {recipe.totalNutrients.CHOLE.quantity}</p>
      <p><b>sodium</b> {recipe.totalNutrients.NA.quantity}</p>
    </Box>
  </Center>
};
