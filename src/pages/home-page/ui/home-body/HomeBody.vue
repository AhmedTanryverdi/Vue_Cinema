<template>
	<div class="container">
		<my-loading v-if="$store.getters.getLoading" />
		<div class="content" v-else>
			<product-card
				v-for="product in products"
				:key="product.id"
				:id="product.id"
				:poster="product.poster"
				:title="product.title"
				:year="product.year"
				:genres="product.genres"
				:directors="product.directors"
				:actors="product.actors"
				:description="product.description"
			/>
		</div>
	</div>
</template>

<script>
import MyLoading from "@/shared/components/loading/MyLoading.vue";
import ProductCard from "@/shared/components/product-card/ProductCard.vue";

export default {
	name: "HomeBody",

	components: {
		ProductCard,
		MyLoading
	},

	computed: {
		products() {
			return this.$store.getters.products;
		},
	},

	created() {
		this.$store.dispatch(
			"asyncSetProducts",
			"https://mashroom-movies-api.netlify.app/api/movies"
		);
	},
};
</script>

<style lang="scss" scoped>
@import "@/shared/scss/styles.scss";

.loading {
	margin: 150px auto;
}

.container {
	margin-top: 40px;
	padding-bottom: 30px;
}

.content {
	@include flex-center;
	flex-direction: column;
	row-gap: 16px;
}
</style>
