var buttons = document.getElementsByClassName("add_to_cart");
var items=[0,0,0,0,0];
var items_Cart=[]
console.log(items);
var cart = 0;
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function() {
        cart = document.getElementById("cart_fig").innerText;
        cart=eval(cart)+1;
        document.getElementById("cart_fig").innerText=cart;
        var item_list = buttons[i].classList;

        if(item_list.contains("p1")){
            console.log("p1");
            items[0]+=1;
        }if(item_list.contains("p2")){
            console.log("p2");
            items[1]+=1;
        }if(item_list.contains("p3")){
            console.log("p3");
            items[2]+=1;
        }if(item_list.contains("p4")){
            console.log("p4");
            items[3]+=1;
        }if(item_list.contains("p5")){
            console.log("p5");
            items[4]+=1;
        }        
        console.log("items=>"+items);
        // items_Cart=item_list
    })
   
}

function addelement(title,img,price){
    var prnt = document.getElementById("cont");
    const child = document.createElement("div");
    child.innerHTML=
    '<div class="pro1" ><div style="width: 30%;" class="prod_img_cart"><img src='+img +' style="height: 300px; width: 200px; position: relative;"></div><div class="abt" ><h2 style="margin-bottom: 0px; ">'+title+'</h2></b></div><div class="amount"><sup><img src="./imgs/rupee.png" alt="" class="rupee"></sup><span class="prod_price">'+price+' <img src="./imgs/delete.png" style="height:1rem;width:1rem"></span></div></div>'
    prnt.appendChild(child);
   
    
}

function addelementbook(){
    addelement("Do not Believe Everything You Think (English)",'./imgs/book.jpg',180);
}
function addelementphone(){
    addelement("Apple iPhone 13 (256GB) - Midnight",'./imgs/phone.jpg',61890);
}
function addelementwatch(){
    addelement("Timex Men Stainless Steel E-Class Surgical Steel Charge Chronograph Analog Black Dial Watch-Tweg19303, Band Color-Multicolor",'./imgs/watch.webp',6897);
}
function addelementspeaker(){
    addelement("ZEBRONICS Juke BAR 3902 Soundbar with 100 Watts, HDMI (ARC), Optical, USB, AUX, Bluetooth v5.0, Virtual 5.1, Wall Mountable Design",'./imgs/speaker.webp',4499);
}
function addelementtablet(){
    addelement("Samsung Galaxy Tab A9+ 27.94 cm (11.0 inch) Display, RAM 8 GB, ROM 128 GB Expandable, Wi-Fi Tablet, Graphite",'./imgs/tablet.webp',20990);
}

// items=[1,1,1,1,1]
// item_list=items_Cart
// for(let i=0;i<items.length;i++){
//     console.log(items[i]);
//     if(items[i]!=0){
//         switch (i){
//             case 0:
//                 addelementbook();
//                 break;
//             case 1:
//                 addelementphone();
//                 break;
//             case 2:
//                 addelementwatch();
//                 break;
//             case 3:
//                 addelementspeaker();
//                 break;
//             case 4:
//                 addelementtablet();
//                 break;
//         }
//     }
// }
addelementbook();
addelementwatch();
addelementphone();
addelementspeaker();
addelementtablet();

if(window.matchMedia(("max-width:400px"))){
    var abtClass = document.getElementsByClassName("abt");
    console.log("abt=>"+abtClass);
    for(let i=0;i<abtClass.length;i++){
        console.log("abt=>"+abtClass[i]);
        abtClass[i].setAttribute("margin-left","0px");
        abtClass[i].setAttribute("float"," ");
    }
}