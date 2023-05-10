const app = Vue.createApp({
    data() {
        return {
            todoList: [
                {
                    text: "fare la spesa",
                    done: true
                },
                {
                    text: "pulire casa",
                    done: true
                },
                {
                    text: "aggiustare la catena della bici",
                    done: true
                },
                {
                    text: "aggiornare la playlist spotify",
                    done: true
                },
                {
                    text: "prenotare i biglietti per il messico",
                    done: true
                }
            ],
            newTask: ""
        }
    },
    methods: {
        addTask(){
            if (this.newTask.trim() != "") {
                let clearTask = {
                    text: this.newTask.trim(),
                    done: true
                }
                this.todoList.unshift(clearTask);
                this.newTask = "";
            }
        },
        removeTask(i){
            this.todoList.splice(i, 1);
        },
        lineThrough(i){
            if (this.todoList.length == 0) {
                return this.todoList[i].done = !this.todoList[i].done;
            }
        }
    }
});
app.mount("#app");