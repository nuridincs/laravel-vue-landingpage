<template>
  <div class="p-3">
    <h3 class="text-center fn-m-light">Mendukung Penuh Framework Laravel</h3>
    <div class="row p-3">
      <div class="col-7">
        <div class="h4 fn-rbt-thin">Tak perlu menggunakan dedicated server ataupun VPS yang mahal. Layanan PHP hosting murah kami mendukung penuh framework favorit Anda</div>
        <div v-for="({value}, index) in item" :key="index" class="fn-rbt-light">
          <div class="py-2">
            <span>
              <i class="fa fa-check-circle text-green"></i>
            </span>
            <span v-html="value" />
          </div>
        </div>
        <div class="py-4">
          <small class="fn-rbt-light">Nb. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis</small>
        </div>
        <div>
          <a href="#" class="btn btn-primary btn-hosting w-50 fn-m-regular"><b>Pilih Hosting Anda</b></a>
        </div>
      </div>
      <div class="col">
        <img src="assets/svg/illustration banner support laravel hosting.svg" alt="">
      </div>
    </div>
    <div class="bottom-line" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: [
        {
          value: 'Install laravel <b>1 klik</b> dengan Softaculous Installer'
        },
        {
          value: 'Mendukung extension <b>PHP MCrypt, phar, mbstring, json, </b>dan <b>fileinfo</b>'
        },
        {
          value: 'Tersedia <b>Composer</b> dan <b>SSH</b> untuk menginstall packages pilihan Anda'
        },
      ]
    }
  }
}
</script>