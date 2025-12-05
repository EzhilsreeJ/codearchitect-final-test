document.addEventListener('DOMContentLoaded', () => {
    const roomListContainer = document.getElementById('room-list-container');
    const contactForm = document.getElementById('contact-form');

    // Dummy room data
    const rooms = [
        { number: '101', type: 'Single', status: 'Occupied' },
        { number: '102', type: 'Double', status: 'Available' },
        { number: '103', type: 'Single', status: 'Available' },
        { number: '104', type: 'Double', status: 'Occupied' },
        { number: '105', type: 'Single', status: 'Available' },
        { number: '201', type: 'Triple', status: 'Occupied' },
        { number: '202', type: 'Double', status: 'Available' },
        { number: '203', type: 'Triple', status: 'Available' },
        { number: '204', type: 'Single', status: 'Occupied' },
        { number: '205', type: 'Double', status: 'Available' }
    ];

    // Function to render rooms
    function renderRooms() {
        roomListContainer.innerHTML = ''; // Clear existing content

        rooms.forEach(room => {
            const roomCard = document.createElement('div');
            roomCard.classList.add('room-card');

            roomCard.innerHTML = `
                <h3>Room ${room.number}</h3>
                <p>Type: ${room.type}</p>
                <p>Status: <span class="status ${room.status.toLowerCase()}">${room.status}</span></p>
            `;

            roomListContainer.appendChild(roomCard);
        });
    }

    // Initial render of rooms
    renderRooms();

    // Handle contact form submission (client-side only)
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Contact Form Submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            alert('Thank you for your message! We will get back to you shortly.');
            contactForm.reset(); // Clear the form
        });
    }

    // Optional: Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});