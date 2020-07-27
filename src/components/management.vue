<template>
  <main class="team">
    <header-title
      :headerTitle="title || headerTitle"
      :headerDesc="describe || headerDesc"
    />
    <b-container fluid>
      <department-row
        v-for="(item, index) in departments"
        :key="index"
        :data="item"
      />
      <b-row
        v-for="(item, index) in information"
        :key="index"
        :class="{ 'blue order': index % 2 !== 0 }"
        class="textRow fade-in"
        :data-aos="anim(index)"
      >
        <b-col class="textRow__img" cols="12" :lg="'4'">
          <img :src="item.src" alt="image" />
        </b-col>
        <b-col class="textRow__content" cols="12" :lg="'8'">
          <div v-html="item.content"></div>
        </b-col>
      </b-row>
      <image-gallery :gallery="gallery" type="gallery" />
    </b-container>
    <background-image />
  </main>
</template>

<script>
  import headerTitle from "./common/header-title";
  import backgroundImage from "./common/background-image";
  import imgTxtRow from "./common/img-txt-row";
  import departmentRow from "./management/department-row";
  import imageGallery from "./common/image-gallery";

  export default {
    name: "management",
    components: {
      headerTitle,
      backgroundImage,
      imgTxtRow,
      departmentRow,
      imageGallery,
    },
    data: () => ({
      headerTitle: "Компания в лицах",
      headerDesc:
        "Накопленный нами богатый опыт, знание международной практики морских перевозок, высокий профессионализм – все это гарантирует эффективное взаимовыгодное сотрудничество с нашими клиентами и партнерами.",
    }),

    computed: {
      pageData() {
        return this.$store.getters.page.SpecialistList;
      },

      describe() {
        if (!this.pageData.describe) return null;
        return this.pageData.describe;
      },

      title() {
        if (!this.pageData.title) return null;
        return this.pageData.title;
      },

      departments() {
        if (!this.pageData.items) return null;
        return this.pageData.items;
      },

      informationImages() {
        if (!this.pageData) return [];

        return this.pageData.informationImages;
      },

      information() {
        //console.log(this.pageData);
        if (!this.pageData || !this.pageData.informationImages) return [];

        const images = this.pageData.informationImages;

        return this.pageData.informationText.reduce((acc, item, index) => {
          return [
            ...acc,
            {
              content: item.TEXT,
              src: images[index],
            },
          ];
        }, []);
      },

      gallery() {
        if (!this.pageData) return [];

        return this.pageData.images.map((item) => {
          return {
            src: item,
            name: this.pageData.desc_images[this.pageData.images.indexOf(item)],
          };
        });
      },
    },

    methods: {
      anim(b) {
        if (b % 2 === 0) {
          return "fade-right";
        } else {
          return "fade-left";
        }
      },
      scrollTo(hashtag) {
        setTimeout(() => {
          //location.href = hashtag
          document
            .querySelector(hashtag)
            .scrollIntoView({ block: "center", behavior: "smooth" });
        }, 1);
      },
    },
    mounted() {
      if (this.$route.hash) {
        setTimeout(() => {
          this.scrollTo(this.$route.hash);
        }, 1);
      }
    },
  };
</script>

<style lang="less">
  @import "../less/variables.less";

  main {
    &.team .background-image {
      background-color: #0045a0;

      &::after {
        background: transparent;
      }

      &::before {
        content: "";
        display: block;
        background-image: url("../assets/img/map-bg.png");
        background-size: contain;
        background-position: top center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  .team {
    .image-gallery {
      margin: 0 0 20px;

      .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: 20px;

        .up(@md;{bottom: 40px;});
      }

      .up(@md;{margin-bottom: 40px;});

      .up(@lg;{margin-bottom: 80px;});
    }

    .swiper-slide {
      .image {
        position: absolute;
        h6 {
          .up(@md;{bottom: 90px;});
        }
      }

      &::after {
        padding-top: 65.71%;
      }
    }
  }
</style>
