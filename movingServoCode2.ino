#include <Servo.h>
 
int servoPin = 9;
Servo servo;  

 
void setup()
{
  servo.attach(servoPin);
  Serial.begin(9600);
   Serial.setTimeout(10); 
}
 
 
void loop()
{  
  

String text=Serial.readString();
if (text.indexOf("right")>-1){
    delay(1000);
    servo.write(0);
  Serial.println("right");
  
  }elseif(text.indexOf("left")>-1){
     servo.write(180);
        Serial.println("left"); 
 
  }else{
     Serial.write("0");
    }
delay(1000);
}




 















  
}
