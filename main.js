const aTag = document.querySelectorAll(".name");

aTag.forEach((tag, i) => {
   tag.innerHTML = `Name is ${i + 1}`;
});

aTag.forEach(tag => {
   tag.addEventListener("click", (e) => {
      document.getElementById("output").innerHTML = e.target.innerText;
   })
})

const tags = $$(".name");

tags.each((tag, i) => {
   tag.innerHTML = `Name is ${i + 1}`;
});

tags.click((e) => {
   ID("output").innerHTML = e.target.innerText;
})

tags.on("mouseenter", (e, ele, i) => {
   console.log(e, ele, i);
})