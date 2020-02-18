<template>
    <div class="container">
        <div class="user_profile">
            <h3>User information:</h3>
            <ul>
                <li><span>Name:</span> {{ userName }}</li>
                <li><span>Lastname:</span> {{ userLastName }}</li>
                <li><span>Age:</span> {{ userAge }}</li>
            </ul>
            <h3>Parents</h3>
            <ul>
                <li><span>Mother:</span> {{ userParents.mother }}</li>
                <li><span>Father:</span> {{ userParents.father }}</li>
            </ul>
            <button @click="updateName">Update name</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        userName: String,
        userLastName: String,
        userAge: Number,
        userParents: Object
    },
    methods: {
        updateName() {
            this.name = 'Steve';
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