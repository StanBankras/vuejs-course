<template>
    <div>
        <app-header></app-header>
        <compUserProfile 
            :name="name"
            lastname="Jones"
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
            lastname: ''
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