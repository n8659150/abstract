<template>
	<div>
		<article class="brick entry format-quote animate-this">
			<div class="entry-thumb">
				<blockquote>
					<p>{{quote}}</p>

					<cite>{{author}}</cite>
				</blockquote>
			</div>
		</article>
	</div>
</template>

<script>
export default {
  name: "brickQuote",
  props: ["quote","author"]
};
</script>