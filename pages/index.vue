{{{{raw}}}}
<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-express
      </h1>
      <div>
        {{ test }}
        <div class="links">
          <a
            href="/users"
            class="button--green"
          > Users List </a>
        </div>
      </div>
      <div class="links">
        <div @click="getList">
          post 请求
        </div>
        <p
          v-for="(item,index) in list"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>
{{{{/raw}}}}
<script>
export default {
  async asyncData ({ $http }) {
    const data = await $http.$post('/api/wx/query')
    const test = data[0].name
    return {
      test
    }
  },
  data () {
    return {
      test: '',
      list: []
    }
  },
  mounted () {
    console.log(666)
  },
  methods: {
    async getList () {
      const data = await this.$http.$post('/api/wx/query')
      this.list = data
      console.log(123, data)
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
