window.addEventListener('load', () => {
	const dropdownTargets = document.querySelectorAll('.dropdown__target');

	if (dropdownTargets) {
		for (let i = 0; i < dropdownTargets.length; i++) {
			dropdownTargets[i].addEventListener('click', () => {
				dropdownTargets[i].parentElement.classList.toggle('active')
			})
		}
	}

	const postBody = document.querySelector('.post-body');
	
	if (postBody) {
		let postLinks = postBody.getElementsByTagName('a')
		for (let i = 0; i < postLinks.length; i++) {
			postLinks[i].setAttribute('target', '_blank')
		}
	}
})