import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue';
import AboutUs from './components/AboutUs.vue';
import OurServices from './components/OurServices.vue';
import OurCustomers from './components/OurCustomers.vue';

const routes = [
{path: '/', component: HelloWorld},
{ path: '/about', component: AboutUs },
{ path: '/services', component: OurServices },
{ path: '/customers', component: OurCustomers }
];

const router = createRouter({
    history: createWebHistory(),
    routes
    });

// createApp(App).mount('#app')

createApp(App).use(router).mount('#app');
