<template>
    <el-header height="70px">
        <div class="collapse-btn">
            <i class="el-icon-menu"></i>
        </div>    
        <div class="logo">
            后台管理系统
        </div>
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
                            <i class="el-icon-bell"  type="primary"></i>
                        </el-badge>
                   
                    </el-tooltip>
                </div>

            </div>
        </div>
    </el-header>  
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.el-header {
    background-color: #242f42;
    color: #333;
    line-height: 70px;
    font-size: 22px;
    color: #fff;
    .collapse-btn{
        float: left;
        padding: 0 20px;
    }
    .logo{
        float: left;
        width: 250px;
        line-height: 70px;
    }
    //右侧
    .header-right{
        float: right;
        margin-right: 50px;
        .header-right-con{
            display: flex;
            align-items: center;
            line-height: 70px;
            .btn-fullscreen{
                margin-right: 5px;
            }
        }
        
    }

}

</style>
