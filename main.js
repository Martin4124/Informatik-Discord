const hamburger = document.getElementById("hamburgermenu")
const nav = document.getElementById("nav-ul")
const hamburgerSVG = document.getElementById("hamburger-svg")
const InterfaceMobile = document.querySelector(".Interface-mobile")
const PressVC = document.getElementById("press-voicechannel")
const VCText = document.getElementById("VC-text")
const PressTC = document.getElementById("press-textchannel")
const TCText = document.getElementById("TC-text")
const PressADD = document.getElementById("press-Add")
const AddText = document.getElementById("Add-text")
const PressGroup = document.getElementById("press-Group")
const GroupText = document.getElementById("Group-text")
const PressFriends = document.getElementById("press-Friends")
const FriendsText = document.getElementById("Friends-text")
const PressSearch = document.getElementById("press-Search")
const SearchText = document.getElementById("Search-text")
const PressTag = document.getElementById("press-Tag")
const TagText = document.getElementById("Tag-text")

hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-show");
    hamburgerSVG.classList.toggle("fa-bars")
    hamburgerSVG.classList.toggle("fa-times")
});


PressVC.addEventListener("click", () => {
    VCText.classList.toggle("hide");
});
PressTC.addEventListener("click", () => {
    TCText.classList.toggle("hide");
});
PressADD.addEventListener("click", () => {
    AddText.classList.toggle("hide");
});
PressGroup.addEventListener("click", () => {
    GroupText.classList.toggle("hide");
});
PressFriends.addEventListener("click", () => {
    FriendsText.classList.toggle("hide");
});
PressSearch.addEventListener("click", () => {
    SearchText.classList.toggle("hide");
});
PressTag.addEventListener("click", () => {
    TagText.classList.toggle("hide");
});