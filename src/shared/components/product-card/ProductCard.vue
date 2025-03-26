<template>
	<div class="card">
		<div class="img">
			<img :src="poster" alt="image" />
		</div>
		<div class="body">
			<h3 class="title">{{ title }}</h3>
			<div class="genres">
				<span>{{ year }}, </span>
				<ul>
					<li v-for="(genre, index) in genres" :key="index">
						{{ genre }},
					</li>
				</ul>
			</div>

			<div class="directors">
				<span>режиссёр: </span>
				<ul>
					<li v-for="(director, index) in directors" :key="index">
						{{ director }}
					</li>
				</ul>
			</div>

			<div class="actors">
				<span>Актёры: </span>
				<ul>
					<li v-for="(actor, index) in actors" :key="index">
						{{ actor }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProductCard",

	props: ["poster", "title", "year", "genres", "directors", "actors"],
};
</script>

<style lang="scss" scoped>
@import "./../../scss/styles.scss";
.card {
	width: 1400px;
	height: 168px;
	@include flex(row, flex-start, center);
	column-gap: 24px;
	background: #4d4747;
	transition: 0.5s;

	&:hover {
		box-shadow: 0px 4px 4px 0px #00000040;
        transform: translateY(-8px);
	}

	.img {
		width: 168px;
		height: 168px;
		display: inline-block;
		background-color: $poster-bg;
		@include flex-center;
		flex-basis: 168px;
		img {
			width: 112px;
		}
	}

	.body {
		width: 1208px;

		.title {
			@include font(700, 36px, 36px, 0);
			color: $primary-txt-color;
			margin-bottom: 12px;
		}

		.genres,
		.directors {
			margin-bottom: 8px;
			@include flex(row, flex-start, flex-start);
			flex-wrap: wrap;
			@include font(700, 12px, 12px, 0);
			text-transform: uppercase;
			color: #988f8f;
		}

		.genres {
			ul {
				display: flex;
			}
		}

		.actors {
			display: flex;
			span {
				margin-right: 8px;
				color: #988f8f;
			}
			ul {
                align-self: center;
				display: flex;
				flex-wrap: wrap;

				li {
					@include font(400, 12px, 16px, 0);
					color: #e5e5e5;
				}

				li:not(:last-child)::after {
					content: ", ";
					margin-right: 2px;
				}
			}
		}
	}
}
</style>
