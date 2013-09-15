angular-performance
===================

AngularJS directives for measuring and reporting perceived page performance.


##Page Load vs Perceived Page Load


In a traditional page, measuring the page performance is quite easy; a request is made, the server responds with some HTML and the browser renders it.  Done.
![Traditional](http://farm3.staticflickr.com/2852/9727108341_c6081f9fb3_o.png)

A lot of the rendering logic is taken care of as part of the server processing and so looking at `Window Load` and `DOMContentReady` are good indicators of page performance.

In a Single Page Application, things get trickier.  The `Window Load` is only the beginning - that's when the JavaScript has been delivered to the browser, at which point the client-side logic - all the real work - kicks in and begins rendering the page, making API calls and setting up listeners, events, etc.

![SPA](http://farm8.staticflickr.com/7393/9727108327_91103f0d03_o.png)

The DOM is then continuously manipulated as part of user interaction or monitoring, polling and other events. For this reason, the traditional definition of a page being 'done' doesn't apply.

For this reason, the definition of page done has to be defined on a per-case basis.  The most common definition is usually something like "The page is done when this particular div is filled with content" - indicating that the page loaded, an API call was made and the contents were rendered. On a heavier page, this would be when three or four divs have all been filled with content.  You could even choose to ignore certain parts of the page as being less important.


##So how do we measure perceived page performance?

The *perceived* page load is when all of the selected dynamic parts of the page have been filled.  This requires the developer to say when the specific portions are done.  It's an inexact science and the results will vary from user to user, but you get a good idea of the timings involved.



##How this directive works

Place `performance-loaded` directives anywhere within your view and set its value to a variable in the controller's `$scope`. This essentially watches the variable for changes and informs the `performance` directive when it is ready.



