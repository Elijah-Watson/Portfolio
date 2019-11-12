import 'normalize.css';
import '../css/main.css';
import SVGInjector from 'svg-injector';
import { ImageCover } from './components/image-cover';

// Injects SVGs
function injectSVGs() {
	var mySVGsToInject = document.querySelectorAll('img.icon');
	SVGInjector(mySVGsToInject);
}

(function onLoad() {
	injectSVGs();

	let imageCoverElements = [...document.querySelectorAll('.image-cover')];
	let imageCoverObjects = imageCoverElements.map(imageCoverElement => new ImageCover(imageCoverElement));
	imageCoverObjects.forEach(imageCoverObject => imageCoverObject.init());
})();