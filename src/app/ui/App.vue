<template>
	<my-header />
	<main>
		<router-view />
	</main>
</template>

<script>
import MyHeader from "../../widget/header/MyHeader.vue";

export default {
	name: "App",
	components: {
		MyHeader,
	},
};
</script>

<style lang="scss">
@import "@/shared/scss/styles.scss";

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	list-style: none;
	font-family: 'Roboto';
}

#app {
	width: 100%;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: $bg-app;
	min-height: 100vh;
}
</style>
