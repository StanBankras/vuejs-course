<template>
    <div>
        <div class="user_profile">
            <h3>User information:</h3>
            <ul>
                <li><span>Name:</span> {{ userName }}</li>
                <li><span>Lastname:</span> {{ userLastName }}</li>
                <li><span>Age:</span> {{ userAge }}</li>
            </ul>
            <h3>Parents</h3>
            <ul>
                <li v-for="(key, value, index) in userParents" :key="index">
                    <span>{{ key }}:</span>
                     {{ value }}
                </li>
            </ul>
            <button @click="updateName">Update name</button>
            <button @click="updateLastName('Harry')">Update lastname</button>
            <div>
                <input type="text" v-model="friendInput">
                <button @click="addFriend()">Add friend</button>
            </div>
        </div>
    </div>
</template>

<script>

import { bus } from '../../main.js'

export default {
    props: {
        userName: String,
        userLastName: String,
        userAge: Number,
        userParents: Object,
        updateLastName: Function
    },
    data() {
        return {
            friendInput: ''
        }
    },
    methods: {
        updateName() {
            //this.userName = 'Steve';
            this.$emit('updateName', 'Steve');
        },
        addFriend() {
            console.log('Hoi1');
            bus.$emit('addFriend', this.friendInput);
        }
    }
}
</script>

<style lang="">
    span {
        font-weight: 800;
    }
    .user_profile {
        border: 1px solid #2196F3;
        padding: 10px 20px;
    }
</style>