module.exports = function (grunt) {
	grunt.initConfig({
		concat: {
			release: {
				src: ['js/values.js', 'js/prompt.js'],
				dest: 'release/main.js'
			}
		},
		copy: {
			release: {
				src: 'manifest.json',
				dest: 'release/manifest.json'
			}
		},
		jshint: {
			files: ['js/values.js', 'js/prompt.js', 'getImages.js']
		},
		watch: {
			files:['<%= jshint.files %>', 'manifest.json', 'getImages.js'],
			tasks: ['default']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['jshint', 'concat', 'copy']);
};