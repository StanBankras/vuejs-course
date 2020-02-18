<template>
    <div>
        <app-header></app-header>
        <div class="container">
            {{ name }}
        </div>
        <compFooter></compFooter>
    </div>
</template>

<script>
import compFooter from './components/header_footer/Footer.vue'

export default {
    data() {
        return {
            name: 'Stan'
        }
    },
    components: {
        compFooter
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