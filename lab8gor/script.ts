class Task {
    text: string;
    completed: boolean;

    constructor(text: string, completed: boolean = false) {
        this.text = text;
        this.completed = completed;
    }

    createTaskElement(): HTMLDivElement {
        const newTask = document.createElement('div');
        newTask.classList.add('tasks2');

        const label = document.createElement('label');
        label.classList.add('label1');
        if (this.completed) {
            label.classList.add('completed');
        }

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = this.completed;
        checkbox.addEventListener('change', () => {
            label.classList.toggle('completed', checkbox.checked);
            this.completed = checkbox.checked;
            updateCounters();
        });

        const labelText = document.createTextNode(this.text);

        const closeButton = document.createElement('button');
        closeButton.classList.add('buttontasks');
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => {
            newTask.remove();
            updateCounters();
        });

        label.appendChild(checkbox);
        label.appendChild(labelText);
        newTask.appendChild(label);
        newTask.appendChild(closeButton);

        return newTask;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.forma') as HTMLFormElement;
    const input = document.querySelector('.inputtext') as HTMLInputElement;
    const tasksContainer = document.querySelector('.tasks') as HTMLDivElement;
    const doneLink = document.querySelector('.done-link') as HTMLElement;
    const notDoneLink = document.querySelector('.not-done-link') as HTMLElement;
    const allLink = document.querySelector('.all-link') as HTMLElement;
    const doneCountSpan = document.querySelector('.done-count') as HTMLElement;
    const notDoneCountSpan = document.querySelector('.not-done-count') as HTMLElement;
    const allCountSpan = document.querySelector('.all-count') as HTMLElement;
    const clearAllButton = document.querySelector('.buttonsdel') as HTMLElement;
    const filterButton = document.querySelector('.filter-button') as HTMLElement;

    const tasks: Task[] = [];
    let isFiltered = false;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const taskText = input.value;

        if (taskText.trim() !== '') {
            const newTask = new Task(taskText);
            tasks.push(newTask);
            const taskElement = newTask.createTaskElement();

            tasksContainer.appendChild(taskElement);
            input.value = '';
            updateCounters();
        }
    });

    tasksContainer.addEventListener('click', function (event) {
        if ((event.target as HTMLElement).classList.contains('buttontasks')) {
            const taskToRemove = (event.target as HTMLElement).closest('.tasks2') as HTMLDivElement;
            const index = Array.from(tasksContainer.children).indexOf(taskToRemove);
            tasks.splice(index, 1);
            tasksContainer.removeChild(taskToRemove);
            updateCounters();
        }
    });

    doneLink.addEventListener('click', function () {
        displayTasks(true);
    });

    notDoneLink.addEventListener('click', function () {
        displayTasks(false);
    });

    allLink.addEventListener('click', function () {
        displayTasks();
    });

    clearAllButton.addEventListener('click', function () {
        tasksContainer.innerHTML = '';
        tasks.length = 0;
        updateCounters();
    });

    filterButton.addEventListener('click', function () {
        toggleFilter();
    });

    function toggleFilter() {
        isFiltered = !isFiltered;

        tasksContainer.innerHTML = '';

        if (isFiltered) {
            tasks.sort((a, b) => b.text.localeCompare(a.text));
        } else {
            tasks.sort((a, b) => a.text.localeCompare(b.text));
        }

        tasks.forEach(function (task) {
            const taskElement = task.createTaskElement();
            tasksContainer.appendChild(taskElement);
        });

        updateCounters();
    }

    function displayTasks(showCompleted?: boolean) {
        tasksContainer.innerHTML = '';

        tasks.forEach(function (task) {
            if (showCompleted === undefined || task.completed === showCompleted) {
                const taskElement = task.createTaskElement();
                tasksContainer.appendChild(taskElement);
            }
        });

        updateCounters();
    }

    function updateCounters() {
        const doneCount = tasks.filter(task => task.completed).length;
        const notDoneCount = tasks.filter(task => !task.completed).length;
        const allCount = tasks.length;

        doneCountSpan.textContent = doneCount.toString();
        notDoneCountSpan.textContent = notDoneCount.toString();
        allCountSpan.textContent = allCount.toString();
    }
});
