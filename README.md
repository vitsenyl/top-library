# Simple Library App

Library App for The Odin Project. Made with vanilla JS, HTML and CSS. 

See the live version: https://vitsenyl.github.io/top-library/

## ToDo
[ ] Add local storage and/or Firebase storage
[ ] Actually prettify the UI

## Discussion behind the Design
If you have any comments or recommendations, I'd love to hear them!

* When dynamically generating DOM elements, I opted to use a global event handler rather than setting up individual event handlers. My thought was that setting up a bunch of event registrations and then removing aforementioned DOM elements would create a minor memory leak potentially? Not sure.
* When creating large blocks of HTML, I found directly writing to .innerHTML more convenient than building out the DOM programmatically. I'd imagine it to be more performant as well, since there are less operations with just a single assignment.

## Lessons Learned

* Can use element:hover newelement { } to modify the appearance (including visibility) of child elements when hovering over a parent element.
* <Select> creates combo-boxes in HTML
* Using .prototype.function.call() allowed me to call functions on similar objects that don't directly inherit from a parent (e.g. Array functions on NodeLists)
