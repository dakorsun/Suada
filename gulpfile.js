var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
		prefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
	return gulp.src('dev/sass/main.sass')
				.pipe(plumber())
				.pipe(sass())
				.pipe(prefixer({
		      browsers: ['last 15 versions'],
		      cascade: false
		    }))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
	gulp.watch('dev/sass/main.sass', ['sass']);
});