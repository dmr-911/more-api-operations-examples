const getUsers = async () => {
    const res = await fetch("https://randomuser.me/api/?results=5");
    const data = await res.json();
    displayUsers(data.results);
}
getUsers();
const displayUsers = friends => {
    const friendsContainer = document.getElementById('friends');
    friends.forEach(friend => {
        const div = document.createElement('div');
        div.classList.add('friend');
        div.innerHTML = `
            <h4>${friend.name.first} ${friend.name.last}</h4>
            <p>Email : ${friend.email}</p>
        `;
        friendsContainer.appendChild(div);
    });
    
}