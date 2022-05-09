<template>
    <div class="container">
        <div class="field has-addons">
            <div class="control">
                <input class="input" v-model="message" @keydown.enter="addItem">
            </div>
            <div class="control">
                <button class="button is-primary" v-on:click="addItem">
                    Add Item
                </button>
            </div>
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in items" v-bind:key="index">
                    {{item}}
                    <button class="button is-primary" @click="removeItem(index)">Done</button>
                    </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            items: ['piim', 'sai', 'leib']
        }
    },
    methods: {
        addItem(){
            if(this.message.trim() != ''){
                this.items.push(this.message);
            }
            this.message = '';
        },
        removeItem(index){
            this.items.splice(index, 1);
        }
    }
}
</script>

<style>
</style>