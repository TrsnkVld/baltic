<template>
  <div class="department">
    <h6>{{ data.NAME }}</h6>
    <h5>
      <a :href="`mailto:${data.EMAIL}`">{{ data.EMAIL }}</a>
    </h5>
    <b-row no-gutters>
      <b-col
        class="person-wrap"
        cols="6"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        v-for="(item, index) in workers"
        :key="index"
      >
        <div class="person-card">
          <div
            class="person-card__img"
            :style="`background-image: url('${item.image}')`"
          />
          <h3>{{ item.NAME }}</h3>
          <h5>{{ item.POST }}</h5>
          <h5 v-if="true" class="person-card__email">
            <a :href="`mailto:${item.EMAIL}`"
              >{{ item.EMAIL }}</a
            >
          </h5>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "department-row",
    data: () => ({
      img: require("@/assets/img/person.jpg"),
    }),
    props: ["data"],
    computed: {
      workers() {
        if (!this.data.specialist) return null;
        return this.data.specialist;
      },
    },
  };
</script>

<style lang="less">
  @import "../../less/variables.less";

  .department {
    color: @white;

    & > h6 {
      text-align: center;
      margin-bottom: 20px;
      margin-top: 40px;

      .up(@lg;{margin-top: 40px;});
    }

    & > h5 {
      text-align: center;
      margin-bottom: 40px;

      a {
        &:hover {
          color: @white;
          text-decoration: underline;
        }
      }

      .up(@lg;{margin-bottom: 80px;});
    }

    .person-card {
      margin-bottom: 40px;

      &__img {
        background-size: cover;
        margin-bottom: 20px;

        &::after {
          content: "";
          display: block;
          width: 100%;
          padding-bottom: 139.16666666666669%;
        }

        .up(@md;{margin-bottom: 40px;});
      }

      &__email {
        margin-top: 20px;
        a {
          display: inline-block;
          border-bottom: 1px solid transparent;
          transition: 0.3s linear border-color;
          &:hover {
            color: #fff;
            border-bottom-color: #fff;
          }
        }
      }

      h3 {
        margin-bottom: 20px;

        .up(@md;{margin-bottom: 25px;});
      }

      .up(@md;{margin-bottom: 40px;});

      .up(@lg;{margin-bottom: 80px;});
    }

    .row {
      margin: 0 -10px;

      .person-wrap {
        padding: 0 10px;
      }
    }
  }
</style>
