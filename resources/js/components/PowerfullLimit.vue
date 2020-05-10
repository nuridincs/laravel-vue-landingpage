<template>
  <div>
    <h3 class="text-center fn-m-light">Powerful dengan Limit PHP yang Lebih Besar</h3>
    <div class="row fn-hairline py-5">
      <div class="col-sm">
        <ul class="spec">
          <li v-for="({value}, index) in item" :key="index" :class="[index === 1 ? 'bg-grey' : '']">
            <div class="row">
              <div class="col-sm-2">
                <span>
                  <i class="fa fa-check-circle text-green fa-lg"></i>
                </span>
              </div>
              <div class="col-sm">
                <span>{{ value }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-sm">
        <ul class="spec">
          <li v-for="({value}, index) in item2" :key="index" :class="[index === 1 ? 'bg-grey' : '']">
            <div class="row">
              <div class="col-sm-2">
                <span>
                  <i class="fa fa-check-circle text-green fa-lg"></i>
                </span>
              </div>
              <div class="col-sm">
                <span>{{ value }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: [
        {
          value: 'Max Execution time 300s'
        },
        {
          value: 'Max Execution time 300s'
        },
        {
          value: 'PHP memory limit 1024 MB'
        },
      ],
      item2: [
        {
          value: 'Post max size 128 MB'
        },
        {
          value: 'Upload max filesize 128 MB'
        },
        {
          value: 'Max input var 2500'
        },
      ]
    }
  }
}
</script>

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