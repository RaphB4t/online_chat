import supabase from "./supabase"
import {useRouter} from "vue-router";   //bonne pratique
import router from "../router/main_router";
// const router = useRouter()

async function signUp(email,password) {
    const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })
    router.push('/')
}

async function signOut() {
    const { error } = await supabase.auth.signOut()
    router.push('signup')
  }

async function logIn(email,password) {
    const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
  router.push('/')
}

async function isLoggedIn(){
    const { data } = await supabase.auth.getSession();
    return !!data.session;
}

export {signUp,isLoggedIn,logIn,signOut}