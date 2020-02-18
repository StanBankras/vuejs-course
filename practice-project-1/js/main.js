new Vue({
    el: '#app',
    data: {
        state: true,
        inputName: '',
        nameList: [],
        showError: false
    },
    methods: {
        addNameToList() {
            if (this.validate(this.inputName)) {
                this.nameList.push(this.inputName);
                this.inputName = '';
                this.showError = false;
            } else {
                this.showError = true;
            }            
        },
        validate(value) {
            if (value !== '') {
                return true;
            } else {
                return false;
            }
        }
    }
})