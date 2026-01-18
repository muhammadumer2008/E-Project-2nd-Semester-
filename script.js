function showPage(pageId){
    // Hide All Sections
    const sections = document.querySelectorAll('.form-card');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    const target = document.getElementById(pageId);
    if (target){
        target.classList.remove('hidden');
    }

    window.scrollTo(0, 0);
}

document.querySelectorAll('.toggle-pass').forEach(eye => {
    eye.addEventListener('click', function(){
        const input = this.previousElementSibling;
        if (input.type === "password"){
            input.type = "text";
            this.classList.replace('fa-eye', 'fa-eye-slash');
        } else{
            input.type = "password";
            this.classList.replace('fa-eye-slash', 'fa-eye');
        }
    });
});