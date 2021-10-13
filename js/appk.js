
$(document).ready(function(){
  $('.food-slider').slick({
    autoplay:true,
    slidesToShow:3,
    slidesToScroll:1,
    prevArrow:".prev-btn",
    nextArrow:".next-btn",
    responsive:[
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
        }
      },
      {
        breakpoint:768,
        settings:{
          slidesToShow:1,
        }
      }
    ]

  });
  $('.nav-trigger').click(function(){
    $('.site-content-wrapper').toggleClass('scaled');
  })
  });
  // seachff
  const searchBox = document.querySelector(".searchh-box");
  const searchBtn = document.querySelector(".searchh-icon");
  const cancelBtn = document.querySelector(".cancell-icon");
  const searchInput = document.querySelector("input");
  const searchData = document.querySelector(".searchh-data");
  searchBtn.onclick =()=>{
    searchBox.classList.add("active");
    searchBtn.classList.add("active");
    searchInput.classList.add("active");
    cancelBtn.classList.add("active");
    searchInput.focus();
    if(searchInput.value != ""){
      var values = searchInput.value;
      searchData.classList.remove("active");
      searchData.innerHTML = "You just typed " + "     " + "<span style='font-weight: 900;'>" + values + "</span>";
    }else{
      searchData.textContent = "";
    }
  }
  cancelBtn.onclick =()=>{
    searchBox.classList.remove("active");
    searchBtn.classList.remove("active");
    searchInput.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchData.classList.toggle("active");
    searchInput.value = "";
  }
  // endseachff
  let digitalclock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
setTimeout(digitalclock,1000);
// setInterval(digitalclock,1000);

}
digitalclock();