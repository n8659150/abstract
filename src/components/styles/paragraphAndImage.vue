<template>
	<div class="col-six tab-full">

		<h3>Paragraph and Image</h3>

		<p>
			<a href="#"><img width="120" height="120" class="pull-left" alt="sample-image" :src="imgUrl"></a>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum.Cras id urna. Morbi tincidunt,
			orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat
			bibendum, dui pede condimentum odio, ac blandit ante orci ut diam. Cras fringilla magna. Phasellus suscipit, leo a pharetra
			condimentum, lorem tellus eleifend magna, eget fringilla velit magna id neque posuere nunc justo tempus leo. </p>

		<p>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna. Morbi tincidunt,
			orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat
			bibendum, dui pede condimentumodio, ac blandit ante orci ut diam.
		</p>

		<p>A <a href="#">link</a>,
			<abbr title="this really isn't a very good description">abbrebation</abbr>,
			<strong>strong text</strong>,
			<em>em text</em>,
			<del>deleted text</del>, and
			<mark>this is a mark text.</mark>
			<code>.code</code>
		</p>

	</div>
</template>

<script>
export default {
  name: 'paragraphAndImage',
  props:['imgUrl']
}
</script>