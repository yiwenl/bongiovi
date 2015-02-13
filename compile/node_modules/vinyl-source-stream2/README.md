# vinyl-source-stream2

This is a patched `vinyl-source-stream` (thanks his author for original work). Original module does not work for me too good and author does not anwser in issues.

## Usage ##

Our previous example, browserify, has a streaming API for its output bundles
which you can use directly. This module is just a bridge that makes it
simple to use conventional text streams such as this in combination with gulp.
Here's an example of using `vinyl-source-stream` and `browserify`, compared to
using `gulpify`:

``` javascript
var source = require('vinyl-source-stream2')
var browserify = require('browserify')
var uglify = require('gulp-uglify')
var gulp = require('gulp')

// using vinyl-source-stream:
gulp.task('browserify', function() {
  var bundleStream = browserify('index.js').bundle()

  bundleStream
    .pipe(source('index.js'))
    .pipe(uglify())//you do not need streamify because content will be buffer
    .pipe(gulp.dest('./bundle.js'))
})
```

Not all that different, really! The nice thing here is that you're getting the
up-to-date browserify API and don't have to worry about the plugin's available
functionality. Of course, these same benefits apply for any readable text
stream you can find on npm.

## API ##

### `stream = sourceStream(filename|opts)` ###

`filename` will be used to create stream which return file with path 'path' and content buffer, base will be set to path.dirname('path')

`opts` it is all arguments you can pass to vinyl (path, cwd, base).
also exists option `buffer` which combine input stream to one buffer (default to true) and if false content of vinyl will be stream as it was in original module


## License ##

MIT. See [LICENSE.md](http://github.com/btd/vinyl-source-stream2/blob/master/LICENSE.md) for details.
Based on [vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream) which is also MIT licensed.
