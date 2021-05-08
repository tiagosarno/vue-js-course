<template>
    <div class="container-input">
        <input type="text" 
            class="form-element" 
            placeholder="Write a new task and press ENTER" 
            v-model="inputValue"
            @keypress.enter="addTask">
        <button 
            class="form-element" 
            @click="addTask">+</button>
    </div>
</template>

<script>
import bus from '../bus'

export default {
    data(){
        return{
            inputValue: ''
        }
    },
    methods: {
        addTask(){
            bus.addTask(this.inputValue)
            this.inputValue = ''
        }
    }
}
</script>

<style>
    .btn-add-task {
        border-radius: 0px 5px 5px 0px;
        border: 1px solid white;
        background-color: darkblue;
        color: white;
        padding: 10px;        
    }
    .container-input {
        width: 100%;
        text-align: center;        
        margin-top: 15px;
    }
    .form-element {
        outline: none;
        font-size: 1.6rem;
        border: 1px solid white;
        padding: 5px 10px 8px;
        color: #FFF;
    }
    input.form-element{
        width: 500px;
        background: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
    button.form-element{
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-left: none;
        background-color: #2196F3;

    }
</style>