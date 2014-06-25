module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			js: {
				src: ['app/js/modules/*.js'],
				dest: 'app/js/script.js'
			}
		},
		sass: {
			dist: {
				files: {
					'app/css/style.css': 'app/css/sass/style.scss'
				}
			}
		},
		jade: {
			compile: {
				options: {
					pretty: true
				},
				files: {
					"app/index.html": "app/jade/index.jade"
				}
			}
		},
		processhtml: {
			dist: {
				files: {
					'dist/index.html': 'app/index.html'
				}
			}
		},
		uglify: {
			minify: {
				files: {
					'dist/js/script.min.js': 'app/js/script.js'
				}
			}
		}, 
		cssmin: {
			minify: {
				files: {
					'dist/css/style.min.css': 'dist/css/style.css'
				}
			}
		},
		jshint: {
			files: ['Gruntfile.js', 'app/js/*.js', 'app/js/modules/*.js']
		},
		watch: {
			css: {
				files: ['app/css/sass/*.scss'],
				tasks: ['sass']
			},
			js: {
				files: ['app/js/modules/*.js'],
				tasks: ['jshint', 'concat']
			},
			html: {
				files: ['app/jade/*.jade'],
				tasks: ['jade:compile']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-processhtml');

	grunt.registerTask('build', ['jshint', 'sass', 'uglify', 'cssmin', 'processhtml']);

};