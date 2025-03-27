<template>
	<div class="container">
		<div class="content">
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
			/>
		</div>
	</div>
</template>

<script>
import ProductCard from "@/shared/components/product-card/ProductCard.vue";

export default {
	name: "HomeBody",

	components: {
		ProductCard,
	},

	data() {
		return {
			isLoading: true,
		};
	},

	computed: {
		products() {
			return this.$store.getters.products;
		},
	},

	created() {
		this.$store.dispatch("asyncSetProducts");
	},
};
</script>

<style lang="scss" scoped>
@import "@/shared/scss/styles.scss";

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
