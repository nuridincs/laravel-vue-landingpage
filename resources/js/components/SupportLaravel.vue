<template>
  <div class="p-3">
    <h3 class="text-center">Mendukung Penuh Framework Laravel</h3>
    <div class="row p-3">
      <div class="col">
        <div>Tak perlu menggunakan dedicated server ataupun VPS yang mahal. Layanan PHP hosting murah kami mendukung penuh framework favorit Anda</div>
        <div v-for="(data, index) in 5" :key="index">
          <div>
            <span>
              <i class="fa fa-check-circle text-green"></i>
            </span>
            <span>Install laravel <b>1 klik</b></span>
          </div>
        </div>
        <div class="py-4">
          <small>Nb. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis</small>
        </div>
        <div>
          <a href="#" class="btn btn-primary btn-hosting w-50"><b>Pilih Hosting Anda</b></a>
        </div>
      </div>
      <div class="col">
        <img src="assets/svg/illustration banner support laravel hosting.svg" alt="">
      </div>
    </div>
    <div class="bottom-line" />
  </div>
</template>