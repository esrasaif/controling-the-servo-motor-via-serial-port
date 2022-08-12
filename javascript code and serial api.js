var speechRecognition = window.webkitSpeechRecognition
var recoginion = new speechRecognition()
var textbox = $("#textbox")
var  instructions = $("#instructions")
var content = ''

recoginion.continuous = true 

// recoginion i9s started

recoginion.onstart = function(){
    instructions.text("Recognition started ")

}

recoginion.onspeechend = function(){
    instructions.text("there is no voice")

}

recoginion.onerror = function(){
    instructions.text("Try again, Please! ")

}

recoginion.onresult = function(event){
      var current = event.resultIndex;
      var transcript = event.results[current][0].transcript
      content += transcript
      textbox.val(content)

}

$("#start-btn").click(function(event){
    if(content.length)
    {   content += ' '      }
    recoginion.start()
})

textbox.on('input',function(){

    content = $(this).val()
})

////////////////////////////////////////////////////////////////////////////



   //detect the Web Serial API#
if ("serial" in navigator) {
  // The Web Serial API is supported.
}

//Open a serial port #
document.querySelector('#conect').addEventListener('click', async () => {
  // Prompt user to select any serial port.
   port = await navigator.serial.requestPort();
   await port.open({ baudRate: 9600 });
   
//Read from a serial port#
   const textDecoder=new TextDecoderStream();
   const readableSteamClosed=port.readable.pipeTo(textDecoder.writable);
   const reader = port.readable.getReader();

// Listen to data coming from the serial device.
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    // Allow the serial port to be closed later.
    reader.releaseLock();
    break;
  }
  // value is a Uint8Array.
  console.log(value);

//Write to a serial port#
const textEncoder = new TextEncoderStream();
const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);

const writer = textEncoder.writable.getWriter();

await writer.write(Content);
writer.close();
await writableStreamClosed;

}
   
});

//Close a serial port #
await port.close();
