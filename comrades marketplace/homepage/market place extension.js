/*
let selection1Variable;
let selectionVariable;
listDisp(categoryArray);
function listDisp(array1){
for(i=0;i<array1.length;i++){
    selectionVariable+=`<option>${array1[i]}</option>`;
}
}
selection1Variable= `<form action="" id="category" class="category2">
<select class="selection1">
${selectionVariable}
</select>

</form>`;
document.querySelector(".category1")
.innerHTML=selection1Variable;
console.log(document.querySelector(".category1")
.innerHTML);*/
const categoryArray=
[
    {
        img:"",
        ads:0,
        item:"Furniture",
        targetLink:""
    },
    {
        img:"",
        ads:0,
        item:"Home",
        targetLink:""
    },
    {
        img:"",
        ads:0,
        item:"Appliances",
        targetLink:""
    },
    {
        img:"",
        ads:0,
        item:"Electronics",
        targetLink:""
    },
    {
        img:"",
        ads:0,
        item:"Health and Beauty",
        targetLink:""
    },
    {
        img:"",
        ads:0,
        item:"phones,Tablets",
        targetLink:""
    },
    {
        img:"",
        ads:0,
        item:"Fashion",
        targetLink:""
    },
    {
        img:"",
        ads:0,
        item:"Sports,Arts&Outdoors",
        targetLink:""
    },
    {
        img:"",
        ads:0,
        item:"Agriculture and Food",
        targetLink:""
    },
    {
        img:"",
        ads:0,
        item:"Jobs",
        targetLink:""
    },
];
let catPar='';
function dispCategory(array1){
for(i=0;i<array1.length;i++){
    array1[i].img+="vehicles logo.PNG";
    catPar+=`<div class="categoryContainer2"><a href="${array1[i].targetLink}" class="catLinks">
    <div style="border:none;"><img src="${array1[i].img}" class="categoriesLogo"></div>
            <div style="margin-left: 3px;">
                <div style="color: rgb(116, 112, 112);">${array1[i].item}</div>
                <div style="color: black; ">${array1[i].ads} ads</div>
    </div></a></div>
    `
}
};
dispCategory(categoryArray);
document.querySelector(".listContainer")
.innerHTML=catPar;
let Items='';
function dispItems(Array1){
    for(i=0;i<Array1.length;i++){
Items+=`  <div class="itemDiv">
            <a href=""> <img src="${Array1[i].img}" class="itemPic"><span class="availableItems">${Array1[i].availableItems}</span></a>
 <button class="saveButton" onclick="saveButton(var1)"><img src="saved product icon.JPG" class="saveButtonPic"></button>
            <label><div  class="itemInfoDiv">
                <div class="profileDiv"><img src="${Array1[i].profilePic}" class="profilePic"><spanclass="profileName">${Array1[i].ProfileName}</span></div>
                <div>${Array1[i].itemName}</div>
                <div class="itemPrice">Ksh ${Array1[i].itemPrice}</div>
            </div><label>
        </div>`
    }
}
let var1=document.querySelector(".saveButton").innerHTML;
function saveButton(button1){
if(button1==='<button class="saveButton"><img src="save product icon.JPG" class="saveButtonPic"></button>'){
    button1='<button class="saveButton"><img src="saved product icon.JPG" class="saveButtonPic"></button>';
}
else{
    button1='<button class="saveButton"><img src="save product icon.JPG" class="saveButtonPic"></button>';
}
document.querySelector(".saveButton").innerHTML=button1;
}
const TrendingAds=[
    {
        img:"IMG-20240418-WA0011.jpg",
        profilePic:"my passport - Copy.JPG",
        ProfileName:"sammie wa wenyewe",
        itemName:"kenpoly plastic chair",
        itemPrice:500,
        availableItems:12

    },
    
];
for(i=0;i<50;i++){
    TrendingAds.push( {
        img:"IMG-20240418-WA0011.jpg",
        profilePic:"my passport - Copy.JPG",
        ProfileName:"sammie wa wenyewe",
        itemName:"kenpoly plastic chair",
        saved:true,
        itempage:"",
        itemPrice:500,
        availableItems:12,
        id:""

    })
}
dispItems(TrendingAds);
document.querySelector(".itemsContainer")
.innerHTML=Items;
