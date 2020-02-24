<template>
    <div>
        <app-header/>
        <div class="container">

            <div>{{ userName }}</div>

            <div v-user-lastname="userLastname"></div>

            <hr>

            <div v-awesome.red.big="textToRender"></div>
            <div v-awesome.blue.small="textToRender"></div>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                textToRender: 'Text as value',
                userName: 'Francis',
                userLastname: 'Jones'
            }
        },
        mounted() {
            setTimeout(() => {
                this.userName='Steve'
            }, 3000)
        },
        directives: {
            'user-lastname': {
                bind(el, binding, vnode) {
                    el.innerHTML = binding.value;
                }
            }
        }
    }
</script>


<style>
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