<template>
    <div>
        <app-header></app-header>
        <compUserProfile 
            :userName="name"
            :userLastName="lastname"
            :userAge="age"
            :userParents="parents"
            @updateName="name = $event"
         />
        <compFooter></compFooter>
    </div>
</template>

<script>
import compFooter from './components/header_footer/Footer.vue'
import compUserProfile from './components/user/Profile.vue'

export default {
    data() {
        return {
            name: 'Stan',
            lastname: 'Jones',
            age: 25,
            parents: {
                mother: "Martha",
                father: "Mario"
            }
        }
    },
    components: {
        compFooter,
        compUserProfile
    }
}
</script>

<style>
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    .container {
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }


</style>