//Calling the Checkbox Function
function checkboxFunction() {

  // Get the Basic Form container
  var text = document.getElementById("basicContainer");

  // Get the National Processing checkbox
  var nationalCheckBox = document.getElementById("nationalCheck");
  // Get the National Processing container
  var text = document.getElementById("nationalContainer");

  // Get the Defend checkbox
  var defendCheckBox = document.getElementById("defendCheck");
  // Get the Defend container
  var text = document.getElementById("defendContainer");

  // Get the JIVE checkbox
  var jiveCheckBox = document.getElementById("jiveCheck");

  // Get the Solar checkbox
  var solarCheckBox = document.getElementById("solarCheck");
  // Get the Solar container
  var text = document.getElementById("solarContainer");

  // Get the Affiliate container
  var text = document.getElementById("affiliateContainer");

  // Get the Velocity container
  var text = document.getElementById("velocityContainer");

  // Get the Not Valid container
  var text = document.getElementById("notvalidContainer");

  // Get the NorthStar checkbox
  var northstarCheckBox = document.getElementById("northstarCheck");

  // Get the CSP checkbox
  var cspCheckBox = document.getElementById("cspCheck");

  // Get the Tranont Energy checkbox
  var energyCheckBox = document.getElementById("energyCheck");
  // Get the Tranont Energy container
  var text = document.getElementById("energyContainer");

    // Get the Submit container
  var text = document.getElementById("submitContainer");
  

  // If any of the checkboxes are checked, display the Basic Form & Submit containers
  if (nationalCheckBox.checked == true){
    basicContainer.style.display = "block";
    submitContainer.style.display = "block";
  } else if (defendCheckBox.checked == true){
    basicContainer.style.display = "block";
    submitContainer.style.display = "block";
  } else if (jiveCheckBox.checked == true){
    basicContainer.style.display = "block";
    submitContainer.style.display = "block";
  } else if (solarCheckBox.checked == true){
    basicContainer.style.display = "block";
    submitContainer.style.display = "block";
  } else if (northstarCheckBox.checked == true){
    basicContainer.style.display = "block";
    submitContainer.style.display = "block";
  } else if (cspCheckBox.checked == true){
    basicContainer.style.display = "block";
    submitContainer.style.display = "block";
  } else if (energyCheckBox.checked == true){
    basicContainer.style.display = "block";
    submitContainer.style.display = "block";
  } else {
    basicContainer.style.display = "none";
    submitContainer.style.display = "none";
  }

  // If the National Processing checkbox is checked, display the National Processing container
  if (nationalCheckBox.checked == true){
    nationalContainer.style.display = "block";
  } else {
    nationalContainer.style.display = "none";
  }

  // If the Defend checkbox is checked, display the Defend container
  if (defendCheckBox.checked == true){
    defendContainer.style.display = "block";
  } else {
    defendContainer.style.display = "none";
  }

  // If the Solar checkbox is checked, display the Solar container
  if (solarCheckBox.checked == true){
    solarContainer.style.display = "block";
  } else {
    solarContainer.style.display = "none";
    affiliateContainer.style.display = "none";
    velocityContainer.style.display = "none";
    notvalidContainer.style.display = "none";
  }

  // If the Tranont Energy checkbox is checked, display the Tranont Energy container
  if (energyCheckBox.checked == true){
    energyContainer.style.display = "block";
  } else {
    energyContainer.style.display = "none";
  }
}


//Calling the Find Zipcode function
function zipFunction() {

//Declaring the variable
var Zip = zipNumber.value;

//If else statement to select Affiliate or Velocity

//If it is within these parameters, show Velocity Container
if ((Zip >= 93200) && (Zip <= 93426) || (Zip >= 93600) && (Zip <= 96165) || (Zip >=97001) && (Zip <= 97920))  {
    velocityContainer.style.display = "block";
    affiliateContainer.style.display = "none";
    notvalidContainer.style.display = "none";
//If it is within these parameters, show Affiliate Container    
} else if ((Zip >= 10001) && (Zip <= 93199) || (Zip >= 93427) && (Zip <= 93599) || (Zip >=96166) && (Zip <= 97000) || (Zip >=97921) && (Zip <= 99951))  {
    affiliateContainer.style.display = "block";
    velocityContainer.style.display = "none";
    notvalidContainer.style.display = "none";
//If it is within these parameters, say it is "Not a valid ZIP code"   
} else {
  affiliateContainer.style.display = "none";
  velocityContainer.style.display = "none";
  notvalidContainer.style.display = "block";
}
}