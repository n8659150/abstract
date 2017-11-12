<template>
	<div>
		<article class="brick entry format-link animate-this">
			<div class="entry-thumb">
				<div class="link-wrap">
					<p>{{entryTitle}}</p>
					<cite>
                    <a target="_blank" :href="linkUrl">{{linkText}}</a>
                </cite>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
export default {
  name: "brickLink",
  props: ["linkUrl","linkText","entryTitle"]
};
</script>