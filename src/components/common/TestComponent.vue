<template>
  <div>
    <p>哭你一起挖</p>
    <input v-model="msg" >
    <Button @click="toParent" type="primary">点击</Button>
  </div>

</template>
<script>
  export default  {
    props: ['msg'],
    data () {
      return {
//        msg: ''
      }
    },
    mounted () {},

    created (){
    },
    methods: {
      toParent (){
        // 这个是vue1.x
//        this.$dispatch('add', 'message from child');
      }
    },
    watch: {
      msg: function(e){
        var that = this
        console.log('======'+e)
//        that.demo = e
        //每当str的值改变则发送事件update:msg , 并且把值传过去
        this.$emit('update:msg', e)
//        路由页面跳转
//        this.$router.push({path: '/riskcheck_normalInput', query: {riskCheckNo: data.riskCheckNo, editModel: 'browse', checkModel: data.checkModel, returnButtonState: true, reviewedButtonState: false, backButtonState: true, ImageButtonState: true}})
      },
      deep: true
    }
  }
</script>
<style>

</style>
