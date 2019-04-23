<template>
<div id="app">
    <el-container class="index-box" v-if="isload">
        <el-header>
            <div class="head-name">
                应用项目管理平台
            </div>

            <div class="head-info">{{$store.state.username}}[{{$store.state.teamname}}]</div>

        </el-header>

        <el-container>
            <el-aside width="200px">
                <el-scrollbar style="height:100%;">
                    <!-- <menus /> -->
                    <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical menu-nav"
    style="text-align:left"
    router
  >
    <el-menu-item index="/dashboard-v1">
      <i class="el-icon-setting"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="/demand" v-has="'projectList'">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>项目清单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/demand" v-has="'demand'">需求列表</el-menu-item>
        <el-menu-item index="/project" v-has="'project'">项目列表</el-menu-item>
        <el-menu-item index="/mostask" v-has="'mostask'">任务列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="2" v-has="'schedList'">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>排期管理</span>
        <el-badge class="mark pull-right" :value="$store.state.pqapprovecount"/>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/scheduling" v-has="'scheduling'">排期列表</el-menu-item>
        <el-menu-item index="/approval" v-has="'approval'">
          审批列表
          <el-badge
            class="mark pull-right"
            :value="$store.state.pqapprovecount"
            style="line-height:46px"
          />
        </el-menu-item>
        <el-menu-item index="/DiffTaskAndPQ" v-has="'DiffTaskAndPQ'">EMS、CQ列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="3" v-has="'taskList'">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>投产任务管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/task" v-has="'task'">任务列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-menu-item index="/Certificate" v-has="'Certificate'">
      <i class="el-icon-menu"></i>
      <span slot="title">证书管理</span>
    </el-menu-item>

    <el-submenu index="bushu" v-has="'deploy'">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>部署方案管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/deploy" v-has="'depMange'">部署方案管理</el-menu-item>
        <el-menu-item index="/depApproval" v-has="'depApproval'">部署方案审批列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="batch" v-has="'batchList'">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>批次信息维护</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/batch" v-has="'batch'">批次列表</el-menu-item>
        <el-menu-item index="/product" v-has="'product'">产品列表</el-menu-item>
        <el-menu-item index="1-2">生产任务时间表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-menu-item index="tongji" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">数据统计</span>
    </el-menu-item>

    <el-submenu index="canshu" v-has="'Parameterconfig'">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>参数配置</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/tag" v-has="'tag'">标签维护</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="ziyuan" v-has="'ziyuanList'">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>资源</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/system" v-has="'system'">服务目录列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="quanxian">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>权限管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="userManagement">用户管理</el-menu-item>
        <el-menu-item index="roleManagement">角色管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
                </el-scrollbar>
            </el-aside>
            <el-main>

                <!-- <el-scrollbar style="height:100%;"> -->
                <router-view></router-view>
                <!-- </el-scrollbar> -->
            </el-main>
        </el-container>
    </el-container>

</div>
</template>

<script>
import Menus from './components/menus'
import {
    async
} from 'q';
export default {
    name: "home",
    components: {
        Menus
    },
    data() {
        return {
            isload: false,
            LIST: [],
            activeIndex: "/dashboard-v1"
        };
    },
    created() {
        //在页面加载时读取sessionStorage里的状态信息
        if(sessionStorage.getItem('store')){
            this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem('store'))))
        }
        //刷新存入session
        window.addEventListener('beforeunload',()=>{
            sessionStorage.setItem('store',JSON.stringify(this.$store.state))
        })
    },
    beforeCreate() {
        this.$store.dispatch("getaccount").then((v) => {
             console.log(v);
            this.isload =v;
        })
        console.log(this.isload)

        console.log('11')
    },
    //   methods:{
    //       getuser:async function(){
    //         let _this=this;
    //         _this.isload=await this.$store.commit("getaccount");

    //       }
    //   }
};
</script>

<style lang="less">
.el-menu {
  border: none;
}
.menu-nav:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
body {
    margin: 0 auto;
    font-family: 'PingFang SC', 'Microsoft YaHei', 'SimSun', 'Arial', sans-serif;

}

#app {
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #fefefe;
}

.el-head {
    display: flex;
    flex-direction: row;

    .span {
        color: #fefefe;
        font-weight: bold;
    }
}

.el-scrollbar__wrap {
    overflow-x: hidden !important;
}

.el-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fefefe;
    background-color: #1199c4;
    height: 50px !important;

    >.head-name {
        font-size: 20px;
        font-weight: bold;
    }

    >.head-info {
        font-size: 14px;
    }

    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box;
    line-height: 50px;
}

li {
    .el-menu-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}

.pull-right {
    float: right;
    margin-right: 20px;

    >.el-badge__content {
        border-radius: 3px;
        height: 16px;
        line-height: 16px;
    }
}

.pagination {
    background-color: #fefefe;
    height: 100px;
}

.el-pagination {
    padding: 10px 5px !important;
}

.el-table .cell {
    white-space: nowrap;
}

.el-menu {
    border: none;
}

.el-table__fixed-right {
    right: 7px !important;
}

.menu-nav:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.index-box {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;

    .el-container {
        height: 100%;

        .el-main {
            height: 100%;
            //  overflow: -webkit-paged-y;
        }
    }

    .el-aside {
        background-color: white;
        height: 100vh;
        min-height: 100%;

        .logo {
            background-color: #20222A;
            color: rgba(255, 255, 255, .8);
            text-align: center;
            height: 60px;
            padding-top: 16px;
            font-size: 16px;
            box-sizing: border-box;
            border-bottom: 1px solid gray;
        }
    }

}

.tip {
    padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: start;

    >h3 {
        font-weight: 400;
        font-size: 20px
    }
}

.el-table .cell {
    >a {
        color: #428bca
    }
}

small {
    font-size: 12px !important;
}

.select-choices-row {
    height: 46px;
    display: block;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    white-space: nowrap;

    >div {
        font-size: 14px;
        height: 20px;
    }
}

.el-scrollbar {
    overflow: -webkit-paged-x !important;
}
</style>
