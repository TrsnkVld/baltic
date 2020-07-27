<template>
  <section class="home-info-section infoSection">
    <b-container fluid>
      <div class="wrap">
        <h2 class="infoSection__title h1">{{ $t('homePage.about.title') }}</h2>
        <b-row>
            <b-col cols="12" class="infoSection__desc">
              <p v-for="(item, index) in $t('homePage.about.describe')" :key="`about-item${index}`">
                {{item}}
              </p>
            </b-col>
            <b-col cols="12" class="infoSection__content">
              <b-row class="infoList infoList-types">
                <b-col cols="6" sm="4" class="infoList__item" v-for="({text, img}, index) in $t('homePage.about.list')" :key="`list-item-${index}`">
                    <div class="title">
                      <router-link :to="{name: 'about', hash: '#video'}" v-if="index===0" class="home-info-section__link">
                        <i class="icon icon-fruits" :style="`background-image:url('${setImage(img)}')`"></i>
                        <h3>{{text}}</h3>
                      </router-link>
                      <div v-else class="home-info-section__link">
                        <i class="icon icon-fruits" :style="`background-image:url('${setImage(img)}')`"></i>
                        <h3>{{text}}</h3>
                      </div>
                    </div>
                </b-col>
              </b-row>
            </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'aboutSection',

    methods: {
        setImage(src) {
             return require(`@/assets/${src}`);
        },
    },

    mounted() {
      // console.log(this.$t('homePage.about.list'))
    }
}
</script>

<style lang="less">
  @import '../../less/variables.less';

  .home-info-section {
    &.infoSection {
      i.icon {
      min-width: 100px;

      }
    }

    &__link {
      text-align: center;
    }
  }

</style>
