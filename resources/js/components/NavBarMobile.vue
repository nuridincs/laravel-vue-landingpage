<template>
  <div>
    <div class="wrapper-header-bg">
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="assets/images/logo-mobile.svg" class="img-fluid w-25" alt="logo-mobile">
          </div>
          <div class="col text-right">
            <button type="button" class="btn btn-default" @click="toggle"><i class="fa fa-bars"></i></button>
          </div>
        </div>
      </div>
    </div>
    <transition name="smooth">
      <div ref="collapse" v-show="show" class="bg-collapse">
        <div class="container">
          <div class="row fn-rbt-thin text-grey-light">
            <div class="col">
              <span class="mr-2">
                <i class="fa fa-phone"></i>
              </span>
              02745305505
            </div>
            <div class="col">
              <span class="mr-2">
                <i class="fa fa-comments"></i>
              </span>
              Live Chat
            </div>
          </div>
          <ul class="navbar-nav">
            <li v-for="(menu, index) in menus" :key="index" class="nav-item">
              <a class="nav-link fn-rbt-light" href="#">{{ menu.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      menus: [
        {
          name: 'Hosting'
        },
        {
          name: 'Domain'
        },
        {
          name: 'Server'
        },
        {
          name: 'Website'
        },
        {
          name: 'Afiliasi'
        },
        {
          name: 'Promo'
        },
        {
          name: 'Pembayaran'
        },
        {
          name: 'Review'
        },
        {
          name: 'Kontak'
        },
        {
          name: 'Blog'
        }
      ]
    }
  },

  methods: {
    toggle() {
      this.show = !this.show;
    },
  }
}
</script>

<style lang="scss">
.wrapper-header-bg {
  background-color: white;
  margin: 0px -1rem;
  padding: 10px;
  border-bottom: 2px solid #cecece;
}

.bg-collapse {
  background-color: #4d4d4d;
  margin: 0px -1rem;
}

.text-grey-light {
  color: #c8c8c8;
}
</style>