//! NPM - (Node Package Manager) - Notes

//* npm init
// This command for initializing npm
//* npm install babel-cli babel-preset-stage-0 babel-preset-es2015 --save-dev 
// This command for babel-preset [es2015] changeable
//* npm install -g [package name]
// This command install packages globally -g means global
// For example: npm install -g react
//* npm install create-react-app -g
// react cli for creating apps
//* npm install [package name] --save-dev
// install dependencies for development 

//~ Updating packages
//* npm install [package name]@[version]
// For example: npm install eslint@5.2.0
//* npm outdated [-g]
// This command checks outdated packages
//* npm install [package name]@latest [-g]
// This command for updating package to the latest version

//~Removing packages
//* npm uninstall [package name]
// This command for uninstalling or removing packages
// For example: npm uninstall babel-preset-es2015

//~Semantic Versions
//? "^4.18.2"
// First number is Major releases second number is Minor releases third number is patch releases
//? "^1.x.x"
// (^ caret) this means all minor and patches ok
//? "~1.5.x"
// (~ tilde) this means all patches ok
// if you want exact version you can simply write "1.5.3"

//~ Cache
//* npm cache verify
// This will run report for verify your cache
//* npm cache clean --force
// This command will clean cache

//~ Audit
//* npm audit
// Checks dependencies for safe to use
//* npm audit fix [--force]
// This command will fix dependencies or you can add --force to make force it


//! This is basics of npm if you want more go to https://docs.npmjs.com/about-npm