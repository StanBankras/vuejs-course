<template>
    <div>
        <app-header></app-header>
        <div>
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

</style>