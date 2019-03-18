var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');

gulp.task('hello', function(done) {
    console.log('Hello Zell');done();
  });

gulp.task('sass', function() {
return gulp.src('myboot/sass/style.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('myboot/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function() {
browserSync.init({
    open: 'external',
    hostname: 'localhost',
    proxy: 'http://localhost:8886/drupal/NewProject/web/'
});
});

gulp.task('watch', gulp.parallel('browserSync',function(){
    gulp.watch('myboot/sass/*.scss', gulp.series('sass')); 
// Other watchers
}));

gulp.task('images', function(){
return gulp.src('myboot/images/*.+(png|jpg|jpeg|gif|svg)')
.pipe(imagemin({progressive:true}))
.pipe(gulp.dest('myboot/dist/processedimages'))
});