
// // scroll bar script
// window.onscroll = function() {
//     myFunction()
// };

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }



// // smooth up script
// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
  
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
  
//   window.addEventListener("scroll", reveal);

  

// // about box script
// let tablinks = document.getElementsByClassName("tab-links");
// let tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname){
//     for(let i of tablinks){
//         i.classList.remove("active-link");
//     }
//     for(let i of tabcontents){
//         i.classList.remove("active-tab");
//     }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab");
// }
// Wrap the entire script in an event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {

  // scroll bar script
  window.onscroll = function() {
    updateScrollBar();
  };

  function updateScrollBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  // smooth up script
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    reveals.forEach(function(reveal) {
      var windowHeight = window.innerHeight;
      var elementTop = reveal.getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      } else {
        reveal.classList.remove("active");
      }
    });
  }

  // Use debounce to improve performance and prevent too many function calls
  var debounceReveal = debounce(reveal, 50);
  window.addEventListener("scroll", debounceReveal);

  // about box script
  let tablinks = document.querySelectorAll(".tab-links");
  let tabcontents = document.querySelectorAll(".tab-contents");

  function opentab(event, tabname) {
    event.preventDefault();

    tablinks.forEach(function(link) {
      link.classList.remove("active-link");
    });

    tabcontents.forEach(function(content) {
      content.classList.remove("active-tab");
    });

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

  // Debounce function to improve performance
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

});
