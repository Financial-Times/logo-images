'use strict'; //eslint-disable-line

const gulp = require('gulp');
const fs = require('fs');

// Read svg directory for list of logo names to pass to demo template
const logoNames = fs.readdirSync('src').filter((file) => {

	// File is an SVG
	return file.endsWith(".svg");

}).map((file) => {
	// Removes .svg extension
	return file.slice(0, -4);
});

gulp.task('listImages', () => {
	const logos = logoNames.map((file) => {
		return { name: file };
	});

	// Write the list of logos found in /svg to the data.json file.
	fs.writeFileSync('imageList.json', JSON.stringify({ logos: logos }, null, '\t'), { encoding: 'utf-8' });
});

gulp.task('default', ['listImages']);
