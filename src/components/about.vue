<template>
  <main class="about">
    <header-title
      :headerTitle="title || headerTitle"
      :headerDesc="describe || headerDesc"
    />
    <about-info />
    <b-container fluid>
      <template v-for="(item, index) in information">
        <b-row
          v-if="index !== 2"
          :key="index"
          :class="{ 'blue order': index % 2 !== 0 }"
          class="textRow fade-in"
          :data-aos="anim(index)"
          :tag="index !== 2 ? 'div' : 'a'"
        >
          <b-col class="textRow__img" cols="12" :lg="'5'">
            <img :src="item.src" alt="image" />
          </b-col>
          <b-col class="textRow__content" cols="12" :lg="'7'">
            <div v-html="item.content"></div>
          </b-col>
        </b-row>
        <router-link
				to="/management"
          :key="index"
          v-else
          class="row textRow fade-in"
          :class="{ 'blue order': index % 2 !== 0 }"
        >
          <b-col class="textRow__img" cols="12" :lg="'5'">
            <img :src="item.src" alt="image" />
          </b-col>
          <b-col class="textRow__content" cols="12" :lg="'7'">
            <div v-html="item.content"></div>
          </b-col>
        </router-link>
      </template>

      <video
        id="video"
        controls
        data-aos="fade-left"
        preload
        poster="../assets/video/preview.jpg"
      >
        <source
          src="../assets/video/Loading_Apples_in_Nelson.mp4"
          type="video/mp4"
        />
      </video>
    </b-container>
    <background-image />
  </main>
</template>

<script>
  import headerTitle from "./common/header-title";
  import backgroundImage from "./common/background-image";
  import imgTxtRow from "./common/img-txt-row";
  import aboutInfo from "./about/about-info";
  import mapSection from "./home/map-section";

  export default {
    name: "about",
    components: {
      headerTitle,
      backgroundImage,
      imgTxtRow,
      aboutInfo,
      mapSection,
    },
    data: () => ({
      headerTitle: "О компании",
      headerDesc:
        "Высокий профессионализм и опыт эффективной работы на рынке рефрижераторных перевозок",
      textData: [
        {
          id: 1,
          img: [
            {
              id: 1,
              src: "block_img_1.png",
            },
          ],
          title: "Мы несем ответственность перед нашими клиентами",
          text: [
            "Нас отличают две вещи: качественная продукция и обслуживание клиентов мирового уровня. Качество является нашей торговой маркой. Мы будем постоянно стремиться понимать ожидания клиентов и соответствовать этим ожиданиям как быстро, так и с пользой.",
            "Наша приверженность качеству должна быть очевидна в каждом продукте и услуге, которые мы продаем. Обслуживание наших клиентов, как внутренних, так и внешних, должно быть точным, своевременным и дружественным.",
          ],
        },
        {
          id: 2,
          img: [
            {
              id: 4,
              src: "block_img_4.png",
            },
          ],
          title: "Наш единственный большой актив — наша база сотрудников",
          text: [
            "Мы уважаем достоинство и признаем заслуги каждого сотрудника. Мы обеспечим компетентное управление, чтобы у наших сотрудников была возможность каждый день достигать совершенства в безопасной и здоровой рабочей среде. Мы предоставим равные возможности для трудоустройства, развития а также продвижение для квалифицированных. Мы ожидаем самого высокого уровня личного поведения от всего нашего персонала, независимо от должности.",
          ],
        },
        {
          id: 3,
          img: [
            {
              id: 2,
              src: "block_img_2.png",
            },
          ],
          title:
            "Мы несем ответственность перед сообществами, в которых мы живем и работаем.",
          text: [
            "Мы будем хорошими гражданами, поддерживая добрые дела и благотворительность. Мы сознательно не поддерживаем какую-либо государственную или частную организацию, которая поддерживает дискриминационную политику или практику. Мы поощряем гражданские улучшения и улучшение здоровья, безопасности а также образование.",
          ],
        },
        {
          id: 4,
          img: [
            {
              id: 3,
              src: "block_img_3.png",
            },
          ],
          title: "Мы несем ответственность перед нашими акционерами",
          text: [
            "Наш бизнес должен приносить прибыль. Рост имеет основополагающее значение для нашего успеха. Мы будем продолжать расширять наши продукты и услуги, чтобы повысить ценность для будущих акционеров. Когда мы действуем в соответствии с этими принципами, акционеры должны получить справедливую прибыль.",
          ],
        },
      ],
    }),

    computed: {
      pageData() {
        return this.$store.getters.page.About;
      },

      describe() {
        if (!this.pageData) return null;
        return this.pageData.describe.TEXT;
      },

      title() {
        if (!this.pageData) return null;
        return this.pageData.title;
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

      console.log(this.information);
    },
  };
</script>

<style lang="less">
  @import "../less/variables.less";

  main {
    &.about .background-image {
      //background-image: url('../assets/img/mission_bg.jpg');
      background-color: #0045a0;
    }
  }

  .about {
    & > .container-fluid {
      display: flex;
      flex-flow: column;

      .textRow {
        &:first-of-type {
          // order: -1;
        }
      }

      a.textRow {
        &:hover,
        &:focus {
          color: inherit;
        }
      }
    }

    video {
      width: 100%;
      margin-bottom: 20px;
      outline: none;

      .up(@md;{margin-bottom: 40px;});

      .up(@lg;{margin-bottom: 80px;});
    }
  }
</style>
