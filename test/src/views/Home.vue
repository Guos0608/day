<template>
  <div class="wrap">
    <div class="head">
      <div class="img"></div>
      <h2>消息</h2>
      <p>+</p>
    </div>
  <div class="serach">搜索</div>
    <ul class="content">
      <li v-for="(item,index) in list" :key="index">
        <div class="baner"></div>
        <div class="r">
          <p class="tit">
            {{item.tit}}
          </p>
          <p class="txt">
            {{item.txt}}
          </p>
        </div>
      </li>
    </ul>
    </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
      list:[{
        id:0,
        tit:"我的同桌",
        txt:"作业写完没 23333"
      },{
        id:1,
        tit:"我的同桌",
        txt:"作业写完没 23333"
      },{
        id:2,
        tit:"我的同桌",
        txt:"作业写完没 23333"
      },{
        id:3,
        tit:"我的同桌",
        txt:"作业写完没 23333"
      },{
        id:4,
        tit:"我的同桌",
        txt:"作业写完没 23333"
      },{
        id:5,
        tit:"我的同桌",
        txt:"作业写完没 23333"
      }]
    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
 .wrap{
   width: 100%;
   height: 100%;
   overflow-x: hidden;
   .head{
     width:100%;
     height: 60px;
     background: rgb(74, 155, 248);
     display: flex;
     justify-content: space-between;
     box-sizing: border-box;
     padding: 0 20px;
     line-height: 60px;
     color: #fff;
     .img{
       width: 40px;
       height: 40px;
       background: #fff;
       border-radius: 50%;
       margin-top: 10px;
     }
     p{
       font-size: 40px;
     }
   }
   .serach{
     width: 90%;
     height: 35px;
     background: #f5f5f5;
     margin-left: 5%;
     margin-top: 5px;
     border-radius: 10px;
     color: #777;
     line-height: 35px;
     text-align: center;
   }
   .content{
     width: 100%;
     height: auto;
     li{
       width: 100%;
       height: 100px;
       display: flex;
       justify-content: space-between;
       border-bottom: 1px solid #ccc;
       .baner{
         width: 80px;
         height: 80px;
         margin: 10px 20px;
         border-radius: 50%;
         background: coral;
       }
       .r{
         flex: 1;
         height: 100%;
         line-height: 35px;
         .tit{
           font-size: 20px;
           font-weight: bold;
           margin-top: 20px;
         }
         .txt{
           color: #555;
         }
       }
     }
   }
 }
</style>