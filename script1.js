const userContainer = document.getElementById('user-container');
const reloadBtn = document.getElementById('reloadBtn');

function fetchUserData() {
  userContainer.innerHTML = 'Loading...';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not OK');
      return response.json();
    })
    .then(users => {
      userContainer.innerHTML = ''; // Clear loading text
      users.forEach(user => {
        const div = document.createElement('div');
        div.className = 'user-card';
        div.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(div);
      });
    })
    .catch(error => {
      userContainer.innerHTML = `<p style="color:red;">Error fetching data: ${error.message}</p>`;
    });
}

// Initial load
fetchUserData();

// Reload on button click
reloadBtn.addEventListener('click', fetchUserData);
