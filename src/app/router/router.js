import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/home/HomePage.vue";
import MoviePage from "@/pages/movie-page/MoviePage.vue";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "HomePage",
			component: HomePage,
		},
		{
			path: "/movie",
			name: "MoviePage",
			component: MoviePage,
		},
		{
			path: "/movie/:id",
			name: "MoviePageID",
			component: MoviePage,
		},
	],
});

export default router;
