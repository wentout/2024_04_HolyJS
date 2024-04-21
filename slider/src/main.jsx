// import './index.css'
import './styles.css'

import { define, defaultNamespace } from 'mnemonica';

// @ts-expect-error no .dts
import { Slide, Title, Title2, Starter, MDX, Footer, Progressor } from './components';

import Keys from './keyboard';

import Main from './runner';

import postHook from './postCreation';

// @ts-expect-error no .dts
defaultNamespace.registerHook('postCreation', postHook);

const Runner = define('Main', Main);

const SlideRoot = Runner.define('Slide', Slide);

SlideRoot.define('Title', Title);
SlideRoot.define('Title2', Title2);

const SlideStarter = SlideRoot.define('Starter', Starter);
SlideStarter.define('Progressor', Progressor);
SlideStarter.define('Footer', Footer);

const SlideMDX = SlideRoot.define('MDX', MDX);
SlideMDX.define('Progressor', Progressor);
SlideMDX.define('Footer', Footer);

const app = new Runner('root');
// // const app = new App('root');

window.onerror = function (...args) {
	// debugger;
	app.setErrored(...args);
};

app.init()
	.then(app.start)
	.then(() => {
		if (app.print) return;
		Keys.call(app);
		// new app.Keys();
	});

