document.getElementById('faultForm').addEventListener('submit', (event) => { // Add an event listener for the form submission
    event.preventDefault();// to prevent the default form submission behavior
    const fullname = document.getElementById('fullname').value; // Get the value of the full name input field
    if (fullname.trim() === '') {
        document.getElementById('nameMessage').textContent = 'Please enter your full name.';
        return;
    }
    const studentid = document.getElementById('studentid').value; // Get the value of the student ID input field
    if (studentid.trim() === '') {
        document.getElementById('idMessage').textContent = 'Please enter your student ID.';
        return;
    }
    const building = document.getElementById('building').value; // Get the value of the building input field
    if (building.trim() === '') {
        document.getElementById('buildingMessage').textContent = 'Please enter the building name.';
        return;
    }
    const email = document.getElementById('email').value; // Get the value of the email input field
    if (email.trim() === '') {
        document.getElementById('emailMessage').textContent = 'Please enter your email address.';
        return;
    }
    const description = document.getElementById('description').value; // Get the value of the description input field
    if (description.trim() === '') {
        document.getElementById('descMessage').textContent = 'Please enter a valid description.';
        return;
    }
    document.getElementById('status-message').textContent = 'Fault report submitted successfully.'; // Display success message
    document.getElementById('status-message').className = 'success'; // for styling the success message
});

const fullnameInput = document.getElementById('fullname'); // Get the input field for full name
const prevName = document.getElementById('prevName'); // Get the element to display the full name in the preview section

fullnameInput.addEventListener('input', () => { //adding an event listener to the full name input field to update the preview section in real-time
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
const electricalRadio = document.getElementById('electrical'); // Get the radio button for electrical category
const plumbingRadio = document.getElementById('plumbing'); // Get the radio button for plumbing category
const assetTagContainer = document.getElementById('assetTagContainer'); // Get the container for the asset tag input field

electricalRadio.addEventListener('change', () => { // Shows the asset tag input when electrical is selected
    assetTagContainer.hidden = false;
});
plumbingRadio.addEventListener('change', () => {  // Hides the asset tag input when plumbing is selected
    assetTagContainer.hidden = true;
});
  
