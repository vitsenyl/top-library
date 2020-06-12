# Simple Library App

Library App for The Odin Project. Made with vanilla JS, HTML and CSS. 

See the live version: https://vitsenyl.github.io/top-library/

## ToDo
- [x] Add local storage
- [ ] Add Firebox cloud database implementation
- [ ] Prettify the UI

## Discussion behind the Design
If you have any comments or recommendations, I'd love to hear them!

* When dynamically generating DOM elements, I opted to use a global event handler rather than setting up individual event handlers. My thought was that setting up a bunch of event registrations and then removing aforementioned DOM elements would create a minor memory leak potentially? Not sure.
* When creating large blocks of HTML, I found directly writing to .innerHTML more convenient than building out the DOM programmatically. I'd imagine it to be more performant as well, since there are less operations with just a single assignment.
* For localStorage, I originally wanted to store each book as its own object. However since I'm not using a hash table, I wasn't able to generate unique names and simply indexed them in order. I would lose said order upon retrieval, so I ended up storing the entire myLibrary[] as an JSON string of the Book array. 

## Lessons Learned

* Can use element:hover childelement { } to modify the appearance (including visibility) of child elements when hovering over a parent element.
* Using the Select tag creates combo-boxes in HTML 
  ```HTML
   <select name="read-status" id="read-status">
      <option value="Read">Read</option>
      <option value="Reading">Reading</option>
      <option value="Not Read">Not Read</option>
    </select>
  ```
* Using .prototype.function.call() allowed me to call functions on similar objects that don't directly inherit from a parent (e.g. Array functions on NodeLists)
* Use the [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to save data locally as key-value pairs of strings. JSON.stringify() and JSON.parse() allowed me to convert objects into strings. 
