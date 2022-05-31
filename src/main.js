import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCR9yTJ2Vzr7GmI78HeE2XNg0VHPiEysHI",
    authDomain: "crudpontotel.firebaseapp.com",
    projectId: "crudpontotel",
    storageBucket: "crudpontotel.appspot.com",
    messagingSenderId: "135725176343",
    appId: "1:135725176343:web:4d3d767371c65e4409ee52"
  };
initializeApp(firebaseConfig)
createApp(App).use(store).use(router).mount('#app')
