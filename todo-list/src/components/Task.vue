<template>
    <div class="task" :class="styleTask" @click="changeStatus">
      <span class="close" @click.stop="taskDeleted(task)">x</span>
      <div><span>{{ task.text }}</span></div>
    </div>
</template>

<script>
import bus from '../bus'

export default {
  data(){
    return{
      tasksDone: 0,
      lineThrough: false
    }
  },
  computed:{
    styleTask(){
      return {
        undone: !this.task.status,
        done: this.task.status,        
      }
    }
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeStatus(){
        this.task.status = !this.task.status
    },
    taskDeleted(task){
      bus.taskDeleted(task)
    }
  }
}
</script>

<style>
  .task{
    position: relative;
    box-sizing: border-box;
    width: 250px;
    height: 90px;
    border-radius: 10px;    
    padding: 10px;
    cursor: pointer;
    margin: 5px;
    font-size: 1.2rem;
    font-weight: 300;
    user-select: none;
  }
  .task button{
    float: right;
    background-color: white;
    color: #333;
    border-radius: 25px;    
    font-weight: bold;
    cursor: pointer;
  }
  .undone {
    border: 2px solid darkred;
    border-left: 10px solid darkred;
    background-color: #f44336;
    color: darkred;
  }
  .undone .close{
    background-color: #b73229;    
  }
  .done {
    border: 2px solid darkgreen;
    border-left: 10px solid darkgreen;
    background-color: #4caf50;    
    color: #ddd;
    text-decoration: line-through;
  }
  .done .close{
    background-color: #0a8f08;
  }
  .close{
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    color: white;
  }
</style>