# css-grid
###### Version 1.1.0

### About css-grid
A lightweight CSS grid system built using modern CSS tools.  The grid is built around the display: flex; property and it is baked into some modern front end tools.  This repo uses Grunt and Compass plugins and the actual grid is programmed in SCSS.  It was built as a starting point for project that require a custom CSS Grid for developers who use Grunt as their task manager.

### Dependencies
css-grid requires the following dependencies to work.
 - Node.js (needed for npm)
 - Grunt.js 

### Installing css-grid
Be sure to install the dependencies above before attempting to install this repo.

1. Open a command prompt and change directories to your prefered developing environment.

2. Type in the following command.

```bash
git pull https://github.com/typicalmike002/css-grid.git
```

3. Install the Grunt CLI (skip if you already have done this)

```bash
npm install -g grunt-cli
```

4. Install Grunt and all grunt Plugins listed in the package.json file.

```bash
npm install
```

5. Test it by running Grunt's Watch task to ensure everything was loaded correctly.

```bash
grunt watch
```

 - You should see **Running "watch" task** and **Waiting...** Grunt is now waiting for changes to be made and will run its tasks automatically while you work on your CSS files.

### Example
See the file 'index.html' for various working examples using the css-grid.

### Grunt Plugins
The following list explains what grunt is doing while it watches for changes and why I've included them as default into this repo.

1. watch: Watches for changes in files, and runs other tasks when a change is detected.

2. compass: Adds SASS and SCSS support to the repo to extend the capabilities of CSS.

3. cssmin: Minifies CSS files for speed optimization.

4. combine-mq: Combines all Media Queries that match values into a single query for speed optimization.

5. autoprefixer: Automatically adds brower prefixes such as -webkit, -moz, -ms, and -o where appropriate.  This uses the website caniuse.com database for choosing when it is appropriate.