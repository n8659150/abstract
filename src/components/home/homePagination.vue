<template>
	<div>
      <nav class="pagination">
          <span class="page-numbers prev inactive">Prev</span>
          <span class="page-numbers current">1</span>
          <a href="#" v-for="number in pageCount - 1" class="page-numbers">{{number + 1}}</a>
          <a href="#" class="page-numbers next">Next</a>
      </nav>
	</div>
</template>

<script>
export default {
  name: "homePagination",
  props:['pageCount'],
  data() {
    return {
    };
  }
};
</script>