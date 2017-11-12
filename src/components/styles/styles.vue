<template>
	<div>
		<div id="content-wrap" class="styles">

			<div class="row narrow add-bottom text-center">

				<div class="col-twelve tab-full">

					<h1>Style Guide Page.</h1>

					<p class="lead">Lorem ipsum Officia elit ad tempor dolore est ex incididunt incididunt occaecat culpa deserunt sunt labore in cillum
						ullamco magna in Excepteur consequat in reprehenderit proident mollit incididunt officia commodo. Duis ea officia sed
						dolor pariatur enim dolore dolore quis incididunt nulla exercitation commodo veniam et ea incididunt.</p>

				</div>

			</div>

			<div class="row">

				<paragraphAndImage imgUrl="static/images/sample-image.jpg"></paragraphAndImage>
				<dropCaps></dropCaps>

			</div>
			<!-- end row -->


			<div class="row">

				<pullQuotes></pullQuotes>

				<blockQuotes></blockQuotes>

			</div>
			<!-- end row -->

			<div class="row half-bottom">
				<exampleLists></exampleLists>
				<exampleHeaders></exampleHeaders>

			</div>
			<!-- end row -->

			<div class="row half-bottom">

				<statsTabs></statsTabs>

			</div>
			<!-- end row -->

			<div class="row half-bottom">

				<responsiveImage imgUrl="static/images/shutterbug.jpg"></responsiveImage>


			</div>
			<!-- end row -->

			<div class="row add-bottom">

				<exampleTables></exampleTables>

			</div>
			<!-- end row -->

			<div class="row">

				<formStyles></formStyles>

				<div class="col-six tab-full">

					<codeBlock></codeBlock>

					<alertBoxes></alertBoxes>

				</div>

			</div>
			<!-- end row -->

		</div>
		<!-- end styles -->
	</div>
</template>

<script>
  import alertBoxes from './alertBoxes'
  import blockQuotes from './blockQuotes'
  import codeBlock from './codeBlock'
  import dropCaps from './dropCaps'
  import exampleHeaders from './exampleHeaders'
  import exampleLists from './exampleLists'
  import exampleTables from './exampleTables'
  import formStyles from './formStyles'
  import paragraphAndImage from './paragraphAndImage'
  import pullQuotes from './pullQuotes'
  import responsiveImage from './responsiveImage'
  import statsTabs from './statsTabs'
export default {
  name: 'Styles',
  components:{
    alertBoxes,
    blockQuotes,
    codeBlock,
    dropCaps,
    exampleHeaders,
    exampleLists,
    exampleTables,
    formStyles,
    paragraphAndImage,
    pullQuotes,
    responsiveImage,
    statsTabs
  }
}
</script>