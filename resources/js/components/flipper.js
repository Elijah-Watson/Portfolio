// Controls the flipping of an object
// Designed to flip on click and unflip when something else is clicked
// Relies on a flipper parent div containing a flipper content div that contains flipper front and flipper back divs
export class Flipper {
	constructor(flipper) {
		this.flipper = flipper;
		this.flipperTrigger = this.flipper.querySelector('.flipper-trigger');
	}
	init() {
		let flipper = this.flipper;
		this.flipperTrigger.addEventListener('click', function() {
			// This function is here so that the event listener can be removed once its purpose is served
			function unflip(e) {
				if (!flipper.contains(e.target) && flipper !== e.target) {
					flipper.classList.remove('flipped');
					document.removeEventListener('click', unflip);
				}
			}
			if (!flipper.classList.contains('flipped')) {
				flipper.classList.add('flipped');
				document.addEventListener('click', unflip);
			}
		});
	}
}