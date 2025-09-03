document.addEventListener('DOMContentLoaded', () => {
    const toggleIcons = (selector) => {
        document.querySelectorAll(selector).forEach(icon => {
            icon.addEventListener('click', () =>{
                icon.classList.toggle('fa-solid')
            });
        });
    };
toggleIcons('.fa-regular.fa-heart');
toggleIcons('.fa-regular.fa-bookmark');
toggleIcons('.fa-regular.fa-comment');
toggleIcons('.fa-regular.fa-paper-plane');

});
