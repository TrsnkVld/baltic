<template>
  <section class="ourServices">
    <div class="container-fluid">
      <div class="wrap">
        <h2 class="infoSection__title h1">{{ title }}</h2>
        <b-row class="servicesList" tag="ul">
          <b-col class="singleService" cols="12" md="6" tag="li" v-for="({id, code, img, describe, title}) in services" :key="id" xl="4">
            <b-link :to="{path: `services/${code}`}" class="singleService__title">
              <i :style="`background-image:url('${img}')`" class="icon"></i>
              <h3>{{ title }}</h3>
            </b-link>
            <h5 class="singleService__desc">{{ describe }}</h5>
          </b-col>
        </b-row>
      </div>
    </div>
  </section>
</template>

<script>
    import singleService from '../common/single-service';

    export default {
        name: 'ourServicesSection',
        components: {
            singleService,
        },
        data: () => ({}),

        computed: {
            list() {
                return this.$store.getters.page && this.$store.getters.page.Home && this.$store.getters.page.Home.lastServices;
            },
            services() {
                return this.list && this.list.list;
            },
            title() {
                return this.list && this.list.title;
            }
        },
    }
</script>

<style lang="less">
  @import '../../less/variables.less';

  .ourServices {
    margin-bottom: 20px;

    .wrap {
      padding: 30px 20px 15px;
      background: @white;

      .up(@md; {
        padding: 30px 15px;
      });

      .up(@lg; {
        padding: 60px 35px 10px;
      });
    }

    .up(@md; {
      margin-bottom: 40px;
    });

    .up(@lg; {
      margin-bottom: 80px;
    });
  }
</style>
