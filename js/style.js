const backButton = document.querySelector('.btn-primary');
 
  backButton.addEventListener('click', function(event) {
    
    event.preventDefault();

    window.location.href = 'index.html';
  });