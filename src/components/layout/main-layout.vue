<template>
  <div id="main-layout">
    <header-main :internal="isInternalPage" />
    <transition name="route" appear mode="out-in">
      <router-view/>
    </transition>
    <footer-main :internal="isInternalPage"  />
  </div>
</template>

<script>
    import headerMain from './header-main.vue';
    import footerMain from './footer-main';

    export default {
        name: 'main-layout',
        components: {
            headerMain,
            footerMain,
        },
        data: () => ({
            className: "",
            pageTitle: "",
            pageDesc: "",
            settings: {
                maxScrollbarLength: 150
            }
        }),
        computed: {
            isInternalPage() {
                return this.$route.name !== "home";
            },
        }
    }
</script>

<style lang="less">
  @import '../../less/variables.less';
  #app {
    position: relative;
  }

  #layout {
    position: relative;
  }

  .scroll-area {
    position: relative;
    margin: auto;
    width: 100%;

    .up(@lg; {
      height: 100vh;
    });
  }

  .wrapper {
    &-enter-active, &-leave-active {
      transition: .5s ease-in-out;
      opacity: 1;
    }

    &-enter, &-leave-to {
      transition: .5s ease-in-out;
      opacity: 0;
    }
  }

  .t-router {

    &-enter-active,
    &-leave-active {
      transition: .5s ease-in-out;
      opacity: 1;
    }

    &-enter,
    &-leave-to {
      transition: .5s ease-in-out;
      opacity: 0;
    }
  }

  .start {
    animation: showApp 2s ease-in;
  }

  @keyframes showApp {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>
