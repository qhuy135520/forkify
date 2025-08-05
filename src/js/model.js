import { async } from 'regenerator-runtime';
import recipeFake from '../recipe.json';
import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const keyAPI = `80254e3f-7c0c-442d-a033-17859bd539cb`;

    const url = `${API_URL}/${id}?key=${keyAPI}`;

    const data = await getJSON(url);

    // const data = await recipeFake;

    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      image: recipe.image_url,
      source: recipe.source_url,
    };
  } catch (err) {
    throw err;
  }
};
