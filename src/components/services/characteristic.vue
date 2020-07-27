<template>
  <section class="servicesSection">
    <div class="container-fluid">
      <div class="wrap">
        <b-row tag="ul" class="servicesList">
          <b-col tag="li" cols="12" md="6" xl="4" class="singleService" v-for="(item, index) in advantagesList" :key="`singleService-item-${index}`">
            <div class="singleService__title">
              <i class="icon" :style="`background-image:url('${item.src}')`"></i>
              <h3>{{ item.title }}</h3>
            </div>
            <h5 class="singleService__desc">{{ item.description }}</h5>
          </b-col>
        </b-row>
      </div>
    </div>

  </section>
</template>

<script>

    export default {
        name: 'characteristic',
        data: () => ({}),

        computed: {
            pageData() {
                return this.$store.state.page && this.$store.state.page.ServicesItem &&  this.$store.state.page.ServicesItem.item;
            },

            advantagesList() {
                if (!this.pageData) return [];

                const images = this.pageData.servicesImageList;
                const imgDesc = this.pageData.servicesImageListDescription;
                const servicesText = this.pageData.servicesTextList;

                return images.reduce((acc, item, index) => [...acc, {
                    description: servicesText && servicesText[index],
                    src: item,
                    title: imgDesc && imgDesc[index]
                }], []);
            },
        }
    }
</script>
