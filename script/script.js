// onclick function //
function changeColor() {
    document.body.style.backgroundColor = 
    'rgb('+ Math.round(Math.random()*255) +
    ',' + Math.round(Math.random()*255) +
    ',' + Math.random(Math.random()*255) + ')'
}

// script for //


const gradientBox = document.querySelector(".gradient-box");  // FOR gradient BOX //

const selectMenu = document.querySelector(".select-box select");  // direction ka liya //
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshbtn = document.querySelector(".refresh")
const copyBtn = document.querySelector(".copy")


const getRandomColor = () => {
    // generating a random color in hec=xadecimal format . Example: #562344  //
    const randomHex = Math.floor(Math.random()* 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if(isRandom){ // if isRandom is true , update the color inputs value with random color 
       colorInputs[0].value = getRandomColor();
       colorInputs[1].value = getRandomColor();
    }
   // console.log("Color update.....");     pehla ya likh ka try karna ha ki run ho rha ha ya nhi //
   // creating a gradient string using the select menu value with color input value  //
   const gradient = `linear-gradient(${selectMenu.value},${colorInputs[0].value}, ${colorInputs[1].value})`;
   gradientBox.style.background = gradient;
   textarea.value = `background: ${gradient};`;  // for textarea live gradient adding //
   
}

const copyCode = () => {
    // Copying textarea value and updating the copy button text //
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Code Copied";
    setTimeout(() => copyBtn.innerText = "Copy Code" , 1600);
}

colorInputs.forEach(input =>{
    // calling generateGradient function on each color input clicks
     input.addEventListener("input",() => generateGradient());
});

selectMenu.addEventListener("change",() => generateGradient(false));
refreshbtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", () => copyCode(true));

