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
