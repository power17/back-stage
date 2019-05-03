<template>
<div class="wrapper">
    <v-header></v-header>
    <el-container>
        <v-asider></v-asider>
        <router-view></router-view>
    </el-container>
</div>

    
</template>
<script>
import vHeader from './Header'
import vAsider from './Asider'


export default {
    components:{
        vHeader,
        vAsider
    }
}
</script>

<style lang="scss" scoped>

  
  .el-aside {
    color: #333;
  }
  .el-container{
      height: 100%!important;
  }

</style>
