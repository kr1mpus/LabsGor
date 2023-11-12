class Task {
    constructor(text, completed = false) {
        this.text = text;
        this.completed = completed;
    }

    createTaskElement() {
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

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('.forma');
    var input = document.querySelector('.inputtext');
    var tasksContainer = document.querySelector('.tasks');
    var doneLink = document.querySelector('.done-link');
    var notDoneLink = document.querySelector('.not-done-link');
    var allLink = document.querySelector('.all-link');
    var doneCountSpan = document.querySelector('.done-count');
    var notDoneCountSpan = document.querySelector('.not-done-count');
    var allCountSpan = document.querySelector('.all-count');
    var clearAllButton = document.querySelector('.buttonsdel');
    var filterButton = document.querySelector('.filter-button');

    var tasks = [];
    var isFiltered = false;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var taskText = input.value;

        if (taskText.trim() !== '') {
            var newTask = new Task(taskText);
            tasks.push(newTask);
            var taskElement = newTask.createTaskElement();

            tasksContainer.appendChild(taskElement);
            input.value = '';
            updateCounters();
        }
    });

    tasksContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('buttontasks')) {
            var taskToRemove = event.target.closest('.tasks2');
            var index = Array.from(tasksContainer.children).indexOf(taskToRemove);
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
        tasks = [];
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
            var taskElement = task.createTaskElement();
            tasksContainer.appendChild(taskElement);
        });

        updateCounters();
    }

    function displayTasks(showCompleted) {
        tasksContainer.innerHTML = '';

        tasks.forEach(function (task) {
            if (showCompleted === undefined || task.completed === showCompleted) {
                var taskElement = task.createTaskElement();
                tasksContainer.appendChild(taskElement);
            }
        });

        updateCounters();
    }

    function updateCounters() {
        var doneCount = tasks.filter(task => task.completed).length;
        var notDoneCount = tasks.filter(task => !task.completed).length;
        var allCount = tasks.length;

        doneCountSpan.textContent = doneCount;
        notDoneCountSpan.textContent = notDoneCount;
        allCountSpan.textContent = allCount;
    }
});
