<template>
  <section>
    <div class="p-3">
      <div class="row">
        <div class="col-sm">
          <h2 class="fn-m-bold"><b>PHP HOSTING</b></h2>
          <div class="mb-3 sub-title">Cepat, handal, penuh dengan modul PHP yang Anda Butuhkan</div>
          <div v-for="({value}, index) in item" :key="index" class="py-2">
            <div>
              <span>
                <i class="fa fa-check-circle fa-lg text-green"></i>
              </span>
              <span class="fn-hairline">{{ value }}</span>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <img src="assets/svg/illustration banner PHP hosting-01.svg" alt="">
        </div>
      </div>
    </div>
    <div class="bottom-line" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      item: [
        {
          value: 'Solusi PHP Untuk perfoma query yang lebih cepat'
        },
        {
          value: 'Konsumsi memori yang lebih rendah'
        },
        {
          value: 'Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 5.7, dan PHP 7'
        },
        {
          value: 'Fitur enkripsi IonCube dan Zend Guard Loaders'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-title {
  font-family: 'Montserrat-Hairline';
  font-size: 30px;
  font-weight: bold;
}
</style>