<template>
    <div class="container">
        <button class="button" @click="modalActive=true">Ava pilt</button>
        <button class="button" @click="modalActive2=true">Ava teine pilt</button>
       <modal :active="modalActive" 
       @close="modalActive=false" 
       img="https://placekitten.com/1280/720"></modal>
          <modal :active="modalActive2" 
       @close="modalActive2=false" 
       img="https://placebear.com/1280/720"></modal>

    </div>  
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: { Modal },
    data() {
        return {
           modalActive: false,
           modalActive2: false
        }
    }
}
  
</script>

<style>
</style>