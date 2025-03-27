<template>
	<div class="header">
		<home-header />
	</div>

	<home-body />
</template>

<script>
import HomeHeader from "./ui/home-header/HomeHeader.vue";
import HomeBody from "./ui/home-body/HomeBody.vue";

export default {
	name: "HomePage",

	components: {
		HomeHeader,
		HomeBody,
	},
};
</script>
