import Vue from "vue";
import Router from "vue-router";
import Homepage from "./views/AppHomepage.vue";
import TodoList from "./views/AppTodoList.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "homepage",
			component: Homepage
		},
		{
			path: "/todolist",
			name: "AppTodoList",
			component: TodoList
		},
		{
			path: "/calculator",
			name: "AppCalculator",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ "./views/AppCalculator.vue")
		}
	]
});
