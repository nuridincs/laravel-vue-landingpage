<template>
  <div class="p-4">
    <h3 class="text-center">Powerful dengan Limit PHP yang Lebih Besar</h3>
    <div class="row p-4">
      <div class="col">
        <ul class="spec">
          <li v-for="(data, index) in 3" :key="index">
            <span></span>
            <span>Max Execution time 300s</span>
          </li>
        </ul>
      </div>
      <div class="col">
        <ul class="spec">
          <li v-for="(data, index) in 3" :key="index">
            <span></span>
            <span>Max Execution time 300s</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.spec {
  list-style-type: none;
  border: 1px solid #eee;
  margin: 0;
  padding: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 5px;

  li {
    border-bottom: 1px solid #eee;
    padding: 10px;
    text-align: center;
  }

  .grey {
    background-color: #eee;
    font-size: 20px;
  }
}
</style>