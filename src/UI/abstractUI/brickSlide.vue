<template>

	<div class="featured-post-slide">
		<div class="post-background" :style="'background-image:url(' + slideSrc + ');'"></div>
		<div class="overlay"></div>
		<div class="post-content">
			<ul class="entry-meta">
				<li>{{slideDate}}</li>
				<li><a href="#">{{slideAuthor}}</a></li>
			</ul>
			<h1 class="slide-title"><a :href="type + '.html'" title="">{{slideTitle}}</a></h1>
		</div>
	</div>

</template>

<script>
export default {
  name: "brickSlide",
  props:["slideSrc","slideDate","slideAuthor","type","slideTitle"]
};
</script>