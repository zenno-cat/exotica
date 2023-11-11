import merge from "merge-stream";

export const copy = () => {
    return merge([
        app.gulp
        .src(app.path.src.files)
        .pipe(app.gulp.dest(app.path.build.files)),
        app.gulp
			.src(`${app.path.src.scss}/lib/**/*`)
			.pipe(app.gulp.dest(app.path.build.css)), 
        app.gulp
			.src(`${app.path.src.js}/lib/**/*`)
			.pipe(app.gulp.dest(`${app.path.build.js}/lib`))
    ]);
};
