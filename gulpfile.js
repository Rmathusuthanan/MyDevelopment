"use strict";
//* DEPENDENCIES

var gulp        = require("gulp"),
    browserify  = require("browserify"),
    tsify       = require("tsify"),
    source      = require("vinyl-source-stream"),
    buffer      = require("vinyl-buffer"),
    changed     = require('gulp-changed'),
    del         = require('del'),
    concat      = require('gulp-concat'),
    order        = require('gulp-order'),
    tslint      = require("gulp-tslint"),
    tsc         = require("gulp-typescript"),
    sourcemaps  = require("gulp-sourcemaps"),
    uglify      = require("gulp-uglify"),
    inject      = require('gulp-inject'),
    runSequence = require("run-sequence"),
   //chmod       = require('gulp-chmod'),
    mocha       = require("gulp-mocha"),
    istanbul    = require("gulp-istanbul"),
    browserSync = require('browser-sync').create(),
    zip         = require('gulp-zip');
    
var source =["app/**/*.*", "Content/**/*.*", "Iparts/**/*.*", "scripts/**/*.*"];
var app = "app",
    content = "Content",
    scripts = "scripts";


//Sync the All files 
    gulp.task("sync", function(){
        gulp.watch(source, ["copy-sources", "build-app"])
        .on("error", swallowError)
        .on("change", function(event){
            console.log('File' + event.path + 'Was' + event.type + ', running tasks...');
        })
        .on("delete", function(event){
            console.log('File' + event.path + 'Was' + event.type + ', running tasks...');
        })
    });

//Copy the sources and store to destination path
    gulp.task("copy-sources", function(){
        var clientPath = "C:/Program Files (x86)/ASI/iMIS0/net/Areas/coludIpart/";
        copyFiles(source, clientPath,".")
    })

    gulp.task("default", function (cb) {
    runSequence("sync","build-app","copy-sources",  cb);
});



    var tsTestProject = tsc.createProject("tsconfig.json");
    gulp.task("build-app", function() {
    return gulp.src([
            "Iparts/**/**.ts",
            "typings/tsd.d.ts/"
            ],
            { base: "." }
        )
        .pipe(tsTestProject())
        .on("error", function (err) {
            process.exit(1);
        })
        .js
        .pipe(gulp.dest("C:/Program Files (x86)/ASI/iMIS0/net/Areas/coludIpart/"));
});

gulp.task('zip', function () {
    var zipPath = "Iparts/contactsApp";
    var company = "contactsApp";
    return gulp.src([zipPath + "/**", "!./**/*.zip"])
        .pipe(zip(company + ".zip"))
        .pipe(gulp.dest("C:/Users/Mathu/Desktop/zip"));
});

function swallowError(error) {
    console.log(error);
};

function copyFiles(sourcesFiles, destination, basePath){
    return gulp.src(sourcesFiles, {base: basePath})
    .pipe(changed(destination))
    .pipe(gulp.dest(destination))
};
