import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import contact from './views/contact'
import gallery from './views/gallery'
import signin from './views/signin'



Vue.use(VueRouter)


const router = new VueRouter({
routes:[
{
path:'/',
component:Home
},

{
    path:'/contact',
    component:contact
},
{
    path:'/gallery',
    component:gallery
},
{
    path:'/dashboard/member/chat',
    component:gallery
},
     {path:'/signin',
     component:signin
    }


  ]
})
export default router