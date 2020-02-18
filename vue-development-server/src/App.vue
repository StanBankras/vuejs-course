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
            <compHabilities>
                <ul slot="main_hab">
                    <li v-for="(hab, index) in habilities" :key="index">{{ hab }}</li>
                </ul>
                <div slot="notes">
                    <p>The user also knows PHP</p>
                </div>
                <a href="#">Link</a>
                <div :slot="slotName">
                    Other content
                </div>
            </compHabilities>
        </div>
        <compFooter></compFooter>
    </div>
</template>

<script>
import compFooter from './components/header_footer/Footer.vue'
import compUserProfile from './components/user/Profile.vue'
import compFriends from './components/user/Friends.vue'
import compHabilities from './components/user/Habilities.vue'

export default {
    data() {
        return {
            name: 'Stan',
            lastname: 'Jones',
            age: 25,
            parents: {
                mother: "Martha",
                father: "Mario"
            },
            habilities: ['JS', 'CSS', 'HTML'],
            slotName: ''
        }
    },
    components: {
        compFooter,
        compUserProfile,
        compFriends,
        compHabilities
    },
    methods: {
        updateLastName(value) {
            this.lastname = value;
        }
    },
    created() {
        setTimeout(() => {
            this.slotName = 'other';
        }, 3000)
    },
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