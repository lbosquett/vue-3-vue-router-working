import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import { blockStore} from "./stores/guard-store.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: "page-1", path: '/', component: () => import("./pages/Page1.vue") },
        { name: "page-2", path: '/page-2', component: () => import("./pages/Page2.vue") },
        { name: "page-3", path: '/page-3', component: () => import("./pages/Page3.vue") }
    ]
});

router.beforeEach((to, from, next) => {
    if (blockStore.block) {
        if (!confirm("leave?")) {
            next(false);
            return;
        }
    }
    next();
})

createApp(App)
    .use(router)
    .mount('#app')
