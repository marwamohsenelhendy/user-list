const pageButtons = document.querySelectorAll('.pagination .page-link');

    pageButtons.forEach(button => {
      button.addEventListener('click', () => {
       
        const page = button.getAttribute('data-page');
        window.location.href = '' + '' + 'secound_page.html';
      });
    });


   const readMoreButtons = document.querySelectorAll('.btn-primary');

    readMoreButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();

        window.location.href = 'image.html';
      });
    });
