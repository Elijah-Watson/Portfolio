import 'normalize.css';
import '../css/main.css';
import SVGInjector from 'svg-injector';
import { touchDetect } from './utils/touch-detect';
import { ImageCover } from './components/image-cover';
import { ImageContain } from './components/image-contain';
import { Flipper } from './components/flipper';

// Injects SVGs
function injectSVGs() {
	var mySVGsToInject = document.querySelectorAll('img.icon');
	SVGInjector(mySVGsToInject);
}

(function onLoad() {
	injectSVGs();
	touchDetect();

	let imageCoverElements = [...document.querySelectorAll('.image-cover')];
	let imageCoverObjects = imageCoverElements.map(imageCoverElement => new ImageCover(imageCoverElement));
	imageCoverObjects.forEach(imageCoverObject => imageCoverObject.init());

	let imageContainElements = [...document.querySelectorAll('.image-contain')];
	let imageContainObjects = imageContainElements.map(imageContainElement => new ImageContain(imageContainElement));
	imageContainObjects.forEach(imageContainObject => imageContainObject.init());



	let flippers = [...document.querySelectorAll('.flipper')];
	let flipObjects = flippers.map(flipper => new Flipper(flipper));
	flipObjects.forEach(flipObject => flipObject.init());
})();