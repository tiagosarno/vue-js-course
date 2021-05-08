import Vue from 'vue'

export default new Vue({
    methods: {
        // Call when is add a new task
        addTask(task){
            this.$emit('addTask', task)
        },
        // Calls when a new task is add
        updateTasks(callback){
            this.$on('addTask', callback)
        },
        // Call when a task is deleted
        taskDeleted(task){
            this.$emit('taskDeleted', task)
        },
        // Calls when a new task is done ou deleted
        onTaskDeleted(callback){
            this.$on('taskDeleted', callback)
        }
    }
})