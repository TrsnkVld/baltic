<template>
  <div>
    <header-title  :headerTitle="pageData.title" :headerDesc="pageData.date" />
    <article>
      <b-container fluid>
        <b-row class="textRow">
          <b-col class="textRow__img" cols="12" :xl="5">
            <slider :gallery="images"></slider>
          </b-col>
          <b-col class="textRow__content" cols="12" :xl="7">
            <div v-html="pageData.detailText"></div>
          </b-col>
        </b-row>
      </b-container>
    </article>
  </div>
</template>

<script>
    import headerTitle from '@/components/common/header-title';
    import slider from './news-slider';
    export default {
        name: 'news-content',
        components: {
            slider,
            headerTitle
        },

        created() {
           if (!this.$store.getters.page || !this.$store.getters.page.News) {
             this.$router.push('/error404');
           }
        },

        computed: {
            pageData() {
              console.log('ss');
                if (!this.$store.getters.page || !this.$store.getters.page.News) return {};
                return this.$store.getters.page.News;
            },

            images() {
                if (!this.pageData.images) return [];
                return this.pageData.images;
            }
        },
    }
</script>
