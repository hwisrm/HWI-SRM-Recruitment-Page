document.addEventListener('DOMContentLoaded', function () {
    const githubLinkInput = document.getElementById('githubLink');
    const linkedinLinkInput = document.getElementById('linkedinLink');
    const githubLinkError = document.getElementById('githubLinkError');
    const linkedinLinkError = document.getElementById('linkedinLinkError');

    const allowedDomains = ['github.com', 'linkedin.com', 'instagram.com', 'x.com'];

    function validateLink(input, errorElement) {
        const linkValue = input.value.trim();

        if (!linkValue) {
            // If empty, allow submission
            errorElement.style.display = 'none';
            input.setCustomValidity('');
            return;
        }

        try {
            const url = new URL(linkValue);
            if (!allowedDomains.some(domain => url.hostname.endsWith(domain))) {
                errorElement.style.display = 'block';
                input.setCustomValidity('Enter a valid GitHub, LinkedIn, Instagram, or X.com link.');
            } else {
                errorElement.style.display = 'none';
                input.setCustomValidity('');
            }
        } catch (e) {
            errorElement.style.display = 'block';
            input.setCustomValidity('Enter a valid URL.');
        }
    }

    githubLinkInput.addEventListener('blur', () => validateLink(githubLinkInput, githubLinkError));
    linkedinLinkInput.addEventListener('blur', () => validateLink(linkedinLinkInput, linkedinLinkError));

    // Validate on form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        validateLink(githubLinkInput, githubLinkError);
        validateLink(linkedinLinkInput, linkedinLinkError);

        if (!githubLinkInput.checkValidity() || !linkedinLinkInput.checkValidity()) {
            event.preventDefault(); // Prevent form submission if links are invalid
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const officialEmailInput = document.getElementById('officialEmail');
    const officialEmailError = document.getElementById('officialEmailError');
    const personalEmailInput = document.getElementById('personalEmail');
    const personalEmailError = document.getElementById('personalEmailError');

    const officialDomain = 'srmist.edu.in';
    const personalDomains = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 'icloud.com', 'aol.com', 'zoho.com', 'protonmail.com'];

    function validateEmail(input, errorElement, allowedDomains, errorMessage) {
        const email = input.value.trim();

        if (!email) {
            // If empty, allow submission
            errorElement.style.display = 'none';
            input.setCustomValidity('');
            return;
        }

        const emailParts = email.split('@');
        if (emailParts.length !== 2 || !allowedDomains.some(domain => emailParts[1].endsWith(domain))) {
            errorElement.style.display = 'block';
            errorElement.textContent = errorMessage;
            input.setCustomValidity(errorMessage);
        } else {
            errorElement.style.display = 'none';
            input.setCustomValidity('');
        }
    }

    // Validate official email
    officialEmailInput.addEventListener('blur', function () {
        validateEmail(
            officialEmailInput,
            officialEmailError,
            [officialDomain],
            `Official email must end with @${officialDomain}`
        );
    });

    // Validate personal email
    personalEmailInput.addEventListener('blur', function () {
        validateEmail(
            personalEmailInput,
            personalEmailError,
            personalDomains,
            'Enter a valid Email'
        );
    });

    // Validate on form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        validateEmail(
            officialEmailInput,
            officialEmailError,
            [officialDomain],
            `Official email must end with @${officialDomain}`
        );
        validateEmail(
            personalEmailInput,
            personalEmailError,
            personalDomains,
            'Enter a valid Email'
        );

        if (!officialEmailInput.checkValidity() || !personalEmailInput.checkValidity()) {
            event.preventDefault(); // Prevent form submission if invalid
        }
    });
});

//Registration Number
document.addEventListener('DOMContentLoaded', function () {
    const regNumberInput = document.getElementById('regNumber');
    const regNumberError = document.createElement('small'); // Create error message element
    regNumberError.style.color = 'red';
    regNumberError.style.display = 'none';
    regNumberError.textContent = 'Invalid Registration No';
    regNumberInput.parentNode.appendChild(regNumberError); 

    function validateRegNumber() {
        const regValue = regNumberInput.value.trim();
        const regPattern = /^RA\d{13}$/;

        if (!regPattern.test(regValue)) {
            regNumberError.style.display = 'block';
            regNumberInput.setCustomValidity('Invalid Registration Number');
        } else {
            regNumberError.style.display = 'none';
            regNumberInput.setCustomValidity('');
        }
    }

    regNumberInput.addEventListener('blur', validateRegNumber);

    // Validate on form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        validateRegNumber();

        if (!regNumberInput.checkValidity()) {
            event.preventDefault();
        }
    });
});
