document.getElementById('faultForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    if (fullname.trim() === '') {
        document.getElementById('nameMessage').textContent = 'Please enter your full name.';
        return;
    }
    const studentid = document.getElementById('studentid').value;
    if (studentid.trim() === '') {
        document.getElementById('idMessage').textContent = 'Please enter your student ID.';
        return;
    }
    const building = document.getElementById('building').value;
    if (building.trim() === '') {
        document.getElementById('buildingMessage').textContent = 'Please enter the building name.';
        return;
    }
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('emailMessage').textContent = 'Please enter your email address.';
        return;
    }
    const description = document.getElementById('description').value;
    if (description.trim() === '') {
        document.getElementById('descMessage').textContent = 'Please enter a valid description.';
        return;
    }
    document.getElementById('status-message').textContent = 'Fault report submitted successfully.'; // Display success message
    document.getElementById('status-message').className = 'success'; // for styling the success message
});

const fullnameInput = document.getElementById('fullname');
const prevName = document.getElementById('prevName');

fullnameInput.addEventListener('input', () => {
    prevName.textContent = fullnameInput.value;
});
const prevCat = document.getElementById('prevCat'); // Get the element to display the selected category
const categoryRadios = document.getElementsByName('category'); // Get all radio buttons with the name 'category'

categoryRadios.forEach((radio) => { // Add an event listener to each radio button
    radio.addEventListener('change', () => {
        prevCat.textContent = radio.value;
    });
});
const descriptionInput = document.getElementById('description'); //to get the description input field
const prevDesc = document.getElementById('prevDesc'); // for displaying the description in the preview section

descriptionInput.addEventListener('input', () => {
    prevDesc.textContent = descriptionInput.value;
});
const electricalRadio = document.getElementById('electrical');
const plumbingRadio = document.getElementById('plumbing');
const assetTagContainer = document.getElementById('assetTagContainer');

electricalRadio.addEventListener('change', () => { // Show the asset tag input when electrical is selected
    assetTagContainer.hidden = false;
});
plumbingRadio.addEventListener('change', () => {  // Hide the asset tag input when plumbing is selected
    assetTagContainer.hidden = true;
});

