angular-performance
===================

AngularJS directives for measuring and reporting perceived page performance.


##Page Load vs Perceived Page Load


In a traditional page, measuring the page performance is quite easy; a request is made, the server responds with some HTML and the browser renders it.  Done.
![Traditional](http://farm3.staticflickr.com/2852/9727108341_c6081f9fb3_o.png)

A lot of the rendering logic is taken care of as part of the server processing and so looking at Window Load and DOMContentReady are good indicators of page performance.

In a Single Page Application, things get tricker.  The Window Load is only the beginning - that's when the JavaScript has been delivered to the browser, at which point the client-side logic - all the real work - kicks in and begins rendering the page, making API calls and setting up listeners, events, etc.

![SPA](http://farm8.staticflickr.com/7393/9727108327_91103f0d03_o.png)

The DOM is then continuously manipulated as part of user interaction or monitoring, polling and other events. For this reason, the traditional definition of a page being 'done' doesn't apply.

The definition of page done has to be defined on a per-case basis.  The most common way of doing this is to say "The page is done when this particular div is filled with content" - indicating that the page loaded, an API call was made and the contents were rendered. On a heavier page, this would be when three or four divs have all been filled with content.

Also in an SPA, clicking on a link would not cause a new network request for a page, it is simply more client side logic performing some DOM manipulation with one or two API calls.



##How this works

Place `performance-loaded` directives anywhere within the view and set its value to a variable in the controller's `$scope`. This essentially watches the variable for changes and informs the `performance` directive when it is ready.



