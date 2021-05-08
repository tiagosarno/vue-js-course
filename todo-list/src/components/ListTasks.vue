<template>
    <div class="container">
        <Progress :progress="progress" />
        <Form />
        <div class="container-tasks" v-if="tasks.length">
            <Task v-for="(task, i) in tasks" :key="task.text" 
                :task="task" 
                @taskDeleted="$emit('taskDeleted', i)"/>
        </div>
        <p class="no-task" v-else>No Tasks :)</p>
    </div>
</template>

<script>
import bus from '../bus'
import Progress from './Progress.vue'
import Form from './Form.vue'
import Task from './Task.vue'

export default {
    components: { Progress, Form, Task },
    data(){
        return {
            tasks: [],            
        }
    },
    computed: {
        progress(){
            const numTasks = this.tasks.length
            const tasksDone = this.tasks.filter(t => t.status).length
            return Math.round(tasksDone / numTasks * 100) || 0
        }
    },
    watch: {
        tasks: {
            // if deep TRUE, is verified deeper changes on object
            deep: true,
            handler() {
                localStorage.setItem('tasks', JSON.stringify(this.tasks))
            }
        }
    },
    created(){  
        const json = localStorage.getItem('tasks')
        const array = JSON.parse(json)        
        this.tasks = Array.isArray(array) ? array : []

        bus.updateTasks(task => {
            const sameName = t => t.text === task
            const realyNew = this.tasks.filter(sameName).length == 0
            if (realyNew && task != ''){
                this.tasks.push({
                    text: task,
                    status: false
                })
            }
        })
        bus.onTaskDeleted(task => {
            const index = this.tasks.indexOf(task)
            if( index >= 0) this.tasks.splice(index, 1)
        })
    },
}
</script>

<style scoped>
    .no-task {
        text-align: center;
        color: #AAA;
        font-size: 1.7rem;
    }
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;     
        justify-content: center;
        align-items: center;   
        margin-top: 20px;
    }    
    .container-tasks {
        margin-top: 25px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 90px;
        border-radius: 10px;    
        padding: 10px;
        cursor: pointer;
    }
</style>