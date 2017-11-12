<template>
	<div>
		<h3>Alert Boxes</h3>

		<div class="alert-box ss-error hideit">
			<p>Error Message. Your Message Goes Here.</p>
			<i class="fa fa-times close"></i>
		</div>
		<!-- /error -->

		<div class="alert-box ss-success hideit">
			<p>Success Message. Your Message Goes Here.</p>
			<i class="fa fa-times close"></i>
		</div>
		<!-- /success -->

		<div class="alert-box ss-info hideit">
			<p>Info Message. Your Message Goes Here.</p>
			<i class="fa fa-times close"></i>
		</div>
		<!-- /info -->

		<div class="alert-box ss-notice hideit">
			<p>Notice Message. Your Message Goes Here.</p>
			<i class="fa fa-times close"></i>
		</div>
		<!-- /notice -->
	</div>
</template>

<script>
export default {
  name: 'alertBoxes'
}
</script>