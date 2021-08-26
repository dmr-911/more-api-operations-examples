const getBuddies = () => {
    fetch("https://randomuser.me/api/?results=5")
        .then(res => res.json())
        .then(data => displayBuddies(data));
}
getBuddies();

const displayBuddies = buddies => {
    const buddyContainer = document.getElementById('buddies');
    const newBuddies = buddies.results;
    for (const buddy of newBuddies) {
        const p = document.createElement('p');
        p.innerText = `Name : ${buddy.name.title} ${buddy.name.last}
                                 Email : ${buddy.email}`;
        buddyContainer.appendChild(p);
    }
}