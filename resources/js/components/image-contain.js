// Takes an image and contains it in its parent
// Used over object-fit CSS due to browser support
export class ImageContain {
	constructor(image) {
		this.image = image;
		this.conatiner = image.parentNode;
	}
	// Checks to see whether image is too wide or too tall
	// If it is too wide, set width to 100%
	// If it is too tall, set height to 100%
	formatImage() {
		this.image.style.width = '100%';
		this.image.style.height = 'auto';

		if (this.image.clientHeight >= this.conatiner.clientHeight) {
			this.image.style.width = 'auto';
			this.image.style.height = '100%';
		}
	}
	init() {
		// Set certain initial properties used in contain behavior
		let containerStyles = window.getComputedStyle(this.conatiner);
		let containerPostion = containerStyles.getPropertyValue('position');
		if (!containerPostion || containerPostion === 'static') this.conatiner.style.position = 'relative';

		this.image.style.position = 'absolute';
		this.image.style.top = '50%';
		this.image.style.left = '50%';
		this.image.style.transform = 'translate(-50%, -50%)';

		// Recalculate when window is resized
		window.addEventListener('resize', () => {
			this.formatImage();
		});

		// Make sure image is loaded before initial calculations
		if (this.image.complete) {
			this.formatImage();
		} else {
			this.image.addEventListener('load', () => {
				this.formatImage();
			});
		}
	}
}