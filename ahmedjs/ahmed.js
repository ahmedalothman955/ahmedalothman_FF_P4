
document.write("<h1>opdracht 1</h1> ");
document.write("<h3> met  do while  loop</h3> ");
console.log("<h1>opdracht 1</h1>"+"<h3> met  do while  loop</h3>");
document.write("<h3>1-1</h3>");
console.log("<h3>1-1</h3>");

var i=0;
do {
    switch (i) {
        case 0:
            text = "*";
        break;
        case 1:
            text = "**";
        break;
        case 2:
            text = "***";
        break;
        case 3:
            text = "****";
        break;
        case 4:
            text = "*****";
        break;
        case 5:
            text = "******";
        break;
         case 6:
            text = "*******";
        break;
        case 7:
            text = "********";
        break;
        default:
            text = "No value found";
    
    }
    document.write(text);
    document.write("<br>");
    console.log(text);
    console.log("<br>");
    i++;
}
while (i <8);

document.write("<hr>");
document.write("<h1>opdracht 1</h1> ");
document.write("<h3> met    forloop</h3> ");
console.log("<h1>opdracht 1</h1>"+"<h3> met  for  loop</h3>");
document.write("<h3>1-2</h3>");
console.log("<h3>1-2</h3>");

for (i = 0; i < 8; i++) {
    switch (i) {
      case 0:
        text = "*";
        break;
      case 1:
        text = "**";
        break;
        case 2:
        text = "***";
        break;
      case 3:
        text = "****";
        break;
      case 4:
        text = "*****";
        break;
      case 5:
        text = "******";
        break;
      case 6:
        text = "*******";
        break;
      case 7:
        text = "********";
        break;
      default:
        text = "No value found";
    }
    document.write(text);
    document.write("<br>");
    console.log(text);
    console.log("<br>");
}
document.write("<hr>");
document.write("<h1>opdracht 1</h1> ");
document.write("<h3> met    while loop</h3> ");
console.log("<h1>opdracht 1</h1>"+"<h3> met  while  loop</h3>");
document.write("<h3>1-3</h3>");
console.log("<h3>1-3</h3>");

var i=0;
while (i <8) {
    switch (i) {
        case 0:
            text = "*";
            break;
        case 1:
            text = "**";
            break;
        case 2:
            text = "***";
            break;
        case 3:
            text = "****";
            break;
        case 4:
            text = "*****";
            break;
        case 5:
            text = "******";
            break;
         case 6:
            text = "*******";
            break;
        case 7:
            text = "********";
            break;
        default:
            text = "No value found";
    }
    document.write(text);
    document.write("<br>");
    console.log(text);
    console.log("<br>");

    i++;
}

document.write("<hr>");
document.write("<h1>opdracht 2</h1> ");
console.log("<h1>opdracht 1</h1>");

for (i = 0; i <=100; i++) {
    var corona= i % 7;
    var bingo= i %  9;
        if(corona== 0){
            document.write("corona");
            console.log("corona");
        } else {
 	         if(bingo==0){
                document.write("bingo");
                console.log("bingo");
            } else {
                document.write(i);
                console.log(i);
            }
         }
 	
    document.write("<br>");
 }

document.write("<hr>");
document.write("<h1>opdracht 3</h1> ");
console.log("<h1>opdracht 1</h1>");

for (i = 0; i <=7; i++) {
    var result= i % 2; 
 	if(result!=0){
 	    document.write("########"+"<br>");
 	} else {
        document.write("&nbsp&nbsp"+"########"+"<br>");
	}
}




