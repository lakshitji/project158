AFRAME.registerComponent("comic", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();

  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "spiderman",
        title: "Spiderman",
        url: "./assets/Spiderman.jpg",
      },
      {
        id: "hulk",
        title: "The Incredible Hulk",
        url: "./assets/hulk.jpg",
      },

      {
        id: "ironman",
        title: "The Genius Ironman",
        url: "./assets/iron.jpg",
      },
      {
        id: "DrStrange",
        title: "The Strange DrStrange",
        url: "./assets/dr.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item.id);
      
      // Thumbnail Element
      const thumbNailEl = this.createThumbNail(item);
      borderEl.appendChild(thumbNailEl);
     
      // Title Text Element
      const titleEl = this.createText(position,item);
      borderEl.appendChild(titleEl);
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder:function(position,id){
    const entityEl = document.createElement("a-entity");
    
    entityEl.setAttribute("id",id);
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("geometry",{primitive:"ring",radiusInner:9, radiusOuter:10});
    entityEl.setAttribute("material",{color:"#fff",opacity:1});
    entityEl.setAttribute("position",position);
    return entityEl;

      
  },
  createThumbNail:function(item){
    const entityEl = document.createElement("a-entity");
    
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("geometry",{primitive:"circle",radius:9});
    entityEl.setAttribute("material",{src:item.url});
    return entityEl;

  },
  createText:function(position,item){
    const entityEl = document.createElement("a-entity");

    entityEl.setAttribute("text",{
      align:"center",
      width:80,
      color:"black",
      value:item.title,
      font: "roboto",
      


    });
    const elPos = position;
    elPos.y=-20;
    entityEl.setAttribute("position",elPos);
    entityEl.setAttribute("visible",true);
    return  entityEl;
  },

  
});
