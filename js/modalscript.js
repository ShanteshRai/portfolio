// Add these functions to your existing JavaScript file

function openModal(element) {
  var url = element.getAttribute('data-url'); // Get the URL from data attribute
  document.getElementById('modal-iframe').src = url;
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Close modal when user clicks outside the modal content
window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
