// JavaScript to handle form validation
        document.getElementById('intern-form').addEventListener('submit', function(event) {
            let isValid = true;

            // Check each field for validity
            const fields = ['first-name-input', 'last-name-input', 'email-input', 'college-input', 'roll-no-input', 'graduation-year', 'conditions-checkbox'];
            fields.forEach(field => {
                const input = document.getElementById(field);
                const feedback = document.getElementById(field + '-feedback');
                if (!input.value) {
                    isValid = false;
                    feedback.style.display = 'block';
                } else {
                    feedback.style.display = 'none';
                }
            });

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if invalid
            }
        });