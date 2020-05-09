<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-expand-sm">
        <!-- Brand/logo -->
        <a class="navbar-brand" href="#">
          <img src="/assets/images/logo.png" class="img-fluid w-75" alt="Logo">
        </a>

        <!-- Links -->
        <ul class="navbar-nav">
          <li v-for="(menu, index) in menus" :key="index" class="nav-item">
            <a class="nav-link fn-rbt-light" href="#">{{ menu.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="bottom-line" />
  </div>
</template>

<script>
export default {
  data () {
    return {
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
  }
}
</script>

<style scoped>
a {
  color: #4c4c4c;
}
</style>