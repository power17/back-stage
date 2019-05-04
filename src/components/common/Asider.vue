<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu>
      <template>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-lx-home"></i>
            <span>一级</span>
          </template>
          <!-- 第二层 -->
          <!-- 第三层 -->
          <el-submenu index="1-1">
            <template slot="title">二级1</template>
            <el-menu-item index="1-1-1">三级1</el-menu-item>
          </el-submenu>
          <!-- 没第三层 -->
          <el-menu-item index="1-2">二级2</el-menu-item>
        </el-submenu>
      </template>
      <template>
        <el-menu-item index="1-1">一级</el-menu-item>
        <el-menu-item index="1-2">一级</el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
</style>
