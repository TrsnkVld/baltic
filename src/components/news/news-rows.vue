<template>
  <section class="newsSection">
    <div class="container-fluid">
      <div class="wrap">
        <h2 class="h1" v-if="title">{{ $t('homePage.newsTitle') }}</h2>
        <b-row>
          <single-article
            :articleDate="item.date"
            :articleImg="item.img || require(`@/assets/img/contacts.jpg`)"
            :articleTitle="item.title"
            :id="item.id"
            :key="`item-index-${index}`"
            data-aos="fade-in"
            v-for="(item, index) in items"
          ></single-article>
        </b-row>
        <b-button @click="$router.push({ name:'news' })" v-if="this.$route.name == 'home'">{{$t('homePage.newsBtnText')}}</b-button>
      </div>
    </div>
  </section>
</template>

<script>
    import singleArticle from '../common/single-article';

    export default {
        name: 'news-row',
        components: {
            singleArticle,
        },

        props: {
            title: {
                type: Boolean,
                default: true,
            },

            items: {
                default() {
                    return  [
                        {
                            title: 'Балтик Шиппинг приняла участие в 27-ой Международной выставке продуктов питания',
                            date: '12.07.2019',
                        }
                    ];
                },
            }
        },

        data: () => ({}),

        methods: {
            setImage(src) {
                return src;
            }
        },

        mounted() {
        }
    }
</script>

<style lang="less">
  @import '../../less/variables.less';

  .newsSection {
    margin-bottom: 15px;

    .wrap {
      padding: 15px 20px;

      .row {
        margin: 0 -20px;

        .up(@md; {
          margin: 0 -30px;
        });

        .up(@lg; {
          margin: 0 -35px;
        });
      }

      .btn {
        background-color: @softblue;
        color: @active;
        font-weight: normal;

        &:hover {
          background-color: @btnHover;
          color: @white;
        }

        .up(@md; {
          min-width: 370px;
        });
      }

      .up(@md; {
        padding: 35px 60px;
      });

      .up(@lg; {
        padding: 35px 70px;
      });
    }

    h2 {
      padding: 15px 0;

      .up(@lg; {
        padding: 30px 0;
      });
    }

    .btn {
      margin: 15px auto;

      .up(@md; {
        margin: 15px auto 0;
      });

      .up(@lg; {
        margin: 30px auto;
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
