import { createRouter, createWebHistory } from 'vue-router';
import SignUpView from '../views/SignUpView.vue';
import LogIn from '../views/LogIn.vue';
import ChatView from "../views/ChatView.vue"
import { createClient } from '@supabase/supabase-js';



const url ="https://xzhmfiwrnzzunouxywvd.supabase.co"

const anon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6aG1maXdybnp6dW5vdXh5d3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MDM1MDgsImV4cCI6MjAyNDE3OTUwOH0.kjRYMu70d_fq_reQsJOmSnnsD6gYvkqsVwWIb8_i1uc"

const supabase = createClient(url, anon)

async function isLoggedIn(){
    const { data } = await supabase.auth.getSession();
    return !!data.session;
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: () => {
                return { name: 'chat', params: { chatId: 'new' } };
            }
        },
        {
            path: '/chat',
            name: 'chat',
            component: ChatView,
            meta:{
                protected: true
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUpView
        },
        {
            path: '/login',
            name: 'login',
            component: LogIn
        }
    ]
});


router.beforeEach(async(to,from)=>{
    if(to.meta.protected){
        const isLogged = await isLoggedIn()
        if(isLogged)
            return true
        else
            return "/signup" 
    }
    // if(to.path == "/chat"){
    //     const isLogged = await isLoggedIn()
    //     if(isLogged)
    //         return true
    //     else
    //         return "/signup"
    // }
})

export default router;