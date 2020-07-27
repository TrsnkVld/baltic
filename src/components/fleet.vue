<template>
  <main class="fleet">
    <header-title :headerTitle="title" />
    <b-container fluid>
      <b-row>
        <b-col cols="12" xl="6">
          <fleet-list :listItems="advantages" data-aos="fade-in" />
        </b-col>
        <b-col cols="12" xl="6">
          <table-comp
            :shipsData="tableContent"
            :tableHeaders="tableHeaders"
            data-aos="fade-left"
            class="overflow-table"
          />
        </b-col>
      </b-row>
    </b-container>
    <background-image />
  </main>
</template>

<script>
  import tableComp from "./fleet/table-comp";
  import fleetList from "./fleet/fleet-list";
  import headerTitle from "./common/header-title";
  import backgroundImage from "./common/background-image";

  export default {
    name: "fleet",
    components: {
      tableComp,
      fleetList,
      headerTitle,
      backgroundImage,
    },
    data: () => ({
      menuOpened: false,
      headerTitle: "Наш флот",
      list: [
        "Все суда специально спроектированы для перевозки скоропортящихся грузов;",
        "Конструкция судов позволяет перевозить грузы как навалом, так и на паллетах;",
        "Каждое судно оборудовано современной техникой, трюмы оснащены системами контроля и поддержания необходимых температурных режимов, что дает возможность перевозить несколько видов грузов в течение одного рейса;",
        "Суда приспособлены для перевозки контейнеров и рефконтейнеров на верхней палубе;",
        "Многие суда имеют ледовый класс, что позволяет осуществлять бесперебойные заходы в порт Санкт-Петербурга в течение всего года;",
        "Трюмы имеют необходимую конструкцию для безопасного крепления широкого спектра генеральных грузов;",
        "Все экипажи имеют многолетний опыт работы на судах рефрижераторного типа.",
      ],
      ships: [
        {
          id: 1,
          name: "Crown Garnet",
          foots: "487 526",
          deck: "2 123",
          launched: "1996",
          plugs: "70",
          cranes: "2 x 35t + 2 x 8t",
        },
        {
          id: 2,
          name: "Crown Jade",
          foots: "341 593",
          deck: "6 123",
          launched: "1993",
          plugs: "70",
          cranes: "2 x 35t + 2 x 8t",
        },
        {
          id: 3,
          name: "Crown Opal",
          foots: "547 557",
          deck: "2 483",
          launched: "1991",
          plugs: "65",
          cranes: "3 x 35t + 1 x 8t",
        },
        {
          id: 4,
          name: "Crown Garnet",
          foots: "487 526",
          deck: "2 123",
          launched: "1996",
          plugs: "70",
          cranes: "2 x 35t + 2 x 8t",
        },
        {
          id: 5,
          name: "Crown Jade",
          foots: "341 593",
          deck: "6 123",
          launched: "1993",
          plugs: "70",
          cranes: "2 x 35t + 2 x 8t",
        },
        {
          id: 6,
          name: "Crown Opal",
          foots: "547 557",
          deck: "2 483",
          launched: "1991",
          plugs: "65",
          cranes: "3 x 35t + 1 x 8t",
        },
        {
          id: 7,
          name: "Crown Garnet",
          foots: "487 526",
          deck: "2 123",
          launched: "1996",
          plugs: "70",
          cranes: "2 x 35t + 2 x 8t",
        },
      ],
    }),

    computed: {
      pageData() {
        return this.$store.getters.page && this.$store.getters.page.Fleet;
      },

      tableHeaders() {
        if (!this.pageData) return null;
        return this.pageData.tableHeader;
      },

      advantages() {
        if (!this.pageData) return this.list;
        return this.pageData.advantages;
      },

      tableContent() {
        if (!this.pageData) return this.ships;
        return this.pageData.tableContent;
      },

      title() {
        if (!this.pageData) return this.headerTitle;
        return this.pageData.title;
      },
    },
    methods: {
      onItemClick() {
        this.$emit("itemClick");
      },
    },

    mounted() {
      // console.log(this.pageData);
    },
  };
</script>

<style lang="less">
  @import "../less/variables.less";

  main {
    &.fleet .background-image {
      background-color: #ffffff;
      background-image: url("../assets/img/fleet-bg.jpg");
    }

    .overflow-table {
      padding-bottom: 0;
      .up(@lg;{max-height: 525px; overflow: auto;});
    }

    &.fleet {
       margin-bottom: 20px; 
      .up(@md; {margin-bottom: 80px;});
      // .up(@xl;{margin-bottom: 80px;}); 

      .fleetList {
        .up(@xl;{padding-bottom: 0});
      }
    }

    .fleetList {
      // .up(@md;{padding-bottom: 0px;});
    }
  }
</style>
