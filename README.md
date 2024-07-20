<h1 align="center">MY JS Library Test</h1> 

## `for ID`
```js
const ID = (selector) => {
   const self = document.getElementById(selector);
   self.on = (event, fun) => {
      self.addEventListener(event, fun);
   };
   self.click = (fun, once = false) => {
      self.addEventListener("click", fun, { once });
   };
   self.text = (text) => (self.innerText = text);
   self.html = (html) => (self.innerText = html);
   return self;
};
```

## `for Query Selector`

```js
const $ = (selector) => {
   const self = document.querySelector(selector);
   self.on = (event, fun) => {
      self.addEventListener(event, fun);
   };
   self.click = (fun, once = false) => {
      self.addEventListener("click", fun, { once });
   };
   self.text = (text) => (self.innerText = text);
   self.html = (html) => (self.innerText = html);
   return self;
};
```

## `for Query Selector All`

```js
const $$ = (selector) => {
   const self = document.querySelectorAll(selector);
   self.on = (event, fun) => {
      self.forEach((element) => {
         element.addEventListener(event, fun);
      });
   };
   self.click = (fun, once = false) => {
      self.forEach((element, i) => {
         element.addEventListener("click", (e) => fun(e, element, i), { once });
      });
   };
   self.removeClass = (className) => {
      self.forEach((element) => {
         element.classList.remove(className);
      });
   };
   self.each = (fun) => self.forEach(fun);
   self.map = (fun) => self.map(fun);
   return self;
};
```

## `New Updated Library`

