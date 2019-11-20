// Controls the opening and closing of the navigation widget
export class NavigationWidget {
	constructor(button, widget, content) {
		this.button = button;
		this.widget = widget;
		this.content = content;
		this.sections = document.querySelectorAll('section');
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
		this.button.addEventListener('click', () => this.toggle());
	}
}