<template>
    <div>
        <div class="user_profile">
            <h3>User profile:</h3>
            <hr>
            <slot name="other">Loading...</slot>
            <hr>
            <div>
                <slot name="main_hab"></slot>
                <hr>
                <slot name="notes"></slot>
                <hr>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            habilities: ['JS', 'CSS', 'HTML']
        }
    }
}
</script>

<style scoped>
    li {
        color: red;
    }
    .user_profile {
        border: 1px solid #2196F3;
        padding: 10px 20px;
    }
</style>