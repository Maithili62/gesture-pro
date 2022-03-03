prediction1 = "";
prediction2 = "";

Webcam.set({
    height:350,
    width:300,
    image_format:'png',
    png_quality:95
});

camera = document.getElementById("camera");

Webcam.attach('#camera');
console.log("ml5 version : " , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yLGy-a6ux/modal.json' , modalLoaded());

function modalLoaded()
{
    console.log("Modal Loaded");
}

function speak()
{
    var syth = window.speechSynthesis;
    speak_data1 = "The first prediciton is " + prediction1;
    speak_data2 = "And the second prediciton is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    syth.speak(utterThis);
}

function take_snapshot()
{
  Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
  });
  
}