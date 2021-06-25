const data = [
    {
        name: 'Bright Don',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lagos',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },

    {
        name: 'Joy Desmond',
        age: 22,
        gender: 'female',
        lookingfor: 'male',
        location: 'Abuja',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'Emeka Okoro',
        age: 52,
        gender: 'male',
        lookingfor: 'female',
        location: 'Enugu',
        image: 'https://randomuser.me/api/portraits/men/25.jpg'
    },
    {
        name: 'Sharon Alima',
        age: 42,
        gender: 'female',
        lookingfor: 'male',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/women/25.jpg'
    }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value
    
    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
            </ul>
            <ul class="list-group">
                <li class="list-group-item">Age: ${currentProfile.age}</li>
            </ul>
            <ul class="list-group">
                <li class="list-group-item">Location: ${currentProfile.location}</li>
            </ul>
            <ul class="list-group">
                <li class="list-group-item">Preferences: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
            </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    }   else {
        // No more profiles
        window.location.reload();

    }
}

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;
    
    return {
        next: function() {
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false} : {done:  true}
        }
    };
}