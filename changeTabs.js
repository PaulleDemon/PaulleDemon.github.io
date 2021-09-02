function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

   // Get the element with id="defaultOpen" and click on it
window.onload = init;

function init(){
    document.getElementById("defaultOpen").click()
  }

//   window.onscroll = function(e) {
//     // print "false" if direction is down and "true" if up
//     console.log(this.oldScroll > this.scrollY);
    
//     var element = document.getElementById('tab');
    

//     if (this.oldScroll > this.scrollY){
//         element.style.position = 'sticky';
//         element.style.top = '0px';
//     }
    
//     else{
//       element.style.position = 'none';
//       element.style.top = '0px';

//     }

    
//     this.oldScroll = this.scrollY;
    
//   }