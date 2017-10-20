var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');
gulp.task('fileinclude', function(){
    gulp.src('mb/c.html')
        .pipe(fileinclude())
    .pipe(gulp.dest('sc'));
});
