/* 
 This file was generated by Dashcode.  
 You may edit this file to customize your widget or web page 
 according to the license.txt file included in the project.
 */

//
// Function: load()
// Called by HTML body element's onload event when the widget is ready to start
//


var dic=[
  "recapitulate:总结，概括",
  "capitulate:有条件投降",
  "reconstitute:加水",
  "constitute:制定，任命",
  "personage:名人",
  "turmoil:平静",
  "soporific:催眠",
  "proprietary:所有权",
  "appropriation:挪用",
  "altitude:能力",
  "accusatory:控告",
  "generate:形成",
  "genuine:真的",
  "congenial:性格相似",
  "trenchant:深刻",
  "complex:珍惜,复杂",
  "decent:体面",
  "indecorous:不体面",
  "unseemly:不体面",
  "buffoonery:幽默滑稽",
  "penetrate:渗透",
  "perpetrate:做坏事",
  "perpetuate:保持，长久"
  
  
  
]




function load()
{
    dashcode.setupParts();
}





//
// Function: remove()
// Called when the widget has been removed from the Dashboard
//
function remove()
{
    // Stop any timers to prevent CPU usage
    // Remove any preferences as needed
    // widget.setPreferenceForKey(null, dashcode.createInstancePreferenceKey("your-key"));
}

//
// Function: hide()
// Called when the widget has been hidden
//
function hide()
{
    // Stop any timers to prevent CPU usage
}

//
// Function: show()
// Called when the widget has been shown
//
function show()
{
    // Restart any timers that were stopped on hide
}

//
// Function: sync()
// Called when the widget has been synchronized with .Mac
//
function sync()
{
    // Retrieve any preference values that you need to be synchronized here
    // Use this for an instance key's value:
    // instancePreferenceValue = widget.preferenceForKey(null, dashcode.createInstancePreferenceKey("your-key"));
    //
    // Or this for global key's value:
    // globalPreferenceValue = widget.preferenceForKey(null, "your-key");
}

//
// Function: showBack(event)
// Called when the info button is clicked to show the back of the widget
//
// event: onClick event from the info button
//
function showBack(event)
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if (window.widget) {
        widget.prepareForTransition("ToBack");
    }

    front.style.display = "none";
    back.style.display = "block";

    if (window.widget) {
        setTimeout('widget.performTransition();', 0);
    }
}

//
// Function: showFront(event)
// Called when the done button is clicked from the back of the widget
//
// event: onClick event from the done button
//
function showFront(event)
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if (window.widget) {
        widget.prepareForTransition("ToFront");
    }

    front.style.display="block";
    back.style.display="none";

    if (window.widget) {
        setTimeout('widget.performTransition();', 0);
    }
}

if (window.widget) {
    widget.onremove = remove;
    widget.onhide = hide;
    widget.onshow = show;
    widget.onsync = sync;
}

i=0
length=dic.length



function myClickHandler2(event)
{
     // 您提供的值
    var textAreaToChange = document.getElementById("textarea");	// 替换为文本区的 ID
    
    
    textAreaToChange.value=dic[i].split(":")[0]+'\n'+'\n'+dic[i].split(":")[1];
    if(i<length-1)
    {i=i+1;}
    else{
    i=0
    }
}
