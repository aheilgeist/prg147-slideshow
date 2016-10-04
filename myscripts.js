var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};
var i = 0; //for loop counter
var thumb1 = 0;
var thumb2 = 1;
var thumb3 = 2;
var thumb4 = 3;
var thumb5 = 4;
var image = new Image(); // creates an image object
var image2 = new Image(); // large images


// declaring arrays
var images = ["thumbs/thumb1.jpg", "thumbs/thumb2.jpg", "thumbs/thumb3.jpg", "thumbs/thumb4.jpg", "thumbs/thumb5.jpg", "thumbs/thumb6.jpg", "thumbs/thumb7.jpg", "thumbs/thumb8.jpg", "thumbs/thumb9.jpg", "thumbs/thumb10.jpg", "thumbs/thumb11.jpg", "thumbs/thumb12.jpg", "thumbs/thumb13.jpg", "thumbs/thumb14.jpg", "thumbs/thumb15.jpg"];
var largeImages = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg", "images/image7.jpg", "images/image8.jpg", "images/image9.jpg", "images/image10.jpg", "images/image11.JPG", "images/image12.JPG", "images/image13.JPG", "images/image14.jpg", "images/image15.jpg"];
var title = ["Rustic Wood Fence", "Naturally Framed Fountain", "Looking Up", "My Fur-Baby", "Blue Sky and Whispy Clouds", "Another Blue-Sky Day", "A visit to the McHenry Dam", "Hmmm...", "Line and Shape Project", "This says it is summertime", "Is it time to eat?", "Let's go for a walk", "Searching for lunch", "Living Fireworks", "Purple Flowers!"];
var descripton = ["Pretty scene at the entrance to Morraine Hills State Park in McHenry, IL.", "This photo was taken in my subdivision.  I framed the fountain naturally with pine trees.", "This cool shot is the ceiling of a gazebo.", "Who needs children when you have a cat like Lexi.", "I really liked the cloud formations in this photo.", "This shot was interesting in the way that the sky, the clouds and the treeline all dip in the same spot.", "My friend Tom by the McHenry Dam.", "Tom pretending to be sleeping.  Or is he really??", "Part of a project for Photography class.", "Lovely yellow and white daisies.", "In and Out Burgers in Las Vegas served up this amazing lunch.", "Beautiful walking path throught the woods at Morraine Hills State Park.", "This heron was found at the McHenry Dam looking for it's lunch for the day.", "Every time I see these I am reminded of fireworks for some reason.", "Need I ask for more?  I love flowers plus these are my favorite color."];


var count = images.length; // will change if we add more items to the image array

// preloading the images for the slide show
function preload() {
    "use strict";
    for (i = 0; i < count; i++) {
        image.src = images[i];
        image2.src = largeImages[i];
        images.push(image);
        largeImages.push(image2);
    }
}



//moving through the thumbnails
function changeThumbRight() {
    "use strict";
    thumb1++;
    if (thumb1 === count) {
        thumb1 = 0;
    }
    $("one").src = images[thumb1];

    thumb2++;
    if (thumb2 === count) {
        thumb2 = 0;
    }
    $("two").src = images[thumb2];

    thumb3++;
    if (thumb3 === count) {
        thumb3 = 0;
    }
    $("three").src = images[thumb3];

    thumb4++;
    if (thumb4 === count) {
        thumb4 = 0;
    }
    $("four").src = images[thumb4];

    thumb5++;
    if (thumb5 === count) {
        thumb5 = 0;
    }
    $("five").src = images[thumb5];
}

function changeThumbLeft() {
    "use strict";
    thumb1--;
    if (thumb1 === -1) {
        thumb1 = (count -1);
    }
    $("one").src = images[thumb1];

    thumb2--;
    if (thumb2 === -1) {
        thumb2 = (count -1);
    }
    $("two").src = images[thumb2];

    thumb3--;
    if (thumb3 === -1) {
        thumb3 = (count -1);
    }
    $("three").src = images[thumb3];

    thumb4--;
    if (thumb4 === -1) {
        thumb4 = (count -1);
    }
    $("four").src = images[thumb4];

    thumb5--;
    if (thumb5 === -1) {
        thumb5 = (count -1);
    }
    $("five").src = images[thumb5];

}

function button1() {
    "use strict";
    $("large").src = largeImages[thumb1];
    $("title").innerHTML = title[thumb1];
    $("detail").innerHTML = descripton[thumb1];
}

function button2() {
    "use strict";
    $("large").src = largeImages[thumb2];
    $("title").innerHTML = title[thumb2];
    $("detail").innerHTML = descripton[thumb2];
}

function button3() {
    "use strict";
    $("large").src = largeImages[thumb3];
    $("title").innerHTML = title[thumb3];
    $("detail").innerHTML = descripton[thumb3];
}

function button4() {
    "use strict";
    $("large").src = largeImages[thumb4];
    $("title").innerHTML = title[thumb4];
    $("detail").innerHTML = descripton[thumb4];
}
function button5() {
    "use strict";
    $("large").src = largeImages[thumb5];
    $("title").innerHTML = title[thumb5];
    $("detail").innerHTML = descripton[thumb5];
}


function onload() {
    "use strict";
    preload();
}