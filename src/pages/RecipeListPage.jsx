import { useState } from "react";
import { Box, Center, Image, Flex, Badge, Text,Input } from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = (props) => {
  var [recipefilter,setRecipeFilter] = useState('')
  for (const item of data.hits) {
    console.log(item);
  }

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Input maxW="320px" mb="10" value={recipefilter} onChange={(e) => setRecipeFilter(e.target.value)} placeholder='large size' size='lg' />
        {

            data.hits.filter(hit => {
              return hit.recipe.label.search(new RegExp(recipefilter,'i')) >= 0 || hit.recipe.healthLabels.some(hl => hl.search(new RegExp(recipefilter,'i')) >= 0)
            }).map((hit) => {
                return <Box mb="10" p="5" maxW="320px" borderWidth="1px">
                    <p onClick={e => props.setCurrentrecipe(hit)}>{hit.recipe.label}</p>
                    <img style={{}} src={hit.recipe.image} alt="" />
                    <p>{hit.recipe.dietLabels[0]}</p>
                    <p>{hit.recipe.cautions[0]}</p>
                    <p>{hit.recipe.mealType[0]}</p>
                    <p>{hit.recipe.dishType[0]}</p>
                    <p>{hit.recipe.healthLabels.filter(label => label == "Vegetarian")[0]}</p>
                    <p>{hit.recipe.healthLabels.filter(label => label == "Vegan")[0]}</p>
                  </Box>
            })
        }
    </div>
    
  );
};
