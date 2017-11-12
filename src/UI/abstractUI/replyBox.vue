<template>
	<div class="respond">

		<h3>Leave a Comment</h3>

		<form name="contactForm" id="contactForm" method="post" action="">
			<fieldset>

				<div class="form-field">
					<input name="cName" type="text" id="cName" class="full-width" placeholder="Your Name" value="">
				</div>

				<div class="form-field">
					<input name="cEmail" type="text" id="cEmail" class="full-width" placeholder="Your Email" value="">
				</div>

				<div class="form-field">
					<input name="cWebsite" type="text" id="cWebsite" class="full-width" placeholder="Website" value="">
				</div>

				<div class="message form-field">
					<textarea name="cMessage" id="cMessage" class="full-width" placeholder="Your Message"></textarea>
				</div>

				<button type="submit" class="submit button-primary">Submit</button>

			</fieldset>
		</form>
		<!-- Form End -->

	</div>
	<!-- Respond End -->
</template>

<script>
export default {
  name: "replyBox"
};
</script>