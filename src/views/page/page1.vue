<template>
  <div>
    this is page1
    <!-- 按钮根据value显示不同类型的button -->
    <Button type='danger' text='button' @myClick='test'></Button>
    <div v-permission="'10'">
      <button>权限1</button>
    </div>
    <div v-permission="'5'">
      <button>权限2</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "page1",
    methods: {
      test(){}
    }
  }
</script>

<style scoped>

</style>