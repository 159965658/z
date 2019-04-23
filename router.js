import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Hello from "./components/HelloWorld.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "dashboard-v1",
      meta: {
        title: '应用项目管理平台',
        haspermission: ''
      },
      component: () =>
        import( /* webpackChunkName: "about" */ "./components/dashboard-v1.vue")
    },
    {
      path: "/dashboard-v1",
      name: "dashboard-v1",
      meta: {
        title: '应用项目管理平台',
        haspermission: ''
      },
      component: () =>
        import( /* webpackChunkName: "about" */ "./components/dashboard-v1.vue")
    },
    {
      path: "/hello",
      name: "hello",
      component: Hello
    },
    {
      path: "/404",
      name: "404",
      meta: {
        title: '404'
      },
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/404.vue")
    },
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
});