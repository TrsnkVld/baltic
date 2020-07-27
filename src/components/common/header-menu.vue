<template>
  <div class="header__menu">
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <b-nav class="menuLinks">
            <b-nav-text :key="`menu-item-${index}`" class="menuLinks__item col-12 col-sm-6 col-lg-4" v-for="({code, name}, index) in menuList">
              <b-link :to="{name: code}" @click.native="onItemClick">{{ name }}</b-link>
            </b-nav-text>
          </b-nav>
        </b-col>
        <b-col cols="12">
          <div class="headerInfo">
            <a :href="`tel:${phone}`" class="headerInfo__item">
              <i class="icon icon-phone"></i>
              <div><span>{{phone}}</span></div>
            </a>
            <div class="headerInfo__item">
              <i class="icon icon-calendar"></i>
              <div><span>{{workTime}}</span></div>
            </div>
            <div class="headerInfo__item align-items-start order-sm-0">
              <i class="icon icon-map"></i>
              <div><span>{{address}}</span></div>
            </div>
            <span class="headerInfo__item">
                <a :href="siteLink.link">{{siteLink.text}}</a>
            </span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    export default {
        name: 'headerMenu',
        components: {},
        data() {
            return {}
        },

        computed: {
            siteLink() {
                //TODO ВРеменный хардкод!!!!
                return !window.location.href.includes('baltic-shipping-en')
                    ? {
                        link: 'http://baltic-shipping-en.vt.spider.playnext.net:40088/',
                        text: 'Switch to English',
                    }
                    : {
                        link: 'http://baltic-shipping.vt.spider.playnext.net:40088/',
                        text: 'Switch to Russian',
                    }
            },

            common() {
                return this.$store.getters.common.contacts;
            },

            menuList() {
                return this.$store.getters.common && this.$store.getters.common.menuList;
            },

            phone() {
                return this.common.phone;
            },

            email() {
                return this.common.email;
            },

            address() {
                return this.common.address;
            },

            copyright() {
                return this.common.copyright;
            },

            workTime() {
                return this.common.workTime;
            },

            year() {
                return new Date().getFullYear();
            }
        },

        methods: {
            onItemClick() {
                this.$emit("itemClick");
            }
        }

    }
</script>

<style lang="less">
  @import '../../less/variables.less';

  .header__menu {
    background-color: @colorDarkBg;
    color: #ffffff;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    padding-top: 80px;
    display: flex;

    .container {
      padding-top: 0;
      padding-bottom: 0;
    }

    .container-fluid {
      height: 100%;
      overflow: auto;
      //padding-top: 20px;
      padding-bottom: 20px;
      padding-top: 20px;

      & > .row {
        .up(@md; {
          margin: auto;
        });
      }

      .up(@md; {
        display: flex;
        //justify-content: center;
        padding-top: 0;
        padding-bottom: 0;
        flex-flow: column;
        max-height: 915px;
        margin: auto;
      });

      .up(@lg; {
        padding-top: 0;
      });
    }

    &-enter-active, &-leave-active {
      transition: .5s ease-in-out;
      opacity: 1;
    }

    &-enter, &-leave-to {
      transition: .5s ease-in-out;
      opacity: 0;
    }

    .up(@md; {
      padding-top: 220px;
      //min-height: 1000px;
    });

    .up(@lg; {
      //min-height: 930px;
    });

    .up(@menu; {
      padding-top: 180px;
      display: none;
    });
  }

  .menuLinks {

    &__item {
      font-size: 23px;
      line-height: 28px;
      font-weight: 300;
      margin-bottom: 28px;
      padding: 0;

      a {

        position: relative;
        display: inline-block;

        &::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background-color: @white;
          position: absolute;
          bottom: -8px;
          left: 0;
          transition: .2s;
        }

        &:hover {
          &::after {
            width: 100%;
          }
        }
      }

      .up(@md; {
        font-size: 35px;
        line-height: 40px;
        margin-bottom: 40px;
      });

      .up(@lg; {
        font-size: 40px;
        line-height: 45px;
      });
    }

    .up(@lg; {
      //padding-left: 60px;
      margin-right: -50px;
    });
  }

  a.headerInfo__item {
    span {
      position: relative;

      &::after {
        content: "";
        display: block;
        width: 0;
        height: 1px;
        background-color: @white;
        position: absolute;
        bottom: -5px;
        left: 0;
        transition: .2s;

        .up(@md; {
          //bottom: 10px;
        });
      }

      
    }

    &:hover {
      span {
        &::after {
          width: 100%;
        }
      }
    }
  }

  .headerInfo {
    height: 100%;
    display: flex;
    flex-flow: wrap;
    padding-top: 15px;

    &__item {
      display: flex;
      align-items: flex-start;
      font-weight: 300;
      font-size: 15px;
      line-height: 20px;
      width: 100%;
      margin-bottom: 20px;

      .icon {
        height: 40px;
        width: 40px;
        flex-shrink: 0;
        margin-right: 5%;

        .up(@md; {
          height: 60px;
          width: 60px;
          margin-right: 30px;
        });
      }

      div {
        min-height: 40px;
        display: flex;
        align-items: center;

        .up(@md; {
          min-height: 60px;
        });
      }

      &:first-child {
        span {
        }
      }

      &:last-child {
        margin-top: 20px;
        width: 100%;
        margin-bottom: 0;
        padding-bottom: 40px;

        .icon {
          display: none;

          .up(@lg; {
            display: block;
          });
        }

        a {
          position: relative;

          &::after {
            content: "";
            display: block;
            width: 0;
            height: 1px;
            background-color: @white;
            position: absolute;
            bottom: -5px;
            left: 0;
            -webkit-transition: 0.2s;
            transition: 0.2s;
          }

          &:hover {
            &::after {
              width: 100%;
            }
          }
        }

        .up(@md; {
          padding-bottom: 60px;
        });

        .up(@lg; {
          width: auto;
          a {
            margin: 0 auto;
          }
        });
      }

      .up(@md; {
        font-size: 20px;
        line-height: 25px;
        width: 50%;
        margin-bottom: 40px;
        padding-right: 20px;
      });

      .up(@lg; {
        margin-top: 0;
        padding: 10px 0px;
        width: 100%;
        padding-right: 0;
        margin-bottom: 20px;
        width: 310px;
        width: 33.33333%;
        padding-right: 30px;

        &:last-child {
          margin-top: 30px;
          padding-right: 0;
        }
      });

      .up(@xl; {
        margin-bottom: 20px;
        &:last-child {
          margin-top: 90px;
        }
      });
    }

    .up(@md; {
      padding-top: 40px;
    });

    .up(@lg; {
      padding-top: 0;
      justify-content: space-between;
      padding: 60px 0 0;
      margin-right: -50px;
    });

    .up(@xl; {
      //padding-left: 70px;
    });
  }
</style>
