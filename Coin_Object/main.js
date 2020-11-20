let coin = {
  state: 0,
  flip: function () {
    let headsOrTails = calculateRandomOneOrZero();
    this.state = headsOrTails;

    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
  },
  toString: function () {
    if (this.state === 1) {
      return "Heads";
    } else {
      return "Tails";
    }

    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
  },
  toHTML: function () {
    let images = document.createElement("img");
    images.style.width = "100px";
    images.style.height = "100px";
    images.src = "./images/Heads.jpg/Tails.jpg";
    images.append();
    document.body.append(images);
    let ilist = document.images;

    for (let i = 0; i < ilist.length; i++) {
      if (ilist[i].src == "Heads.jpg") {
        // found the Head
      }
    }
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    return images;
  },
};

function display20Flips() {}
for (let i = 1; i <= 20; i++) {
  let numDiv = document.createElement("div");
  numDiv.append(i);
  document.body.append(numDiv);
}

function display20Images() {
  for (let j = 0; j <= 20; j++) {
    let numDiv1 = document.createElement("div");
    numDiv1.append(j);
    document.body.append(numDiv1);
  }
}
for (let Heads = 1; Heads <= 20; Heads++) {
  let images = document.createElement("img");
  images.append(Heads);
  document.body.append(images);
}
// for (let i = 1; i <= 20; i++) {
//   let numDiv = document.createElement("div");
//   numDiv.append(i);
//   document.body.append(numDiv);
// }
