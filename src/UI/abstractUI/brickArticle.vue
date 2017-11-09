<template>
	<div>
      <article class="brick entry animate-this">

          <div class="entry-thumb">
            <a :href="type + '.html'" class="thumb-link">
              <img :src="thumbnailSrc" :alt="srcAlt">
            </a>
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
  name: "brickArticle",
  props: ["type","thumbnailSrc","srcAlt","catLink1","catLink2","entryTitle","entryExcerpt"]
};
</script>