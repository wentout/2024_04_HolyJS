window.runExample = async function (path) {
	const fetched = await fetch(`../examples/${path}.js`, {
		headers: {
			"Content-Type": "text/plain",
		},
	});
	const src = await fetched.text();
	eval(src);
};