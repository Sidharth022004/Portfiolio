document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            const certificates = document.querySelectorAll('.certificate-card');
            
            certificates.forEach(certificate => {
                if (filterValue === 'all' || certificate.getAttribute('data-category') === filterValue) {
                    certificate.style.display = 'block';
                } else {
                    certificate.style.display = 'none';
                }
            });
        });
    });
});