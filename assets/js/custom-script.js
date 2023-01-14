window.addEventListener('load', () => {
	const dropdownTargets = document.querySelectorAll('.dropdown__target');

	if (dropdownTargets) {
		for (let i = 0; i < dropdownTargets.length; i++) {
			dropdownTargets[i].addEventListener('click', () => {
				dropdownTargets[i].parentElement.classList.toggle('active')
			})
		}
	}
})