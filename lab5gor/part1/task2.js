function delay(n) {
    return new Promise(resolve => setTimeout(resolve, n));
}

async function counter(n) {
    while (n >= 0) {
        console.log(n);
        await delay(1000);
        n--;
    }
}

async function getFirstRepoName(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    return repos[0].name;
}

getFirstRepoName('kr1mpus').then(name => console.log(name)); // выводит название первого репозитория пользователя 'kr1mpus'

counter(10); // начинает отсчет

