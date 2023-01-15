console.log("dimensions of elements")
// height, width
const sectionTodoDim = document.querySelector(".section-todo")
const secDims = sectionTodoDim.getBoundingClientRect()
console.log("secDims = ", secDims)
const secDimsHeight = sectionTodoDim.getBoundingClientRect().height
console.log("secDimsHeight = ", secDimsHeight)