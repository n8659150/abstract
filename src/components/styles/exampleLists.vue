<template>
	<div class="col-six tab-full">

		<h3>Example Lists</h3>

		<ol>
			<li>Here is an example</li>
			<li>of an ordered list.</li>
			<li>A parent list item.
				<ul>
					<li>one</li>
					<li>two</li>
					<li>three</li>
				</ul>
			</li>
			<li>A list item.</li>
		</ol>

		<ul class="disc">
			<li>Here is an example</li>
			<li>of an unordered list.</li>
		</ul>

		<h3>Definition Lists</h3>

		<h5>a) Multi-line Definitions (default)</h5>

		<dl>
			<dt><strong>This is a term</strong></dt>
			<dd>this is the definition of that term, which both live in a <code>dl</code>.</dd>
			<dt><strong>Another Term</strong></dt>
			<dd>And it gets a definition too, which is this line</dd>
			<dd>This is a 2<sup>nd</sup> definition for a single term. A <code>dt</code> may be followed by multiple <code>dd</code>s.</dd>
		</dl>

	</div>

</template>

<script>
export default {
  name: 'exampleLists'
}
</script>