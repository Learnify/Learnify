import { ADD_ARTICLE } from "../constants/types.js";

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});
