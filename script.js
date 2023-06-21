

//this shows the correct map depending on the dropdown


function showMap() {
   var city = document.getElementById('City').value;
   if (city === 'valueSelect') {
     document.getElementById('LondonMap').style.display = 'none';
     document.getElementById('LiverpoolMap').style.display = 'none';
     document.getElementById('HullMap').style.display = 'none';
     document.getElementById('ManchesterMap').style.display = 'none';
   } else if (city === 'valueLondon') {
     document.getElementById('LondonMap').style.display = 'block';
     document.getElementById('LiverpoolMap').style.display = 'none';
     document.getElementById('HullMap').style.display = 'none';
     document.getElementById('ManchesterMap').style.display = 'none';
   } else if (city === 'valueManchester') {
     document.getElementById('ManchesterMap').style.display = 'block';
     document.getElementById('LiverpoolMap').style.display = 'none';
     document.getElementById('HullMap').style.display = 'none';
     document.getElementById('LondonMap').style.display = 'none';
   } else if (city === 'valueLiverpool') {
     document.getElementById('LiverpoolMap').style.display = 'block';
     document.getElementById('ManchesterMap').style.display = 'none';
     document.getElementById('HullMap').style.display = 'none';
     document.getElementById('LondonMap').style.display = 'none';
   } else {
     document.getElementById('HullMap').style.display = 'block';
     document.getElementById('LiverpoolMap').style.display = 'none';
     document.getElementById('ManchesterMap').style.display = 'none';
     document.getElementById('LondonMap').style.display = 'none';
   }
 }



//stops the first carousel from changing slides when being hovered on
$("#howToHireCarousel").carousel({
interval: 3000, pause: "hover"
});