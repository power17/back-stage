<template>
  <el-header height="70px">
    <div class="collapse-btn">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-right-con">
        <!-- 全屏图标 -->
        <div class="btn-fullscreen">
          <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 未读消息 -->
        <div class="btn-bell">
          <el-tooltip class="item" effect="dark" content="未读消息" placement="bottom">
            <el-badge is-dot class="item">
              <i class="el-icon-bell" type="info"></i>
            </el-badge>
          </el-tooltip>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="../../assets/img/img.jpg">
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown trigger='click' class="user-name" size="small">
          <span class="el-dropdown-link">
            admin
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>关于作者</el-dropdown-item>
            <el-dropdown-item>项目仓库</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </el-header>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #242f42;
  color: #333;
  height: 70px;
  font-size: 22px;
  color: #fff;
  .collapse-btn {
    float: left;
    padding: 0 20px;
  }
  .logo {
    float: left;
    width: 250px;
    line-height: 70px;
  }

  //右侧
  .header-right {
    float: right;
    margin-right: 50px;
    .header-right-con {
      display: flex;
      align-items: center;
      height: 70px;
      .btn-fullscreen {
        margin-right: 5px;
        transform: rotate(45deg);
      }
      .user-avator {
        margin-left: 20px;
        img {
          display: block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      .user-name{
          margin-left: 10px;
      }
      
      .el-dropdown-link {
        cursor: pointer;
        color: #fff;
      }
      .el-icon-arrow-down {
        font-size: 12px;
      }
    }
  }
}
</style>
