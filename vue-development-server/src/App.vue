<template>
    <div>
        <app-header></app-header>
        <div class="container">
            <compUserProfile 
                :userName="name"
                :userLastName="lastname"
                :userAge="age"
                :userParents="parents"
                @updateName="name = $event"
                :updateLastName="updateLastName"
            />
            <compFriends/>
        </div>
        <compFooter></compFooter>
    </div>
</template>

<script>
import compFooter from './components/header_footer/Footer.vue'
import compUserProfile from './components/user/Profile.vue'
import compFriends from './components/user/Friends.vue'

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
        compUserProfile,
        compFriends
    },
    methods: {
        updateLastName(value) {
            this.lastname = value;
        }
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