<template>
    <div class="container">
        <div class="user_profile">
            <h3>User information:</h3>
            <ul>
                <li><span>Name:</span> {{ name }}</li>
                <li><span>Lastname:</span> {{ lastname }}</li>
            </ul>
            <button @click="updateName">Update name</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'lastname'],
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