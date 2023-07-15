import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		redirect:'/message'
	},
  {
	  path:'/message',
	  component:()=>import('../views/Message')
  },
  {
	 path:'/friend',
	 component:()=>import('../views/CircleFriend') 
  },
  {
	  path:'/discover',
	  component:()=>import('../views/Discover')
  },
  {
	  path:'/own',
	  component:()=>import('../views/Own')
  },
  {
  	  path:'/friendquan',
  	  component:()=>import('../views/Friendquan')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
