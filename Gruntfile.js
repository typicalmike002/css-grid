module.exports = function(grunt) {

	// Loads all grunt tasks.
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			options: {
				livereload: true,
			},
			scss: {
				files: ['css/sass/*.scss', 'css/sass/**/*.scss'],
				tasks: ['compass', 'autoprefixer', 'cssmin'],
				options: {
					spawn: false
				}
			}
		},

		compass: {
			dist: {
				options: {
					config: 'config.rb',
					sassDir: 'css/sass',
					cssDir: 'css',
					environment: 'development'
				}
			}
		},

		combine_mq: {
			options: {
				beautify: true
			},
			main: {
				src: 'style.css',
				dest: 'style.css'
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
			},
			main: {
				expand: true,
				flatten: true,
				src: 'css/style.css',
				dest: 'css/'
			}
		},

		cssmin: {
			target: {
				files: [{
					'style.css': ['css/style.css']
				}]
			}
		}
	});
	grunt.registerTask('default', [
		'grunt-autoprefixer',
		'grunt-contrib-cssmin',
		'grunt-contrib-combine-mq',
		'grunt-contrib-compass'
	]);
};