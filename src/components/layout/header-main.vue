<template>
  <header :class="{menuOpened, white:internal}" class="header">
    <b-container fluid>
      <b-row align-h="between">
        <b-col cols="auto">
          <router-link
            :class="{ inactive:!internal }"
            :to="{ name: 'home' }"
            @click.native="menuOpened=false"
            class="header__logo"
          />
        </b-col>
        <b-col cols="auto">
          <b-nav class="headerLinks">
            <b-nav-text v-for="({code, name}, index) in menuList" :key="`menu-list-item-${index}`" class="headerLinks__item">
              <b-link :to="{name: code}">
                {{ name }}
              </b-link>
            </b-nav-text>
          </b-nav>
        </b-col>
        <b-col align-self="center" cols="auto">
          <button :class="{ 'is-active': menuOpened }" @click="menuOpened = !menuOpened" class="hamburger hamburger--squeeze" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
          </button>
          <!--				<b-link  :to="{name: 'contacts'}">ENG</b-link>-->
          <a :href="siteLink.link" class="headerLinks__item lang">{{siteLink.text}}</a>
        </b-col>
      </b-row>
    </b-container>
    <transition name="header__menu">
      <header-menu @itemClick="menuOpened=false" v-if="menuOpened"/>
    </transition>
  </header>
</template>

<script>
    import headerMenu from '@/components/common/header-menu'

    export default {
        name: 'headerMain',
        components: {
            headerMenu,
        },
        data() {
            return {
                menuOpened: false,
                inactive: false
            }
        },
        props: [
            'headerTitle',
            'headerDesc',
            'internal'
        ],
        mounted() {
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);
                this.getWindowWidth();
            })
        },
        methods: {
            getWindowWidth(event) {
                if (document.documentElement.clientWidth > 1399) {
                    this.menuOpened = false;
                }
            },
        },

        computed: {
            siteLink() {
                //TODO ВРеменный хардкод!!!!
                return !window.location.href.includes('en.baltic-shipping')
                    ? {
                        link: 'http://en.baltic-shipping.com/',
                        text: 'ENG',
                    }
                    : {
                        link: 'http://baltic-shipping.com/',
                        text: 'RUS',
                    }
            },

            menuList() {
                return this.$store.getters.common && this.$store.getters.common.menuList;
            }
        },
        watch: {
            menuOpened() {

                if (this.menuOpened) {
                    document.documentElement.classList.add('locked');
                    return;
                }
                //document.documentElement.classList.remove('locked');
                setTimeout(() => document.documentElement.classList.remove('locked'), 500);
                //document.documentElement.classList.remove('locked');
            }
        }
    }
</script>

<style lang="less">
  @import '../../less/variables.less';

  .hamburger-inner,
  .hamburger-inner:after,
  .hamburger-inner:before {
    background-color: @colorDarkBg;
    border-radius: 0;
    height: 2px;
    width: 30px;

    .up(@md; {
      width: 40px;
      height: 3px;
    });
  }

  .hamburger {
    padding: 0;
    z-index: 20;
    position: relative;
    outline: none;

    &-box {
      display: block;
      height: 30px;
      width: 30px;

      .up(@md; {
        height: 40px;
        width: 40px;
      });
    }

    &-inner {
      &::after {
        bottom: -13px;

        .up(@md; {
          bottom: -18px;
        });
      }

      &::before {
        top: -13px;

        .up(@md; {
          top: -18px;
        });
      }
    }

    &.is-active {

      .hamburger-inner,
      .hamburger-inner:after,
      .hamburger-inner:before {
        //width: 50px;
        background-color: #ffffff;
      }

      &:hover {
        opacity: 1;
      }
    }

    &:focus {
      outline: none;
    }

    &:hover {
      opacity: 1;
    }

    .up(@menu; {
      display: none;
    });
  }

  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
    user-select: none;

    & > .container-fluid {
      padding-top: 20px;

      & > .row {
        align-items: center;
      }

      .up(@md; {
        padding-top: 80px;
      });
    }

    &Links {
      display: none;

      &__item {
        font-size: 20px;
        line-height: 25px;
        color: @active;
        margin-right: 50px;


        a {
          &.router-link-active {
            cursor: default;

            &::after {
              width: 100%;
              opacity: 1 !important;
            }
          }
        }

        &.lang,
        a {

          position: relative;

          &::after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background-color: @active;
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

        &.lang {
          display: none;
          margin-right: 0;

          &:hover {
            color: @active;
          }

          .up(@menu; {
            display: block;
          });
        }

        &:nth-last-child(2),
        &:nth-last-child(3) {
          display: none;

          .up(@menu; {
            display: block;
          });
        }

        .up(@xl; {
          margin-right: 60px;
        });
      }

      .up(@lg; {
        display: flex;
      });
    }

    &__logo {
      display: block;
      width: 122px;
      height: 40px;
      background-image: url('../../assets/icons/logo.svg');
      background-size: cover;
      background-repeat: no-repeat;
      //transition: .4s;

      &.inactive {
        cursor: default;
      }

      .up(@md; {
        width: 186px;
        height: 60px;
      });
    }

    &.menuOpened {


      .header__logo {
        background-image: url('../../assets/icons/logo_white.svg');
      }
    }

    &.white {
      background-position: center;
      background-size: cover;

      .header__logo {
        background-image: url('../../assets/icons/logo_white.svg');
      }

      .headerLinks {
        &__item {
          color: @white;

          &.lang,
          a {
            &::after {
              background-color: @white;
              opacity: 0;
                transition: width .2s, opacity 0s .2s;
            }

            &:hover {
              &::after {
                background-color: @white;
                opacity: 1;
              transition: width .2s;
              }
            }
          }
        }
      }

      .hamburger-inner,
      .hamburger-inner:after,
      .hamburger-inner:before {
        background-color: #ffffff;
      }

      /*
            &>.container-fluid {
                .up(@md; {
            padding-bottom: 30px;
          });

                .up(@lg; {
            padding-bottom: 60px;
          });
        }
      */
    }

    .header__logo,
    .burger {
      position: relative;
      z-index: 20;
    }
  }
</style>
