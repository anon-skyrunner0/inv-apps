const express	= require('express'),
	app	= express(),
	PORT	= 8000; 


app.get('/', (req, res) => {
	res.json({
		"message": "Asset API Ready",
		"code": 200
	});
})

app.listen(PORT, () => {
	console.log(`Asset API Exposed to ${PORT}`);
});

	
