document.addEventListener('DOMContentLoaded', () => {
   
    const heartIcons = document.querySelectorAll('.fa-regular.fa-heart');
    if (heartIcons.length > 0) {
        heartIcons.forEach(heartIcon => {
            heartIcon.addEventListener('click', () => {
                heartIcon.classList.toggle('fa-solid');
                
            });
        });
    }

    
    const bookmarkIcons = document.querySelectorAll('.fa-regular.fa-bookmark');
    if (bookmarkIcons.length > 0) {
       
        bookmarkIcons.forEach(bookmarkIcon => {
          
            bookmarkIcon.addEventListener('click', () => {
                
                bookmarkIcon.classList.toggle('fa-solid');
            });
        });
    }
});