```js
(() => {
   /**
    * Adds an event listener to the element.
    * @param {string} event - The event type (e.g., "click").
    * @param {Function} fun - The callback function to run when the event occurs.
    * @returns {HTMLElement} - Returns the element for chaining.
    */
   HTMLElement.prototype.on = function(event, fun) {
      this.addEventListener(event, (ev) => fun(ev, this));
      return this;
   };

   /**
    * Adds a click event listener to the element.
    * @param {Function} fun - The callback function to run when the element is clicked.
    * @returns {HTMLElement} - Returns the element for chaining.
    */
   HTMLElement.prototype.click = function(fun) {
      this.addEventListener("click", (ev) => fun(ev, this));
      return this;
   };

   /**
    * Adds a class to the element.
    * @param {string} className - The class name to add.
    * @returns {HTMLElement} - Returns the element for chaining.
    */
   HTMLElement.prototype.addClass = function(className) {
      this.classList.add(className);
      return this;
   };

   /**
    * Removes a class from the element.
    * @param {string} className - The class name to remove.
    * @returns {HTMLElement} - Returns the element for chaining.
    */
   HTMLElement.prototype.removeClass = function(className) {
      this.classList.remove(className);
      return this;
   };

   /**
    * Toggles a class on the element.
    * @param {string} className - The class name to toggle.
    * @returns {HTMLElement} - Returns the element for chaining.
    */
   HTMLElement.prototype.toggleClass = function(className) {
      this.classList.toggle(className);
      return this;
   };

   /**
    * Sets or gets the inner HTML of the element.
    * @param {string} [html] - The HTML to set. If not provided, the HTML of the element is returned.
    * @returns {HTMLElement|string|null} - Returns the element for chaining or the HTML of the element.
    */
   HTMLElement.prototype.html = function(html) {
      if (html !== undefined) {
         this.innerHTML = html;
         return this;
      } else {
         return this.innerHTML;
      }
   };

   /**
    * Sets or gets the text content of the element.
    * @param {string} [text] - The text content to set. If not provided, the text content of the element is returned.
    * @returns {HTMLElement|string|null} - Returns the element for chaining or the text content of the element.
    */
   HTMLElement.prototype.text = function(text) {
      if (text !== undefined) {
         this.textContent = text;
         return this;
      } else {
         return this.textContent;
      }
   };

   /**
    * Sets or gets an attribute on the element.
    * @param {string} name - The attribute name.
    * @param {string} [value] - The attribute value to set. If not provided, the attribute value of the element is returned.
    * @returns {HTMLElement|string|null} - Returns the element for chaining or the attribute value of the element.
    */
   HTMLElement.prototype.attr = function(name, value) {
      if (value !== undefined) {
         this.setAttribute(name, value);
         return this;
      } else {
         return this.getAttribute(name);
      }
   };

   /**
    * Sets or gets a CSS property on the element.
    * @param {string} property - The CSS property name.
    * @param {string} [value] - The CSS value to set. If not provided, the computed style of the element is returned.
    * @returns {HTMLElement|string|null} - Returns the element for chaining or the computed style of the element.
    */
   HTMLElement.prototype.css = function(property, value) {
      if (value !== undefined) {
         this.style[property] = value;
         return this;
      } else {
         return getComputedStyle(this)[property];
      }
   };

   /**
    * Sets or gets the value of the element.
    * @param {string} [value] - The value to set. If not provided, the value of the element is returned.
    * @returns {HTMLElement|string|null} - Returns the element for chaining or the value of the element.
    */
   HTMLElement.prototype.value = function(value) {
      if (value !== undefined) {
         this.value = value;
         return this;
      } else {
         return this.value;
      }
   };

   /**
    * Executes a function on each element in the NodeList.
    * @param {Function} fun - The function to execute on each element.
    * @returns {NodeList} - Returns the NodeList for chaining.
    */
   NodeList.prototype.each = function(fun) {
      this.forEach((element, i) => fun(element, i));
      return this;
   };

   /**
    * Adds an event listener to each element in the NodeList for a specified event.
    * @param {string} event - The event type (e.g., "click").
    * @param {Function} fun - The callback function to run when the event occurs.
    * @returns {NodeList} - Returns the NodeList for chaining.
    */
   NodeList.prototype.on = function(event, fun) {
      this.forEach((element, i) => element.on(event, (ev) => fun(ev, i, element)));
      return this;
   };

   /**
    * Adds a click event listener to each element in the NodeList.
    * @param {Function} fun - The callback function to run when the element is clicked.
    * @returns {NodeList} - Returns the NodeList for chaining.
    */
   NodeList.prototype.click = function(fun) {
      this.forEach((element, i) => element.click((ev) => fun(ev, i, element)));
      return this;
   };

   /**
    * Adds a class to each element in the NodeList.
    * @param {string} className - The class name to add.
    * @returns {NodeList} - Returns the NodeList for chaining.
    */
   NodeList.prototype.addClass = function(className) {
      this.forEach((element) => element.addClass(className));
      return this;
   };

   /**
    * Removes a class from each element in the NodeList.
    * @param {string} className - The class name to remove.
    * @returns {NodeList} - Returns the NodeList for chaining.
    */
   NodeList.prototype.removeClass = function(className) {
      this.forEach((element) => element.removeClass(className));
      return this;
   };

   /**
    * Toggles a class on each element in the NodeList.
    * @param {string} className - The class name to toggle.
    * @returns {NodeList} - Returns the NodeList for chaining.
    */
   NodeList.prototype.toggleClass = function(className) {
      this.forEach((element) => element.toggleClass(className));
      return this;
   };

   /**
    * Sets or gets the inner HTML of each element in the NodeList.
    * @param {string} [html] - The HTML to set. If not provided, the HTML of the first element is returned.
    * @returns {NodeList|string|null} - Returns the NodeList for chaining or the HTML of the first element.
    */
   NodeList.prototype.html = function(html) {
      if (html !== undefined) {
         this.forEach((element) => element.html(html));
         return this;
      } else {
         return this.length > 0 ? this[0].html() : null;
      }
   };

   /**
    * Sets or gets the text content of each element in the NodeList.
    * @param {string} [text] - The text content to set. If not provided, the text content of the first element is returned.
    * @returns {NodeList|string|null} - Returns the NodeList for chaining or the text content of the first element.
    */
   NodeList.prototype.text = function(text) {
      if (text !== undefined) {
         this.forEach((element) => element.text(text));
         return this;
      } else {
         return this.length > 0 ? this[0].text() : null;
      }
   };

   /**
    * Sets or gets an attribute on each element in the NodeList.
    * @param {string} name - The attribute name.
    * @param {string} [value] - The attribute value to set. If not provided, the attribute value of the first element is returned.
    * @returns {NodeList|string|null} - Returns the NodeList for chaining or the attribute value of the first element.
    */
   NodeList.prototype.attr = function(name, value) {
      if (value !== undefined) {
         this.forEach((element) => element.attr(name, value));
         return this;
      } else {
         return this.length > 0 ? this[0].attr(name) : null;
      }
   };

   /**
    * Sets or gets a CSS property on each element in the NodeList.
    * @param {string} property - The CSS property name.
    * @param {string} [value] - The CSS value to set. If not provided, the computed style of the first element is returned.
    * @returns {NodeList|string|null} - Returns the NodeList for chaining or the computed style of the first element.
    */
   NodeList.prototype.css = function(property, value) {
      if (value !== undefined) {
         this.forEach((element) => element.css(property, value));
         return this;
      } else {
         return this.length > 0 ? this[0].css(property) : null;
      }
   };

   /**
    * Sets or gets the value of each element in the NodeList.
    * @param {string} [value] - The value to set. If not provided, the value of the first element is returned.
    * @returns {NodeList|string|null} - Returns the NodeList for chaining or the value of the first element.
    */
   NodeList.prototype.value = function(value) {
      if (value !== undefined) {
         this.forEach((element) => element.value(value));
         return this;
      } else {
         return this.length > 0 ? this[0].value() : null;
      }
   };
})();

/**
 * A utility function for selecting and manipulating DOM elements.
 * @param {string} selector - The CSS selector to match elements.
 * @param {HTMLElement} [parent=document] - The parent element to search within. Defaults to the document.
 * @returns {NodeListOf<HTMLElement>} - A NodeList of matched elements.
 */
const I = (selector, parent = document) => parent.querySelectorAll(selector);

```

