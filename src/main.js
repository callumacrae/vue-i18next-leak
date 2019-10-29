import Vue from "vue";
import App from "./App.vue";
import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';

Vue.use(VueI18Next);

function initVue() {
  i18next.init({
    lng: 'en',
    resources: {
      en: { translation: {} }
    }
  });

  new Vue({
    render: h => h(App),
    i18n: new VueI18Next(i18next)
  });
}

document.querySelector('#leak')
  .addEventListener('click', () => {
    for (let i = 0; i < 1000; i++) {
      initVue();
    }
  });
