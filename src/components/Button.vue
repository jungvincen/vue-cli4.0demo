// 创建一个button.vue文件 写法如下

<script>
  export default {
    props:{
      type:{
        type:String,
        default:'normal'
      },
      text:{
        type:String,
        default:'button'
      }
    },
    render(h){
      /*
          h 类似于 createElement， 接受2个参数
          1 - 元素
          2 - 选项
       */
      return h('button',{
        // 相当于 v-bind:class
        class:{
          btn:true,
          'btn-success':this.type === 'success',
          'btn-danger':this.type === 'danger',
          'btn-warning':this.type === 'warning',
          'btn-normal':this.type === 'normal',
        },
        domProps:{
          innerText: this.text || '默认'
        },
        on:{
          click:this.handleClick
        }
      })
    },
    methods:{
      handleClick(){
        this.$emit('myClick')
      }
    }
  }
</script>

<style scoped>
  .btn{
    width: 100px;
    height:40px;
    line-height:40px;
    border:0px;
    border-radius:5px;
    color:#ffff;
  }
  .btn-success{
    background:#67C23A;
  }
  .btn-danger{
    background:#F56C6C;
  }
  .btn-warning{
    background:#E6A23C;
  }
  .btn-normal{
    background:#909399;
  }
</style>