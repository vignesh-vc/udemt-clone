var sidenavbar=document.getElementById("sidenav")
var opennav=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")


opennav.addEventListener("click",function(){
    sidenavbar.style.right=0
    sidenavbar.style.transition="2s"
})

closenav.addEventListener("click",function(){
    sidenavbar.style.right="-50%"
    sidenavbar.style.transition="2s"
})