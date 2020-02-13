export const addTaskUtil = (tasks, task) => {

    if (!tasks || !task) {
        return []
    }

    let idGen = 0;
    if (tasks.length === 0) {
        idGen = 0;
    } else {
        idGen = [...tasks][tasks.length - 1].id + 1;
    }

    const newTask = {...task, id: idGen, ready: false};
    const newTasks = [...tasks, newTask];

    return newTasks;
}

export const updateTaskUtil = (tasks, task) => {

    if (!tasks || !task) {
        return []
    }

    const idTask = task.id;
    let indexTask = null;

    [...tasks].forEach((item, index) => {
        if (item.id === idTask) {
            indexTask = index
        }
    })

    const newTask = {...tasks[indexTask], ...task};
    tasks[indexTask] = newTask;

    return tasks;
}

export const removeTaskUtil = (tasks, task) => {

    if (!tasks || !task) {
        return []
    }

    const idTask = task.id;
    let indexTask = null;

    [...tasks].forEach((item, index) => {
        if (item.id === idTask) {
            indexTask = index
        }
    });

    let newTasks = [...tasks];

    newTasks.splice(indexTask, 1);

    return newTasks;
}