<template>
    <div class="brick entry featured-grid animate-this">
      <div class="entry-content">
        <div id="featured-post-slider" class="flexslider">
          <ul class="slides">
            <li v-for="slider in sliderData">
              <!-- /slide -->
              <brickSlide :slideSrc="slider['sliderSrc']" :slideDate="slider['sliderDate']" :slideAuthor="slider['sliderAuthor']" :type="slider['type']" :slideTitle="slider['sliderTitle']"></brickSlide>
              <!-- end slide -->
            </li>
          </ul>
          <!-- end slides -->
        </div>
        <!-- end featured-post-slider -->
      </div>
      <!-- end entry content -->
    </div>
</template>

<script>
export default {
  name: "brickSlider",
  props:['sliderData']
};
</script>