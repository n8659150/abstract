<template>
	<div class="col-six tab-full">

		<h3>Form Styles</h3>

		<form>
			<div>
				<label for="sampleInput">Your email</label>
				<input class="full-width" type="email" placeholder="test@mailbox.com" id="sampleInput">
			</div>
			<div>
				<label for="sampleRecipientInput">Reason for contacting</label>
				<div class="ss-custom-select">
					<select class="full-width" id="sampleRecipientInput">
				        		<option value="Option 1">Questions</option>
				        		<option value="Option 2">Report</option>
				        		<option value="Option 3">Others</option>
				        	</select>
				</div>
			</div>

			<label for="exampleMessage">Message</label>
			<textarea class="full-width" placeholder="Your message" id="exampleMessage"></textarea>

			<label class="add-bottom">
			        	<input type="checkbox">			            
			        	<span class="label-text">Send a copy to yourself</span>
			     	</label>

			<input class="button-primary full-width-on-mobile" type="submit" value="Submit">

		</form>

	</div>
</template>

<script>
export default {
  name: 'formStyles'
}
</script>