import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import { resolve, reject } from "q";

Vue.use(Vuex);
const dynamicRoutes = [
  {
    path: "/demand",
    name: "demand",
    meta: {
      title: '需求列表',
      haspermission: 'demand'
    },
    component: () =>
      import("./views/demand/demand")
  },
  {
    path: "/demandetail",
    name: "demandetail",
    meta: {
      title: '需求详情'
    },
    component: () =>
      import("./views/demand/demandetail")
  },
  {
    path: "/project",
    name: "project",
    meta: {
      title: '项目列表',
      haspermission: 'project'
    },
    component: () =>
      import("./views/project/project")
  },
  {
    path: "/projectdetail",
    name: "projectdetail",
    meta: {
      title: '项目详情'
    },
    component: () =>
      import("./views/project/projectdetail")
  },
  {
    path: "/task",
    name: "task",
    meta: {
      title: '任务列表',
      haspermission: 'task'
    },
    component: () =>
      import("./views/task/task")
  },
  {
    path: "/taskdetail",
    name: "taskdetail",
    meta: {
      title: '任务详情'
    },
    component: () =>
      import("./views/task/taskdetail")
  },
  {
    path: "/mostask",
    name: "mostask",
    meta: {
      title: '科技部任务列表',
      haspermission: 'mostask'
    },
    component: () =>
      import("./views/mostask/mostask")
  },
  {
    path: "/mostaskdetail",
    name: "mostaskdetail",
    meta: {
      title: '科技部任务详情'
    },
    component: () =>
      import("./views/mostask/mostaskdetail")
  },
  {
    path: "/scheduling",
    name: "scheduling",
    meta: {
      title: '排期列表',
      haspermission: 'scheduling'
    },
    component: () =>
      import("./views/scheduling/scheduling")
  },
  {
    path: "/schedulingdetail",
    name: "schedulingdetail",
    meta: {
      title: '排期列表'
    },
    component: () =>
      import("./views/scheduling/schedulingdetail")
  },
  {
    path: "/product",
    name: "product",
    meta: {
      title: '产品列表',
      haspermission: 'product'
    },
    component: () =>
      import("./views/product/product")
  },
  {
    path: "/productdetail",
    name: "productdetail",
    meta: {
      title: '产品详情'
    },
    component: () =>
      import("./views/product/productdetail")
  },
  {
    path: "/DiffTaskAndPQ",
    name: "DiffTaskAndPQ",
    meta: {
      title: 'EMS、CQ对比',
      haspermission: 'DiffTaskAndPQ'
    },
    component: () =>
      import("./views/DiffTaskAndPQ/DiffTaskAndPQ")
  },
  {
    path: "/DiffTaskAndPQdetail",
    name: "DiffTaskAndPQdetail",
    meta: {
      title: 'EMS、CQ对比详情'
    },
    component: () =>
      import("./views/DiffTaskAndPQ/DiffTaskAndPQdetail")
  },
  {
    path: "/system",
    name: "system",
    meta: {
      title: '服务目录列表',
      haspermission: 'system'
    },
    component: () =>
      import("./views/system/system")
  },
  {
    path: "/systemdetail",
    name: "systemdetail",
    meta: {
      title: '服务目录详情'
    },
    component: () =>
      import("./views/system/systemdetail")
  },
  {
    path: "/Certificate",
    name: "Certificate",
    meta: {
      title: '证书列表',
      haspermission: 'Certificate'
    },
    component: () =>
      import("./views/Certificate/Certificate")
  },
  {
    path: "/Certdetail",
    name: "Certdetail",
    meta: {
      title: '证书详情'
    },
    component: () =>
      import("./views/Certificate/Certdetail")
  },
  {
    path: "/approval",
    name: "approval",
    meta: {
      title: '排期管理-审批列表',
      haspermission: 'approval'
    },
    component: () =>
      import("./views/approval/approval")
  },
  {
    path: "/approvaldetail",
    name: "approvaldetail",
    meta: {
      title: '排期管理-审批详情'
    },
    component: () =>
      import("./views/approval/approvaldetail")
  },
  {
    path: "/deploy",
    name: "deploy",
    meta: {
      title: '部署方案列表',
      haspermission: 'depMange'
    },
    component: () =>
      import("./views/deploy/deploy")
  },
  {
    path: "/depApproval",
    name: "depApproval",
    meta: {
      title: '部署方案审批列表',
      haspermission: 'depApproval'
    },
    component: () =>
      import("./views/deploy/depApproval")
  },
  {
    path: "/batch",
    name: "batch",
    meta: {
      title: '批次列表',
      haspermission: 'batch'
    },
    component: () =>
      import("./views/batch/batch")
  },
  {
    path: "/batchdetail",
    name: "batchdetail",
    meta: {
      title: '批次详情'
    },
    component: () =>
      import("./views/batch/batchdetail")
  },
  {
    path: "/tag",
    name: "tag",
    meta: {
      title: '标签列表',
      haspermission: 'tag'
    },
    component: () =>
      import("./views/Parameterconfig.vue/tag")
  },
  {
    path: "/addDeploy",
    name: "addDeploy",
    meta: {
      title: '新建部署方案'
    },
    component: () =>
      import("./views/deploy/addDeploy")
  },
  {
    path: "/modifyDeploy",
    name: "modifyDeploy",
    meta: {
      title: '修改部署方案'
    },
    component: () =>
      import("./views/deploy/modifyDeploy")
  },
  {
    path: "/seeDeploy",
    name: "seeDeploy",
    meta: {
      title: '查看部署方案'
    },
    component: () =>
      import("./views/deploy/seeDeploy")
  },
  {
    path: "/historyDeploy",
    name: "historyDeploy",
    meta: {
      title: '部署方案历史版本'
    },
    component: () =>
      import("./views/deploy/historyDeploy")
  },
  {
    path: "/approvaAddlDeploy",
    name: "approvaAddlDeploy",
    meta: {
      title: '新建部署方案'
    },
    component: () =>
      import("./views/approval/approvaAddlDeploy")
  },
  {
    path: "/approvalModifyDeploy",
    name: "approvalModifyDeploy",
    meta: {
      title: '修改部署方案'
    },
    component: () =>
      import("./views/approval/approvalModifyDeploy")
  },
  {
    path: "/approvalSeeDeploy",
    name: "approvalSeeDeploy",
    meta: {
      title: '查看部署方案'
    },
    component: () =>
      import("./views/approval/approvalSeeDeploy")
  },
  {
    path: "/approvalHistoryDeploy",
    name: "approvalHistoryDeploy",
    meta: {
      title: '部署方案历史版本'
    },
    component: () =>
      import("./views/approval/approvalHistoryDeploy")
  },
  {
    path: "/JurisdictionManagement",
    name: "JurisdictionManagement",
    meta: {
      title: '权限管理'
    },
    component: () =>
      import("./views/management/JurisdictionManagement")
  },
  {
    path: "/roleManagement",
    name: "roleManagement",
    meta: {
      title: '角色管理'
    },
    component: () =>
      import("./views/management/roleManagement")
  },
  {
    path: "/userManagement",
    name: "userManagement",
    meta: {
      title: '用户管理'
    },
    component: () =>
      import("./views/management/userManagement")
  },
]
export default new Vuex.Store({
  state: {
    username: '',
    teamname: '',
    account: '',
    group_name: '',
    permissionList: [],
    pqapprovecount: 0,
    userRoutes: []
  },
  mutations: {
    setUser(state, info) {
      state.group_name = info.group_name;
      state.username = info.username;
      state.teamname = info.team_name;
      state.permissionList = info.permission;
      window.sessionStorage.setItem('permission', info.permission); // 存入一个值、、
      // 生成用户路由表
      state.userRoutes = dynamicRoutes.filter(route => {
        return info.permission.some(menu => menu.name === route.name)
      })
      router.addRoutes(state.userRoutes) // 注册路由
      console.log('nnnnnn', sessionStorage)
    }

  },
  actions: {
    async getaccount({
      commit,
      state
    }) {
      // 而vuex中this的指向是store，因此不能使用
      // 直接引入axios请求即可
      return new Promise((resolve, reject) => {
        // axios({
        //   method: "get",
        //   url: 'http://22.188.43.74:86/hello.js'
        // }).then((resacc) => { 
        //   if (resacc.data) {
        //     state.account= resacc.data;
        //     axios.get('/selectuser?account=' + resacc.data).then((res) => {
        //       commit('setUser',res.data,resacc.data);
        //       axios.get('/getpqapprovecount?approveuser=' + resacc.data + '&tablename=pqtaskinfo').then((res) => {
        //         state.pqapprovecount = res.data.counts;
        //         resolve(true);
        //       }).catch((err) => {
        //         console.log(err)
        //       })
        //     }).catch((err) => {
        //       console.log(err)
        //     })

        //   }  
        // }).catch((err) => {
        //   console.log(err)
        // })

        axios.get('/selectuser?account=zhongyuan').then((res) => {
          state.account = 'zhongyuan';
          const userdata={"username":"钟嫄","team_name":"测试管理","rolenames":["系统管理员"],"group_name":null,"permission":["task","Table","product","taskedit","batchAdd","batchedit","batchdel","Certificate","certedit","certdel","certAdd","deploy","addtaskopinion","scheduling","approval","approvaldetail","project","demand","mostask","system","DiffTaskAndPQ","proedit","tag","tagAdd","tagEdit","adddeploy","depApproval","deployOperrate"],"permissionname":["任务列表","生产调度","产品列表","任务修改","添加批次","修改批次","删除批次","证书管理","证书修改","证书删除","证书添加","部署方案管理","任务审批","排期列表","审批列表","审批详情页","项目列表","需求列表","科技部任务列表","服务目录","EMS、CQ对比","产品修改","标签维护","添加标签","标签修改","添加部署方案","部署方案审批列表","部署方案操作"]}
          commit('setUser', res.data);

          axios.get('/getpqapprovecount?approveuser=zhongyuan&tablename=pqtaskinfo').then((res) => {
            state.pqapprovecount = res.data.counts;
            resolve(true);
          }).catch((err) => {
            console.log(err)
          })
        }).catch((err) => {
          console.log(err)
        })
      })



    }
  },
  getters: {
    // doneTodos: state => {

    //   return state.username.filter(todo => todo.done)
    // }
  }

});