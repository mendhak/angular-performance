angular-performance
===================

AngularJS directives for measuring and reporting perceived page performance.


##Page Load vs Perceived Page Load


In a traditional page, measuring the page performance is quite easy; a request is made, the server responds with some HTML and the browser renders it.  Done.

![Traditional](http://farm3.staticflickr.com/2852/9727108341_c6081f9fb3_o.png)

A lot of the rendering logic is taken care of as part of the server processing and so looking at `Window Load` and `DOMContentReady` are good indicators of page performance.

In a Single Page Application, things get trickier.  The `Window Load` is only the beginning - that's when the JavaScript has been delivered to the browser, at which point the client-side logic - all the real work - kicks in and begins rendering the page, making API calls and setting up listeners, events, etc.

![SPA](http://farm8.staticflickr.com/7393/9727108327_91103f0d03_o.png)

The DOM is then continuously manipulated as part of user interaction or monitoring, polling and other events. As you can see, the traditional definition of a page being 'done' doesn't apply here.

The *perceived* page performance is how long the user thinks the major elements of the page took to load. By definition it is highly subjective - some users may think that the page is loaded just because the initial furniture appears.  But for most users this will be the parts of the page they consider most important.  

Taking GMail as an example, most users will consider the page ready when the list of emails appear.  Whether or not the social tabs, filters, navigation or GTalk appears is less important.  

![gmail](http://farm6.staticflickr.com/5520/9756473461_815bba6b5b_o.png)

Similarly, on a news website, the title and body of the news article matter the most.  Related articles and featured stories aren't that important, but top stories may matter.

![bbc](http://farm6.staticflickr.com/5329/9756789024_f61b0d57f4_o.png)

The images above are just examples with arbitrarily assigned regions of importance.  The point is, the definition of page done has to be defined on a per-case basis.  The most common definition is usually something like "The page is done when this particular div is filled with content" - indicating that the page loaded, an API call was made and the contents were rendered. On a heavier page, this would be when three or four divs have all been filled with content.  You could even choose to ignore certain parts of the page as being less important.


##So how do we measure perceived page performance?

The *perceived* page load is when all of the important dynamic parts of the page have been filled.  This requires the developers to agree upon what the most important parts are, and to programmatically indicate when the specific portions are done.  It's an inexact science and the results will vary from user to user due to machine specs, network latency and other environmental factors, but you get a good idea of the timings involved and what users are actually experiencing.



##How this directive works

Place `performance-loaded` directives anywhere within your view and set its value to a variable in the controller's `$scope`. This essentially watches the variable for changes and informs the `performance` directive when it is ready.



