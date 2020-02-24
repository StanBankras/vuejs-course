<template>
    <div>
        <app-header/>
        <div class="container">

            <transition name="slideup">
                <div class="p-3 mb-2 bg-success text-white" v-if="display">Hello 2</div>            
            </transition>

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
        transform: translateX(30px);
        opacity: 0;
    }

    .appear-enter-active {
        transition: all .3s ease;
    }

    .appear-leave {

    }

    .appear-leave-active {
        transform: translateX(30px);
        opacity: 0;
        transition: all .3s ease;
    }

    .slideup-enter {

    }

    .slideup-enter-active {
        animation: slideUp 1s ease-out;
    }

    .slideup-leave {

    }

    .slideup-leave-active {
        animation: slideDown 1s ease-out;

    }

    @keyframes slideUp {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slideDown {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);            
        }
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