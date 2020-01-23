export const counterReadyTask = (tasks) => {
    if(!tasks) {
        return 0
    }

    let countReadyTask = 0;

    tasks.map(task => {
        if(task.ready) {
            countReadyTask = countReadyTask + 1;
        }
    })

    return countReadyTask;
}