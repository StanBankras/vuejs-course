<template>
    <div>
        <h2>List of users</h2>

        <div 
            class="user_item"
            v-for="(user,index) in users"
            :key="index"
        >
            <div><strong>Name:</strong> {{ user.name }}</div>
            <div><strong>Lastname:</strong> {{ user.lastname }} </div>
        </div>

    </div>
</template>


<script>
    export default {
        data(){
            return {
                users:'',
                resource: ''
            }
        },
        methods:{
            fetchData() {
                // this.$http.get('users')
                // .then(response => {
                //     this.users = response.body;
                // });

                this.resource.get({_limit:3})
                .then(response => {
                    this.users = response.body;
                })

            }
        },
        created(){
            this.resource = this.$resource('users{/id}', { _limit: 20 });
            this.fetchData();
        }
    }
</script>

<style>
    .user_item {
        box-sizing: border-box;
        border: 1px solid #f2f2f2;
        width: 250px;
        padding: 20px;
        float: left;
        margin-left: 10px;
        background: #f7f7f7;
        margin-bottom:10px;
    }
    
</style>