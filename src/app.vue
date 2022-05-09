<template>
    <div class="container">
        <h1 class="is-size-1">{{text}}</h1>
    </div>  
</template>

<script>
import axios from 'axios';
export default {
    created(){
        axios.get('http://dog-api.kinduff.com/facts').then(res => {
            console.log(res);
            this.text = res.data.text
    });
    },
    data() {
        return {
          text:''
        }
    }
}
  
</script>

<style>
</style>