import { createApp } from 'vue';

createApp({
    created(){
        setTimeout(()=>{
            this.message = 'I changed!';
        }, 5000);
    },
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}).mount('#app');