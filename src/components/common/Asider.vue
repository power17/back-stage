<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" router>
      <el-menu-item index="dashboard">
        <i class="el-icon-lx-home"></i>
        <span>系统首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-lx-home"></i>
        <span>基础表格</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-lx-home"></i>
        <span>tab选项卡</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-lx-home"></i>
          <span>表单相关</span>
        </template>
        <!-- 第二层 -->
        <!-- 第三层 -->
        <el-menu-item index="4-1">基本表单</el-menu-item>
        <el-submenu index="4-2">
          <template slot="title">三级菜单</template>
          <el-menu-item index="4-2-1">富文本编辑器</el-menu-item>
          <el-menu-item index="4-2-2">markdown编辑器</el-menu-item>
        </el-submenu>
        <el-menu-item index="4-1">文件上传</el-menu-item>
        <!-- 没第三层 -->
      </el-submenu>
      <el-menu-item index="5">
        <i class="el-icon-lx-home"></i>
        <span>自定义图标</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-lx-home"></i>
        <span>schart图标</span>
      </el-menu-item>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-lx-home"></i>
          <span>拖拽组件</span>
        </template>
        <el-menu-item index="7-1">拖拽列表</el-menu-item>
        <el-menu-item index="7-2">拖拽弹框</el-menu-item>
      </el-submenu>
      <el-menu-item index="8">
        <i class="el-icon-lx-home"></i>
        <span>国际化功能</span>
      </el-menu-item>
      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-lx-home"></i>
          <span>错误处理</span>
        </template>
        <el-menu-item index="7-1">权限测试</el-menu-item>
        <el-menu-item index="7-2">404页面</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          icon: "el-icon-lx-home",
          index: ""
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
</style>
