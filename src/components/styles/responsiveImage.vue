<template>
	<div class="col-six tab-full">

		<h3>Responsive Image</h3>
		<p><img :src="imgUrl"></p>

	</div>
</template>

<script>
export default {
  name: 'responsiveImage',
  props:['imgUrl']
}
</script>