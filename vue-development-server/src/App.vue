<template>
    <div>
        <app-header/>
        <div class="container">

            <transition name="appear">
                <div class="p-3 mb-2 bg-success text-white" v-if="display">Hello</div>            
            </transition>

            <button @click="display = !display" class="btn btn-primary">Toggle animation</button>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                display: false
            }
        }
    }
</script>


<style>

    .appear-enter {
        opacity: 0;
    }

    .appear-enter-active {
        transition: opacity 3s;
    }

    .appear-leave {

    }

    .appear-leave-active {
        opacity: 0;
        transition: opacity 5s;
    }

    body {
        padding:0;
        margin:0;
        font-family: 'Roboto', sans-serif;
    }

    .container {
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }



</style>