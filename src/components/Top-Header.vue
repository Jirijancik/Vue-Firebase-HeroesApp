<template>
    <div>
       Logged in: 
       <span v-if="isLoggedIn">Yes</span>
       <span v-else>No</span>
       <div>
           <button @click="handleSignOut">Sing Out</button>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import "firebase/auth";

export default {
    created(){
        firebase.auth().onAuthStateChanged(user =>{
            this.isLoggedIn = !!user;
        })
    },
    data(){
        return{
            isLoggedIn: false
        }
    },
    methods:{
        async handleSignOut(){
            try {
                const data = await firebase.auth().signOut();
                console.log(data);
                this.$router.replace({name: "login"})
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>