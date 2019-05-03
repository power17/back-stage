<template>
<!-- <div>
<el-container style="height: 500px; border: 1px solid #eee">  
        <v-header></v-header>
      
            <v-asider></v-asider>
            <el-main>
                <router-view></router-view>
            </el-main>
            
        
        
    </el-container>
</div> -->
<el-contaier class="wrapper">
    <v-header></v-header>
    <el-container style="height: 500px; border: 1px solid #eee">
        <v-asider></v-asider>
        <router-view></router-view>
    </el-container>
</el-contaier>

    
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
