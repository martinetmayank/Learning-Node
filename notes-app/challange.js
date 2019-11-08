const tasks = {
    tasks: [
        {
            text: 'grocery shopping',
            completed: true
        },
        {
            text: 'Clean Yard',
            completed: false
        },
        {
            text: 'Film course',
            completed: false
        }
    ],
    getTasksToDo() {
        return this.tasks.filter((tasks) => tasks.completed === false)
    }
}

console.log(tasks.getTasksToDo())
