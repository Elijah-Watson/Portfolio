import 'normalize.css';
import '../css/main.css';
import SVGInjector from 'svg-injector';
import { ImageCover } from './components/image-cover';
import { ImageContain } from './components/image-contain';

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

	let imageContainElements = [...document.querySelectorAll('.image-contain')];
	let imageContainObjects = imageContainElements.map(imageContainElement => new ImageContain(imageContainElement));
	imageContainObjects.forEach(imageContainObject => imageContainObject.init());
})();