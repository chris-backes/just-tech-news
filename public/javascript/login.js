const res = require("express/lib/response");

async function signupFormHandler(event) {
	event.preventDefault();

	const username = document.querySelector("#username-signup").value.trim();
	const email = document.querySelector("#email-signup").value.trim();
	const password = document.querySelector("#password-signup").value.trim();

	if (username && email && password) {
		const response = await fetch("/api/users", {
			method: "post",
			body: JSON.stringify({
				username,
				email,
				password,
			}),
			headers: { "Content-Type": "application/json" },
		})

        if (response.ok) {
            console.log('Success')
        } else {
            alert(response.statusText)
        }
	}
}

document
	.querySelector(".signup-form")
	.addEventListener("submit", signupFormHandler);

async function loginFormHandler(event) {
    event.preventDefault()

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').vlaue.trim();

    if (email && password) {
        const response = await festch ('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'applicaiton/json'}
        });
        if (response.ok) {
            console.log('Success')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
