<template>
    <div>
        <h2>Add users</h2>

        <div class="form-group">
            <label>Name</label>
            <input class="form-control" type="text" v-model="user.name">
        </div>

        <div class="form-group">
            <label>Lastname</label>
            <input class="form-control" type="text" v-model="user.lastname">
        </div>

        <button class="btn btn-primary" @click="submit">Submit</button>

    </div>
</template>


<script>
     export default {
        data(){
            return{
                user:{ 
                    name:'',
                    lastname:''
                },
                resource: ''
            }
        },
        methods:{
            submit() {
                // this.$http.post('users', this.user)
                // .then(response => {
                //     console.log(response);
                // })
                this.resource.save({}, this.user)
                .then(response => {
                    console.log(response);
                })
            }
        },
        created() {
            this.resource = this.$resource('users');
        }
    }
</script>