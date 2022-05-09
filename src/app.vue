<template>
   <div class="container">
            <input class="input" v-model="message">
            <h1 class="is-size-1">{{ message }}</h1>
         </div>
</template>

<script>
export default {
  data() {
        return {
            message: 'Hello Vue!'
        }
    }
}
</script>

<style>

</style>