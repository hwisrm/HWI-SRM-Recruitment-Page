document.addEventListener('DOMContentLoaded', function() {
    const contactUsBtn = document.getElementById('contact-us-btn');
    const popup = document.getElementById('popup');

    contactUsBtn.addEventListener('click', function() {
        popup.classList.toggle('active');
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.classList.remove('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let phoneInput = document.getElementById("phone");
    let phoneError = document.getElementById("phoneError");

    phoneInput.addEventListener("input", function () {
        let phoneNumber = phoneInput.value.trim();

        // Check if the phone number has exactly 10 digits
        if (/^\d{10}$/.test(phoneNumber)) {
            phoneError.style.display = "none";
            phoneInput.style.border = "2px solid green";
        } else {
            phoneError.style.display = "block";
            phoneInput.style.border = "2px solid red";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let whatsappInput = document.getElementById("whatsapp");
    let whatsappError = document.getElementById("whatsappError");

    if (whatsappInput && whatsappError) {
        whatsappInput.addEventListener("input", function () {
            let phoneNumber = whatsappInput.value.trim();
    
            if (/^\d{10}$/.test(phoneNumber)) {
                whatsappError.style.display = "none";
                whatsappInput.style.border = "2px solid green";
            } else {
                whatsappError.style.display = "block"; 
                whatsappInput.style.border = "2px solid red"; 
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('recruitment-form');
    const thankYouPage = document.getElementById('thank-you-page');
    const formContainer = document.getElementById('form-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        if (!this.checkValidity()) {
            alert('Please fill out all required fields correctly.');
            return;
        }


        localStorage.setItem('formData', JSON.stringify(formData));
        formContainer.style.display = 'none';
        thankYouPage.style.display = 'flex';
        window.scrollTo(0, 0);
    });
});
        function updatesp(){
            const specializationSelect = document.getElementById('specialization');
            const branchSelect = document.getElementById('branch').value;
            const specialization = {
                cse: ["Core", "AI & ML", "Cyber Security", "Data Science", "Cloud Computing", "IoT"],
                ece: ["Core"],
                mechanical: ["Core"],
                civil: ["Core"],
                it: ["Core"],
                general: ["General"],
                data_science: ["General"],
                chemistry: ["General"],
                physics: ["General"],
                mathematics: ["General"],
                phd_in_pharmacy: ["General"],
                phd_computer_science_applications: ["General"],
                phd_management: ["General"],
                phd_engineering: ["General"],
                automobile: ["Core"],
                csbs: ["Core"]
            };
            specializationSelect.innerHTML = '<option value="" disabled selected>Select your Specialization.</option>';
            if (specialization[branchSelect]) {
                specialization[branchSelect].forEach(specialization => {
                    let option = document.createElement("option");
                    option.value = specialization.toLowerCase().replace(/\s+/g, "_");
                    option.textContent = specialization;
                    option.style.color = "#000000";
                    specializationSelect.appendChild(option);
                });
            }
        }


        function updateBranches(){
            const branchSelect = document.getElementById('branch');
            const courseSelect = document.getElementById('course').value;
            const branches = {
                btech: ["CSE", "ECE", "Mechanical", "Civil", "IT", "Automobile", "CSBS"],
                bca: ["General", "Data Science"],
                mca: ["General"],
                bba: ["General"],
                mba: ["General"],
                pharma: ["General"],
                bsc: ["Physics", "Chemistry", "Mathematics"],
                hotel: ["General"],
                phd: ["PhD_in_Pharmacy", "PhD_Computer_Science_Applications", "PhD_Management", "PhD_Engineering"]
            };

            branchSelect.innerHTML = '<option value="" disabled selected>Select your Branch.</option>';

            if (branches[courseSelect]) {
                branches[courseSelect].forEach(branch => {
                    let option = document.createElement("option");
                    option.value = branch.toLowerCase().replace(/\s+/g, "_");
                    option.textContent = branch;
                    option.style.color = "#000000";
                    branchSelect.appendChild(option);
                });
            }
        }
        document.addEventListener('DOMContentLoaded', function() {
    const officialEmailInput = document.getElementById('officialEmail');
    const officialEmailError = document.getElementById('officialEmailError');

    officialEmailInput.addEventListener('blur', function() {
        const email = officialEmailInput.value.trim();
        if (email && !email.includes('@srmist.edu.in')) {
            officialEmailError.style.display = 'block';
            officialEmailInput.setCustomValidity('Official email must contain @srmist.edu.in');
        } else {
            officialEmailError.style.display = 'none';
            officialEmailInput.setCustomValidity('');
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
    const githubLinkInput = document.getElementById('githubLink');
    const linkedinLinkInput = document.getElementById('linkedinLink');
    const githubLinkError = document.getElementById('githubLinkError');
    const linkedinLinkError = document.getElementById('linkedinLinkError');

    const allowedDomains = ['github.com', 'linkedin.com', 'instagram.com', 'x.com'];

    function validateLink(input, errorElement) {
        const linkValue = input.value.trim();
        try {
            const url = new URL(linkValue);
            if (!allowedDomains.some(domain => url.hostname.includes(domain))) {
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

    // Validate GitHub link on blur
    githubLinkInput.addEventListener('blur', function () {
        validateLink(githubLinkInput, githubLinkError);
    });

    // Validate LinkedIn link on blur
    linkedinLinkInput.addEventListener('blur', function () {
        validateLink(linkedinLinkInput, linkedinLinkError);
    });

    // Validate links on form submission
    const form = document.querySelector('.form-container');
    form.addEventListener('submit', function (event) {
        validateLink(githubLinkInput, githubLinkError);
        validateLink(linkedinLinkInput, linkedinLinkError);

        if (!githubLinkInput.checkValidity() || !linkedinLinkInput.checkValidity()) {
            event.preventDefault(); // Prevent form submission if links are invalid
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactUsBtn = document.getElementById('contact-us-btn');
    const popup = document.getElementById('popup');

    contactUsBtn.addEventListener('click', function() {
        popup.classList.toggle('active');
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.classList.remove('active');
        }
    });
});


const instagramLinkInput = document.getElementById('instagramLink');
const xLinkInput = document.getElementById('xLink');
const instagramLinkError = document.getElementById('instagramLinkError');
const xLinkError = document.getElementById('xLinkError');

instagramLinkInput.addEventListener('blur', function () {
    validateLink(instagramLinkInput, instagramLinkError);
});

xLinkInput.addEventListener('blur', function () {
    validateLink(xLinkInput, xLinkError);
});

form.addEventListener('submit', function (event) {
    validateLink(instagramLinkInput, instagramLinkError);
    validateLink(xLinkInput, xLinkError);

    if (!instagramLinkInput.checkValidity() || !xLinkInput.checkValidity()) {
        event.preventDefault();
    }
});


    document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    const whatsappInput = document.getElementById('whatsapp');
    const phoneError = document.getElementById('phoneError');
    const whatsappError = document.getElementById('whatsappError');

    function validateNumber(input, errorElementId) {
        const numberValue = input.value.trim();
        const errorElement = document.getElementById(errorElementId);
        if (numberValue && !/^\d{10}$/.test(numberValue)) {
            errorElement.style.display = 'block';
            input.setCustomValidity('Please enter a valid 10-digit number.');
        } else {
            errorElement.style.display = 'none';
            input.setCustomValidity('');
        }
    }

    phoneInput.addEventListener('blur', function() {
        validateNumber(phoneInput, phoneError);
    });

    whatsappInput.addEventListener('blur', function() {
        validateNumber(whatsappInput, whatsappError);
    });

    const form = document.querySelector('.form-container');
    form.addEventListener('submit', function(event) {
        validateNumber(phoneInput, phoneError);
        validateNumber(whatsappInput, whatsappError);

        if (!phoneInput.checkValidity() || !whatsappInput.checkValidity()) {
            event.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const githubLinkInput = document.getElementById('githubLink');
    const linkedinLinkInput = document.getElementById('linkedinLink');
    const githubLinkError = document.getElementById('githubLinkError');
    const linkedinLinkError = document.getElementById('linkedinLinkError');

    const allowedDomains = ['github.com', 'linkedin.com', 'instagram.com', 'x.com'];

    function validateLink(input, errorElement) {
        const linkValue = input.value.trim();
        try {
            const url = new URL(linkValue);
            if (!allowedDomains.some(domain => url.hostname.includes(domain))) {
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

    githubLinkInput.addEventListener('blur', function() {
        validateLink(githubLinkInput, githubLinkError);
    });

    linkedinLinkInput.addEventListener('blur', function() {
        validateLink(linkedinLinkInput, linkedinLinkError);
    });

    const form = document.querySelector('.form-container');
    form.addEventListener('submit', function(event) {
        validateLink(githubLinkInput, githubLinkError);
        validateLink(linkedinLinkInput, linkedinLinkError);

        if (!githubLinkInput.checkValidity() || !linkedinLinkInput.checkValidity()) {
            event.preventDefault();
        }
    });
});

    // Link validation
    linkInput.addEventListener('blur', function() {
        const linkValue = linkInput.value.trim();
        try {
            const url = new URL(linkValue);
            if (!allowedDomains.some(domain => url.hostname.includes(domain))) {
                linkError.style.display = 'block';
                linkInput.setCustomValidity('Enter a valid GitHub, LinkedIn, Instagram, or X.com link.');
            } else {
                linkError.style.display = 'none';
                linkInput.setCustomValidity('');
            }
        } catch (e) {
            linkError.style.display = 'block';
            linkInput.setCustomValidity('Enter a valid URL.');
        }
    });

    const form = document.querySelector('.form-container');
    form.addEventListener('submit', function(event) {
        const numberValue = numberInput.value.trim();
        const linkValue = linkInput.value.trim();
        let valid = true;

        if (numberValue && !/^\d+$/.test(numberValue)) {
            numberError.style.display = 'block';
            numberInput.setCustomValidity('Please enter a valid number.');
            valid = false;
        } else {
            numberError.style.display = 'none';
            numberInput.setCustomValidity('');
        }

        try {
            const url = new URL(linkValue);
            if (!allowedDomains.some(domain => url.hostname.includes(domain))) {
                linkError.style.display = 'block';
                linkInput.setCustomValidity('Enter a valid GitHub, LinkedIn, Instagram, or X.com link.');
                valid = false;
            } else {
                linkError.style.display = 'none';
                linkInput.setCustomValidity('');
            }
        } catch (e) {
            linkError.style.display = 'block';
            linkInput.setCustomValidity('Enter a valid URL.');
            valid = false;
        }

        if (!valid) event.preventDefault(); // Prevent form submission if invalid
    });
});


        document.addEventListener('DOMContentLoaded', function() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                const size = Math.random() * 30 + 10;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                
                const delay = Math.random() * 5;
                particle.style.animationDelay = `${delay}s`;
                
                const duration = Math.random() * 10 + 5;
                particle.style.animationDuration = `${duration}s`;
                
                particlesContainer.appendChild(particle);
            }
            
            const applyBtn = document.getElementById('apply-btn');
            const landingPage = document.getElementById('landing-page');
            const formContainer = document.getElementById('form-container');
            const audio = document.getElementById('background-music');
            const audioControls = document.getElementById('audio-controls');
            const muteBtn = document.getElementById('mute-btn');
            const volumeControl = document.getElementById('volume-control');    
            const stopBtn = document.getElementById('stop-btn');
            const loading = document.getElementById('loading');
            
            applyBtn.addEventListener('click', function() {
                loading.classList.add('active');
                
                audio.volume = volumeControl.value / 100;
                document.getElementById('background-music').volume = 0.1;
                audio.play().catch(e => {
                    console.warn('Audio autoplay was prevented:', e);
                });
                
                audioControls.style.display = 'flex';       
                setTimeout(() => {
                    landingPage.classList.add('slide-up');
                    formContainer.style.display = 'block';
                    
                    window.scrollTo(0, 0);
                    
                    document.body.style.overflow = 'hidden';
                    
                    setTimeout(() => {
                        loading.classList.remove('active');
                        document.body.style.overflow = '';
                        if (audio.paused) {
                            audio.play().catch(e => {
                                console.warn('Audio autoplay was still prevented:', e);
                            });
                        }
                    }, 800);
                }, 1000);
            });

            document.addEventListener('DOMContentLoaded', function () {
const preferredTeam1 = document.getElementById('preferredTeam1');
const additionalPreferences = document.getElementById('additional-preferences');

function updateAdditionalPreferences() {
const team = preferredTeam1.value; // Get the selected team value
const allSections = additionalPreferences.querySelectorAll('.section');

// Hide all sections first
allSections.forEach(section => section.style.display = 'none');

// Show the section for the selected team
if (team) {
    const section = document.getElementById(`${team}-team`);
    if (section) {
        section.style.display = 'block'; // Show the section
    } else {
        console.error(`Section not found for team: ${team}`);
    }
}
}

// Add event listener to the dropdown
preferredTeam1.addEventListener('change', updateAdditionalPreferences);
});
            
            const scrollToFormBtn = document.getElementById('scroll-to-form');
            scrollToFormBtn.addEventListener('click', function() {
                const formElement = document.querySelector('.form-container');
                formElement.scrollIntoView({ behavior: 'smooth' });
            });
            
            muteBtn.addEventListener('click', function() {
                if (audio.muted) {
                    audio.muted = false;
                    muteBtn.textContent = '🔊';
                } else {
                    audio.muted = true;
                    muteBtn.textContent = '🔇';
                }
            });
            
            volumeControl.addEventListener('input', function() {
                audio.volume = this.value / 100;
                if (this.value === '0') {
                    muteBtn.textContent = '🔇';
                } else {
                    muteBtn.textContent = '🔊';
                    audio.muted = false;
                }
            });
            
            stopBtn.addEventListener('click', function() {
                audio.pause();
                audio.currentTime = 0;
            });

            // Show/Hide Additional Preferences based on Team Selection
            const preferredTeam1 = document.getElementById('preferredTeam1');
            const preferredTeam2 = document.getElementById('preferredTeam2');
            const additionalPreferences = document.getElementById('additional-preferences');

            function updateAdditionalPreferences() {
                const teams = [preferredTeam1.value, preferredTeam2.value];
                const allSections = additionalPreferences.querySelectorAll('.section');
                allSections.forEach(section => section.style.display = 'none');

                teams.forEach(team => {
                    if (team) {
                        const section = document.getElementById(`${team}-team`);
                        if (section) section.style.display = 'block';
                    }
                });
            }

            preferredTeam1.addEventListener('change', updateAdditionalPreferences);
            preferredTeam2.addEventListener('change', updateAdditionalPreferences);
        });
