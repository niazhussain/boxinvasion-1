const express = require('express');

const app = express();

app.get('/',(req,res) => {
	res.send('Box Invasion');
});

app.listen('3000', () => {
	console.log('Strating the BOX INVATION app..');
});