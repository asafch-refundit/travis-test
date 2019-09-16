(async () => {
	const r = await Promise.all([
		Promise.all([
			Promise.resolve(1),
			Promise.resolve(2)
		]),
		Promise.all([
			Promise.resolve(3),
			Promise.resolve(4)
		])
	]);

	console.log(JSON.stringify(r));
})();