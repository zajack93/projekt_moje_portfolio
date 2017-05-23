"use strict";

//toworze recznie główny plik konfiguracyjny gulpfile.js

var gulp = require("gulp");
var sass = require("gulp-sass"); 
//tworzymy środowisko obiekty gulp i sass zainstalowane w konsoli  samo "npm install --save dev" oraz "npm install-sass --save -dev" 

var browserSync = require("browser-sync").create();
//tworze środowisko z pakietu browser sync, ktora najpierw zainstalowalam w konsoli npm install browser-sync --save-dev
//tworze obiekt synchronizacji

//pakiet browser sync - synchronizuje mi zmiany z przeglądarka samodzielnie
gulp.task("browserSync", function() {
	browserSync.init({
		server: {
			baseDir: "app"
		},
	})
});


gulp.task("sass", function(){		//ma nam kompilowac do sasa w momencie gdy sie zmieni cos w sasie
		  
		  return gulp.src("app/scss/**/*.scss")		// zwraca nam obiekt, podajemy źródlo  na ta sciezke do kompilowania
			.pipe(sass())						//kompiluje do sassa
			.pipe(gulp.dest("app/css"))		//wyrzuc do folderu css (destination)
		  	.pipe(browserSync.reload({		//przeladuj uruchamia sie automatycznie przegladarka i to co 									//zmieniam zmienia sie w przegladarce
			  stream: true
		  }))

});

gulp.task("watch", ["browserSync", "sass"], function(){
	gulp.watch("app/scss/**/*.scss",["sass"]);	//sprawdzaj czy wystepuja jakies zmiany w pliku, sprawdza czy mzineilismy plik, jezeli zmienilismy to uruchamiamy sassa- czyli śledzenie pliku. sorawdza czy zrobiliśmy save - jak zrobilismy save tzn ze zmienilismy plik
	
});