
/* Hero laptop animation -copilot here */
document.addEventListener('DOMContentLoaded', () => {
	const screen = document.getElementById('laptopScreen');
	const content = screen ? screen.querySelector('.screen-content') : null;

	if (!screen) return;

	screen.animate(
		[
			{ transform: 'translateX(-50%) rotateX(88deg)' },
			{ transform: 'translateX(-50%) rotateX(0deg)' }
		],
		{
			duration: 2200,
			easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
			iterations: Infinity,
			direction: 'alternate'
		}
	);

	if (content) {
		content.animate(
			[
				{ opacity: 0, filter: 'blur(6px)', transform: 'scale(0.92)' },
				{ opacity: 1, filter: 'blur(0px)', transform: 'scale(1.0)' }
			],
			{
				duration: 1500,
				delay: 1000,
				iterations: Infinity,
				direction: 'alternate',
				easing: 'ease-in-out'
			}
		);
	}
});


function validateForm() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
            let isValid = true;
            
            // Clear previous errors
            document.getElementById("nameError").style.display = "none";
            document.getElementById("emailError").style.display = "none";
            document.getElementById("messageError").style.display = "none";
            
            // Validate name
            if (name.trim() === "") {
                document.getElementById("nameError").style.display = "block";
                isValid = false;
            }
            
            // Validate email
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById("emailError").style.display = "block";
                isValid = false;
            }
            
            // Validate message
            if (message.trim() === "") {
                document.getElementById("messageError").style.display = "block";
                isValid = false;
            }
            
		return isValid;
	}
