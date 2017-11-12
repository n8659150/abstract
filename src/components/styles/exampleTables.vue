<template>
	<div class="col-twelve">

		<h3>Tables</h3>
		<p>Be sure to use properly formed table markup with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> when building
			a <code>table</code>.</p>

		<div class="table-responsive">

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Sex</th>
						<th>Location</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Naruto Uzumaki</td>
						<td>16</td>
						<td>Male</td>
						<td>Konoha</td>
					</tr>
					<tr>
						<td>Sakura Haruno</td>
						<td>16</td>
						<td>Female</td>
						<td>Konoha</td>
					</tr>
				</tbody>
			</table>

		</div>

	</div>
</template>

<script>
export default {
  name: 'exampleTables'
}
</script>