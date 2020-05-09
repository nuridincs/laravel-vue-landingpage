<template>
  <div class="py-5">
    <div class="text-center">
      <h3 class="fn-m-bold"><b>Paket Hosting Singapura yang Tepat</b></h3>
      <div class="fn-hairline"><h3>Diskon 40% Domain dan SSL Gratis untuk Anda</h3></div>
    </div>
    <div class="py-5">
      <div v-for="(data, index) in listPrice" :key="index">
        <div class="columns">
          <ul class="price">
            <li class="header">{{ data.type }}</li>
            <li>
              <small class="fn-m-light"><del>Rp. {{ data.gimmick_price }}</del></small>
              <div>
                <span class="v-top fn-m-light">Rp.</span>
                <span class="h1 text-bold fn-m-bold">{{ data.price }}</span>
                <span class="v-top fn-m-light">.{{ data.price_last }}/ bln</span>
              </div>
            </li>
            <li class="fn-rbt-light"><b>{{ data.total_user }}</b> Pengguna Terdaftar</li>
            <li>
              <span class="fn-rbt-light" v-html="data.spesification.detail" />
              <div class="p-3 price-btn">
                <a href="#" class="btn btn-outline-dark btn-block br-2">
                  <span v-if="data.diskon > 0">Diskon {{ data.diskon }} %</span>
                  <span v-else class="fn-m-regular">Pilih Sekarang</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Price from '../../static/Price.json';

export default {
  data() {
    return {
      listPrice: Price
    }
  }
}
</script>

<style lang="scss">
.columns {
  float: left;
  width: 25%;
  // padding: 8px;
}

.price-btn {
  a {
    &:hover {
      background-color: #168fee;
      border: 2px solid #168fee;
    }
  }
}

.price {
  list-style-type: none;
  border: 1px solid #eee;
  margin: 0;
  padding: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 5px;
}

.price:hover {
  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);
  border: 1px solid #168fee;
}

.price .header {
  // background-color: #111;
  color: black;
  font-size: 25px;
  font-weight: bold;
}

.price li {
  border-bottom: 1px solid #eee;
  padding: 10px;
  text-align: center;
}

.price .grey {
  background-color: #eee;
  font-size: 20px;
}

.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
}

@media only screen and (max-width: 600px) {
  .columns {
    width: 100%;
  }
}
</style>