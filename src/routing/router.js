import { createRouter, createWebHistory } from 'vue-router';

// Global
import HomeView from '../views/global/HomeView.vue';

const routes = [
    // Global
    {
        path: '/',
        name: 'home',
        component: HomeView,
        props: true,
        meta: { title: "Instagram" }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const pageTitle = to.meta.title;
    if (pageTitle) {
        document.title = pageTitle;
    } else {
        document.title = "Instagram";
    }
    next();
});

export default router;