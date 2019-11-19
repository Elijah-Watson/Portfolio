// Controls the opening and closing of the navigation widget
export class NavigationWidget {
	constructor(button, widget) {
		this.button = button;
		this.widget = widget;
		this.sections = document.querySelectorAll('section');
	}

	setToSectionColor() {
		let currentSection;
		let currentColor;
		this.sections.forEach(section => {
			if (section.getBoundingClientRect().top <= 0) currentSection = section;
		});
		currentColor = window.getComputedStyle(currentSection).getPropertyValue('color');
		this.button.style.color = currentColor;
	}

	toggleButton() {
		this.button.classList.toggle('active');
	}

	toggleWidget() {
		this.widget.classList.toggle('active');
	}

	toggle() {
		this.toggleButton();
		this.toggleWidget();
	}

	init() {
		this.setToSectionColor();
		this.button.addEventListener('click', () => this.toggle());
		this.widget.addEventListener('click', e => {
			if (e.target.tagName.toLowerCase() === 'a') this.toggle();
		});
		document.addEventListener('scroll', () => this.setToSectionColor());
	}
}