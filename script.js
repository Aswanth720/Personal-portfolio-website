// script.js

document.addEventListener('DOMContentLoaded', () => {
    const educationTitle = document.querySelector('.education-section .section-title');
    const educationContent = document.getElementById('education-content');
    const toggleIcon = document.getElementById('education-toggle-icon');

    // Toggle function
    function toggleEducation() {
        const isContentVisible = educationContent.classList.toggle('active');

        if (isContentVisible) {
            toggleIcon.classList.remove('fa-chevron-down');
            toggleIcon.classList.add('fa-chevron-up');
        } else {
            toggleIcon.classList.remove('fa-chevron-up');
            toggleIcon.classList.add('fa-chevron-down');
        }
    }

    // Add click event listener to the section title
    if (educationTitle) {
        educationTitle.addEventListener('click', toggleEducation);
    }
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const educationSection = document.querySelector('.education-section');
    const educationTitle = document.querySelector('.education-section .section-title');
    const educationContent = document.getElementById('education-content');
    const toggleIcon = document.getElementById('education-toggle-icon');
    const educationItems = document.querySelectorAll('.education-item');

    // Toggle function
    function toggleEducation() {
        const isContentVisible = educationContent.classList.toggle('active');

        if (isContentVisible) {
            toggleIcon.classList.remove('fa-chevron-down');
            toggleIcon.classList.add('fa-chevron-up');
            // Add animation class after a short delay to ensure display is set
            setTimeout(() => {
                educationSection.classList.add('animated');
            }, 50); // Small delay
        } else {
            toggleIcon.classList.remove('fa-chevron-up');
            toggleIcon.classList.add('fa-chevron-down');
            educationSection.classList.remove('animated'); // Remove animation class
        }
    }

    // Add click event listener to the section title
    if (educationTitle) {
        educationTitle.addEventListener('click', toggleEducation);
    }

    // Event listeners for individual education items
    educationItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'clicked' class from all other items
            educationItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('clicked');
                }
            });
            // Toggle 'clicked' class on the current item
            item.classList.toggle('clicked');
        });
    });

    // Automatically show education section and trigger animation when the page loads
    // We add a small delay for the animation to be visible after the display property changes.
    setTimeout(() => {
        educationContent.classList.add('active');
        toggleIcon.classList.add('fa-chevron-up');
        educationSection.classList.add('animated');
    }, 100); // Adjust this delay if needed
});
// script.js

