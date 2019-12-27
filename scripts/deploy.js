'use strict';

var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
var path = require('path');
var fs = require('fs');
var credentials = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'credentials.json'), 'utf8'));
 
var config = {
	user: credentials.user,					// NOTE that this was username in 1.x 
	password: credentials.psw,				// optional, prompted if none given
	host: credentials.host,
	port: 21,
	localRoot: __dirname + '/../',
	remoteRoot: '/new/wp-content/themes/jakubpise/',
	// include: ['*', '**/*'],				// this would upload everything except dot files
	include: ['*.php', 'screenshot.png', 'style.css',  'build/**/*', 'template-parts/**/*', 'inc/**/*'],
	exclude: [],							// e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
	deleteRemote: true,						// delete ALL existing files at destination before uploading, if true
	forcePasv: true							// Passive mode is forced (EPSV command is not sent)
}
	
// use with callback
ftpDeploy.deploy(config, function(err, res) {
	if (err) console.log(err)
	else console.log('finished:', res);
});