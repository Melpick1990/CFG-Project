//this may stick the dropdown label
//$(function(){

//    $(".dropdown-menu li a").click(function(){

//      $(".btn:first-child").text($(this).text());
//      $(".btn:first-child").val($(this).text());

//   });

//});

//this may show the correct map depending on the dropdown
//$("#locationDropdown").on('show.bs.dropdown', function () {// do something…})

function showMap(){
    city = document.getElementById('City');
    if (city == 'valueLondon')
    {
       document.getElementById('LondonMap').style.display='block'
       document.getElementById('LiverpoolMap', 'HullMap', 'ManchesterMap'.style.display='none'
    }
    else if (city == 'valueManchester')
    {
       document.getElementById('ManchesterMap').style.display='block'
       document.getElementById('LiverpoolMap', 'HullMap', 'LondonMap').style.display='none'
    }
    else if (city == "valueLiverpool")
    {
       document.getElementById("LiverpoolMap").style.display='block'
       document.getElementById("ManchesterMap", "HullMap", "LondonMap").style.display='none'
    }
    else
    {
       document.getElementById("HullMap").style.display='block'
       document.getElementById("LiverpoolMap", "ManchesterMap", "LondonMap").style.display='none'
    }
    }
    
    
    //stops the first carousel from changing slides when being hovered on
    $("#howToHireCarousel").carousel({
       interval: 300, pause: "hover"
    });