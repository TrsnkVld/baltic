<template>
  <section class="infoSection">
    <div class="container-fluid">
      <div class="wrap wrap-dark">
        <div class="row">
          <h2 class="col-12 infoSection__title h1">{{ $t('homePage.partners') }}</h2>
          <div class="col-12 infoSection__content infoSection__content-logos">
            <div class="row">
              <div class="col-6 col-lg-4 col-xl text-center partnerLogo">
                <img src="../../assets/img/partners_05-min.png" alt="partner">
              </div>
              <div class="col-6 col-lg-4 col-xl text-center partnerLogo">
                <img src="../../assets/img/partners_04-min.png" alt="partner">
              </div>
              <div class="col-6 col-lg-4 col-xl text-center partnerLogo">
                <img src="../../assets/img/partners_02-min.png" alt="partner">
              </div>
              <div class="col-6 col-lg-4 col-xl text-center partnerLogo">
                <img src="../../assets/img/partners_03-min.png" alt="partner">
              </div>
              <div class="col-6 col-lg-4 col-xl text-center partnerLogo">
                <img src="../../assets/img/partners_01-min.png" alt="partner">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'partnersSection'
}
</script>

<style lang="less">
  .partnerLogo {
    margin: 3% 0 6%;

    img {
      max-width: 100%;
      max-height: 60px;
    }
  }
</style>
