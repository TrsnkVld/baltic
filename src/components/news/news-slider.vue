<template>
  <div class="image-gallery">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(src, index) in gallery" :key="`image-gallery-item-${index}`">
        <div class="image" :style="{ backgroundImage: `url('${src}')` }">
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: 'news-slider',
        data: () => ({
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                speed: 500,
            },
        }),

        props: {
            gallery: {
                type: Array,
            }
        },
    }
</script>

<style lang="less">

</style>
