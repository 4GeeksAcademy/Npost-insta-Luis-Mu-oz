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
    const commentIcons = document.querySelectorAll('.fa-regular.fa-comment');
    if (commentIcons.length > 0) {
       
        commentIcons.forEach(commentIcon => {
          
            commentIcon.addEventListener('click', () => {
                
                commentIcon.classList.toggle('fa-solid');
            });
        });
    }
    const planeIcons = document.querySelectorAll('.fa-regular.fa-paper-plane');
    if (planeIcons.length > 0) {
       
        planeIcons.forEach(planeIcon => {
          
           planeIcon.addEventListener('click', () => {
                
                planeIcon.classList.toggle('fa-solid');
            });
        });
    }
});