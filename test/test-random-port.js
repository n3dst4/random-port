var randomPort = require("..");
var assert = require("assert");

var MINPORT = 1025;
var MAXPORT = 65535;

describe("random-port", function () {
	it("should generate a number between " +MINPORT+ " and " +MAXPORT, function () {
		var port = randomPort();
		assert(port <= MAXPORT && port >= MINPORT, 
			"Port was " + port);
	});
})