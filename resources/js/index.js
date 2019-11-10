import 'normalize.css';
import '../css/main.css';
import SVGInjector from 'svg-injector';

// Injects SVGs
function injectSVGs() {
	var mySVGsToInject = document.querySelectorAll('img.icon');
	SVGInjector(mySVGsToInject);
}

(function onLoad() {
	injectSVGs();
})();