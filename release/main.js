var currentDate = new Date();
var kbValues = {
	projectName: 'kittenbook',
	versionNumber: '0.0.1',
	areaCodes: {
		'408': 'Silicon Valley',
		'702': 'Las Vegas',
		'801': 'Northern Utah',
		'765': 'West Lafayette',
		'901': 'Memphis',
		'507': 'Rochester, MN'
	},
	currentTime: 
		currentDate.getFullYear() + '-' +
		(currentDate.getMonth() + 1) + '-' +
		currentDate.getDate() + ' at ' +
		currentDate.getHours() + ':' + 
		currentDate.getMinutes() + ':' +
		currentDate.getSeconds()
};
	


var userName = prompt ('Hello, what\'s your name?');
document.body.innerHTML = '<hl>Hello, ' + userName + '!</hl>' + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + ' viewed on: ' + kbValues.currentTime + '</p>';
var phoneNumber = prompt('Hello ' + userName + ', what\'s your phone number?');
var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
var phoneMatches = phoneNumberPattern.exec(phoneNumber);
var areaCode = phoneMatches[1];
var userLocation = kbValues.areaCodes[areaCode];
var output = '<h1>Hello, ' + userName + '!</h1>';
if (phoneNumberPattern.test(phoneNumber)) {
	output = output + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + ' viewed on: ' + kbValues.currentTime + '. ' + ' How is the weather in ' + userLocation + '? ' + '</p>';
} else {
	output = output + '<h2>That phone number is invalid: ' + phoneNumber;
}
document.body.innerHTML = output;