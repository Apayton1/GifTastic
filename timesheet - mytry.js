// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyATbmCERD6MJd8jZOcJy_qTTXYGkPQRPrQ",
    authDomain: "apayton-baaf4.firebaseapp.com",
    databaseURL: "https://apayton-baaf4.firebaseio.com",
    projectId: "apayton-baaf4",
    storageBucket: "",
    messagingSenderId: "204631347713",
    appId: "1:204631347713:web:6adeaec970c21b1f"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);


//   $(".submitButton").on("click", function(){
//       console.log("clicked");
//   })

  var database = firebase.database();



//   database.ref.on("value", function(snapshot){
    
//   })

$("#submitButton").on("click", function (e) {
    e.preventDefault();
    var addName = $("#employeeNameText").val();
    var addRole = $("#roleText").val().trim();
    var addStartDate = $("#startDateText").val().trim();
    var addRate = $("#monthlyRateText").val();
    
    console.log(addName);
    console.log("clicked");
    database.ref().set({
        name: addName,
        role: addRole,
        startDate:addStartDate,
        Rate:addRate,
    });
    console.log(database.name);
    console.log(database.role);
})

