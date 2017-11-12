<template>
	<div>
		<article class="brick entry format-gallery group animate-this">

			<div class="entry-thumb">

				<div class="post-slider flexslider">
					<ul class="slides">
						<li>
							<img :src="slide1Src">
						</li>
						<li>
							<img :src="slide2Src">
						</li>
						<li>
							<img :src="slide3Src">
						</li>
					</ul>
				</div>

			</div>

			<div class="entry-text">
				<div class="entry-header">

					<div class="entry-meta">
						<span class="cat-links">
                  <a href="#">{{catLink1}}</a> 
                  <a href="#">{{catLink2}}</a>               				
                </span>
					</div>

					<h1 class="entry-title"><a :href="type + '.html'">{{entryTitle}}</a></h1>

				</div>
				<div class="entry-excerpt">
					{{entryExcerpt}}
				</div>
			</div>
		</article>
	</div>
</template>

<script>
export default {
  name: "brickGallery",
  props: ["type","slide1Src","slide2Src","slide3Src","catLink1","catLink2","entryTitle","entryExcerpt"]
};
</script>