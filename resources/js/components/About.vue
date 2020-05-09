<template>
  <section>
    <div class="p-3">
      <div class="row">
        <div class="col">
          <div>PHP HOSTING</div>
          <div>Cepat, handal, penuh dengan modul PHP yang Anda Butuhkan</div>
          <div v-for="(data, index) in 5" :key="index">
            <div>
              <span>c</span>
              <span>Solusi PHP Untuk perfoma query yang lebih cepat</span>
            </div>
          </div>
        </div>
        <div class="col">
          <img src="assets/svg/illustration banner PHP hosting-01.svg" alt="">
        </div>
      </div>
    </div>
    <div class="bottom-line" />
  </section>
</template>