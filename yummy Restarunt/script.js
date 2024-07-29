
        document.addEventListener('DOMContentLoaded', function () {
            const toggleBtn = document.querySelector('.toggle_btn');
            const dropdown = document.querySelector('.dropdown');

            // Toggle dropdown visibility
            toggleBtn.addEventListener('click', function () {
                dropdown.style.display = (dropdown.style.display === 'flex') ? 'none' : 'flex';
            });

            // Close dropdown when clicking outside of it
            document.addEventListener('click', function (e) {
                if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
                    dropdown.style.display = 'none';
                }
            });
        });

        function booking(){
            alert(' walkin now ,Table Booking Done')
        }
        
    