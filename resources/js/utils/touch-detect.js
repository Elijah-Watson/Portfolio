// This just adds a class "no-hover" to the body if the user touches the screen
// Used to adjust elements that rely on hover
export function touchDetect() {
	window.addEventListener('touchstart', function onFirstTouch() {
		document.body.classList.add('no-hover');
		window.removeEventListener('touchstart', onFirstTouch, false);
	}, false);
}