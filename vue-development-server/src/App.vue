<template>
    <div>
        <app-header/>
        <div class="container">
            <input v-model="name">
            <button class="btn btn-primary" @click="addOne">Add one</button>

            <ul class="list-group">
                <transition-group name="appear">
                    <li
                        class="list-group-item"
                        v-for="(item,index) in list"
                        :key="item"
                        @click="removeItem(index)"
                    >
                        {{ item }}
                    </li>
                </transition-group>
                
            </ul>


        </div>
        <app-footer/>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                list:['Francis','Ron','James'],
                velocity:false,
                hook:false,
                display: false,
                status: false,
                custom: true,
                name:''
            }
        },
        methods:{
            addOne(){
                if(!this.list.includes(this.name)){
                    this.list.unshift(this.name)
                }
            },
            removeItem(index){
                this.list.splice(index,1)
            },           
        }
    }
</script>

<style>
    .appear-enter {
        transform: translateX(30px);
        opacity: 0;
    }

    .appear-enter-active {
        transition: all 0.3s ease;
    }

    .appear-leave {

    }

    .appear-leave-active {
        transform: translateX(30px);
        opacity: 0;
        transition: all 0.3s ease;
        position: absolute;
    }
    .appear-move {
        transition: transform 0.3s;
    }

    .slideup-enter {
        opacity: 0;
    }

    .slideup-enter-active {
        transition: opacity 1s;
        animation:  slideUp 1s ease-out;
    }

    .slideup-leave {

    }

    .slideup-leave-active {
        opacity: 0;
        transition: opacity 1s;
        animation:  slideDown 1s ease-out;
    }


    @keyframes slideUp {
        from {
            transform: translateY(20px)
        }
        to {
            transform: translateY(0)
        }
    }
     @keyframes slideDown {
        from {
            transform: translateY(0)
        }
        to {
            transform: translateY(20px)
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