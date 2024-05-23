const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0));
console.log(charRange("A", "J")); //[65, 66, 67, 68, 69, 70, 71, 72, 73, 74]
// console.log(charRange(1, 10));
window.onload = () => {
    const container = document.getElementById("container");
    const createLabel = (name) => {
        const label = document.createElement("div");
        label.className = "label";
        label.textContent = name;
        container.appendChild(label);
    };
};