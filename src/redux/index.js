//Redux elements
import store from "./store/index.js";
import { addArticle } from "./actions/index.js";

window.store = store;
window.addArticle = addArticle;

store.subscribe(() => console.log("Look ma, Redux!!"));
store.dispatch(
  addArticle({ name: "React Redux Tutorial for Beginners", id: 1 })
);
