<template>
    <div>
        PAGE
    </div>
</template>

<script>
export default {
    destroyed() {
        console.log('Destroyed')
    },
    activated() {
        console.log('Activated')        
    },
    deactivated() {
        console.log('Deactivated')
    },

}
</script>