<template>
	<div>
		<section id="page-header">
			<div class="row current-cat">
				<div class="col-full">
					<h1>Category: Photography</h1>
				</div>
			</div>
		</section>
		<!-- masonry
   ================================================== -->
		<section id="bricks" class="with-top-sep">

			<div class="row masonry">

				<!-- brick-wrapper -->
				<div class="bricks-wrapper">

					<div class="grid-sizer"></div>

					<brickArticle :type="brickData['building']['type']" :thumbnailSrc="brickData['building']['thumbnailSrc']" :srcAlt="brickData['building']['srcAlt']"
						:catLink1="brickData['building']['catLink1']" :catLink2="brickData['building']['catLink2']" :entryTitle="brickData['building']['entryTitle']"
						:entryExcerpt="brickData['building']['entryExcerpt']"></brickArticle>
					<!-- end article -->
					<brickArticle :type="brickData['ferris']['type']" :thumbnailSrc="brickData['ferris']['thumbnailSrc']" :srcAlt="brickData['ferris']['srcAlt']"
						:catLink1="brickData['ferris']['catLink1']" :catLink2="brickData['ferris']['catLink2']" :entryTitle="brickData['ferris']['entryTitle']"
						:entryExcerpt="brickData['ferris']['entryExcerpt']"></brickArticle>
					<!-- end article -->
					<!-- format audio here -->
					<brickAudio :type="brickData['concert']['type']" :thumbnailSrc="brickData['concert']['thumbnailSrc']" :srcAlt="brickData['concert']['srcAlt']"
						:audioSrc="brickData['concert']['audioSrc']" :catLink1="brickData['concert']['catLink1']" :catLink2="brickData['concert']['catLink2']"
						:entryTitle="brickData['concert']['entryTitle']" :entryExcerpt="brickData['concert']['entryExcerpt']"></brickAudio>
					<!-- /article -->
					<brickQuote :quote="brickData['quote']['quote']" :author="brickData['quote']['author']"></brickQuote>
					<!-- end article -->
					<brickArticle :type="brickData['Shutterbug']['type']" :thumbnailSrc="brickData['Shutterbug']['thumbnailSrc']" :srcAlt="brickData['Shutterbug']['srcAlt']"
						:catLink1="brickData['Shutterbug']['catLink1']" :catLink2="brickData['Shutterbug']['catLink2']" :entryTitle="brickData['Shutterbug']['entryTitle']"
						:entryExcerpt="brickData['Shutterbug']['entryExcerpt']"></brickArticle>
					<!-- end article -->
					<brickArticle :type="brickData['USAF']['type']" :thumbnailSrc="brickData['USAF']['thumbnailSrc']" :srcAlt="brickData['USAF']['srcAlt']"
						:catLink1="brickData['USAF']['catLink1']" :catLink2="brickData['USAF']['catLink2']" :entryTitle="brickData['USAF']['entryTitle']"
						:entryExcerpt="brickData['USAF']['entryExcerpt']"></brickArticle>
					<!-- end article -->
					<brickGallery :type="brickData['Gallery']['type']" :slide1Src="brickData['Gallery']['slide1Src']" :slide2Src="brickData['Gallery']['slide2Src']"
						:slide3Src="brickData['Gallery']['slide3Src']" :catLink1="brickData['Gallery']['catLink1']" :catLink2="brickData['Gallery']['catLink2']"
						:entryTitle="brickData['Gallery']['entryTitle']" :entryExcerpt="brickData['Gallery']['entryExcerpt']"></brickGallery>
					<!-- end article -->
					<brickLink :linkUrl="brickData['dreamHost']['linkUrl']" :linkText="brickData['dreamHost']['linkText']" :entryTitle="brickData['dreamHost']['entryTitle']"></brickLink>
					<!-- end article -->
					<brickArticle :type="brickData['Pattern']['type']" :thumbnailSrc="brickData['Pattern']['thumbnailSrc']" :srcAlt="brickData['Pattern']['srcAlt']"
						:catLink1="brickData['Pattern']['catLink1']" :catLink2="brickData['Pattern']['catLink2']" :entryTitle="brickData['Pattern']['entryTitle']"
						:entryExcerpt="brickData['Pattern']['entryExcerpt']"></brickArticle>
					<!-- end article -->
					<brickVideo :type="brickData['bokeh']['type']" :thumbnailSrc="brickData['bokeh']['thumbnailSrc']" :srcAlt="brickData['bokeh']['srcAlt']"
						:catLink1="brickData['bokeh']['catLink1']" :catLink2="brickData['bokeh']['catLink2']" :entryTitle="brickData['bokeh']['entryTitle']"
						:entryExcerpt="brickData['bokeh']['entryExcerpt']"></brickVideo>
					<!-- end article -->
					<brickArticle :type="brickData['Lighthouse']['type']" :thumbnailSrc="brickData['Lighthouse']['thumbnailSrc']" :srcAlt="brickData['Lighthouse']['srcAlt']"
						:catLink1="brickData['Lighthouse']['catLink1']" :catLink2="brickData['Lighthouse']['catLink2']" :entryTitle="brickData['Lighthouse']['entryTitle']"
						:entryExcerpt="brickData['Lighthouse']['entryExcerpt']"></brickArticle>
					<!-- end article -->
					<brickArticle :type="brickData['Liberty']['type']" :thumbnailSrc="brickData['Liberty']['thumbnailSrc']" :srcAlt="brickData['Liberty']['srcAlt']"
						:catLink1="brickData['Liberty']['catLink1']" :catLink2="brickData['Liberty']['catLink2']" :entryTitle="brickData['Liberty']['entryTitle']"
						:entryExcerpt="brickData['Liberty']['entryExcerpt']"></brickArticle>
					<!-- end article -->
				</div>
				<!-- end brick-wrapper -->

			</div>
			<!-- end row -->
		</section>
		<!-- bricks -->
		<div class="row">
			<absPagination pageCount='5'></absPagination>
		</div>
	</div>
</template>

<script>
import brickData from '../../data/brickData'
export default {
  name: 'Categories',
  data () {
    return {
      brickData
    }
  }
}
</script>