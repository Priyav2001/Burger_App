for (var clickMoreButton of
    document.getElementsByClassName("saladbutton1"))
    clickMoreButton.addEventListener("click", alertMeessageSalad);
    function alertMeessageSalad() {
        var src = document.getElementById("topside");

        const box = document.createElement("div");
        box.className = "Saladfill";
        console.log("adding image");
        src.appendChild(box);

        console.log("adding salad");
    }
for (var clickMoreButton of
    document.getElementsByClassName("baconbutton1"))
    clickMoreButton.addEventListener("click", alertMeessageBacon);
    function alertMeessageBacon() {
    var src = document.getElementById("topside");

    const box = document.createElement("div");
    box.className = "Baconfill";
    console.log("adding image");
    src.appendChild(box);

    console.log("adding bacon");
    }
for (var clickMoreButton of
    document.getElementsByClassName("cheesebutton1"))
    clickMoreButton.addEventListener("click", alertMeessageCheese);
    function alertMeessageCheese() {
        var src = document.getElementById("topside");
    
        const box = document.createElement("div");
        box.className = "Cheesefill";
        console.log("adding image");
        src.appendChild(box);
    
        console.log("adding cheese");
    }
for (var clickMoreButton of
    document.getElementsByClassName("meatbutton1"))
    clickMoreButton.addEventListener("click", alertMeessageMeat);
    function alertMeessageMeat() {
        
    var src = document.getElementById("topside");

    const box = document.createElement("div");
    box.className = "Meatfill";
    console.log("adding image");
    src.appendChild(box);

    console.log("adding meat");

    }
    // for (var clickLessButton of
    //     document.getElementsByClassName("button button2"))
    //     clickLessButton.addEventListener("click", alertMeessage2);
    //     function alertMeessage2() {
    //         console.log("removing");
    //         alert("You have clicked the Less button");
    //     }
for (var clickLessButton of
    document.getElementsByClassName("saladbutton2"))
    clickLessButton.addEventListener("click", alertMeessageSaladless);
    function alertMeessageSaladless() {   
        var srcsalad= document.getElementById("topside");
        var xsalad="Salad";
        descendents = srcsalad.getElementsByTagName('*');
        var i;
        for (i = 0; i < descendents.length; i++) {
            console.log("iiteration");
            var ysalad=descendents[i].className;
            console.log("y"+typeof y);
            if (ysalad.includes(xsalad))
            {
                console.log("salad removed");
                descendents[i].parentNode.removeChild(descendents[i]);
                break;
            }
        }
            console.log("adding salad less");
    
        }
for (var clickLessButton of
    document.getElementsByClassName("baconbutton2"))
    clickLessButton.addEventListener("click", alertMeessageBaconless);
    function alertMeessageBaconless() {   
        var srcbacon= document.getElementById("topside");
        var xbacon="Bacon";
        descendents = srcbacon.getElementsByTagName('*');
        var i;
        for (i = 0; i < descendents.length; i++) {
            console.log("iiteration");
            var ybacon=descendents[i].className;
            console.log("y"+typeof y);
            if (ybacon.includes(xbacon))
            {
                console.log("bacon removed");
                descendents[i].parentNode.removeChild(descendents[i]);
                break;
            }
        }
            console.log("adding bacon less");
    
        }
    
for (var clickLessButton of
    document.getElementsByClassName("cheesebutton2"))
    clickLessButton.addEventListener("click", alertMeessageCheeseless);
    function alertMeessageCheeseless() {   
        var srccheese = document.getElementById("topside");
        var xcheese="Cheese";
        descendents = srccheese.getElementsByTagName('*');
        var i;
        for (i = 0; i < descendents.length; i++) {
            console.log("iiteration");
            var ycheese=descendents[i].className;
            console.log("y"+typeof y);
            if (ycheese.includes(xcheese))
            {
                console.log("cheese removed");
                descendents[i].parentNode.removeChild(descendents[i]);
                break;
            }
        }
            console.log("adding cheese less");
    
        }

for (var clickLessButton of
    document.getElementsByClassName("meatbutton2"))
    clickLessButton.addEventListener("click", alertMeessageMeatless);
    function alertMeessageMeatless() {   
        var src = document.getElementById("topside");
        var x="Meat";
        descendents = src.getElementsByTagName('*');
        var i;
        for (i = 0; i < descendents.length; i++) {
            console.log("iiteration"+descendents[i].className);
            var y=descendents[i].className;
            var item=document.getElementsByClassName(y);
            console.log("y"+typeof y);
            if (y.includes(x))
            {
                descendents[i].parentNode.removeChild(descendents[i]);
                break;
            }
        }
        // const box = document.createElement("div");
        // box.className = "Meatlessfill";
        // console.log("adding image");
        // src.appendChild(box);
    
        console.log("adding meat less");

    }




