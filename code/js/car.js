console.log("Starting car race");

function Car(name, v) {
  this.name = name;
  this.posX = 0;
  this.posY = 0;
  this.speed = v;
  this.angle = 0;
  this.offX = 100;
  this.offY = 100;
  this.placeInTrack();
}

Car.prototype.placeInTrack = function(offX,offY) {
  var el = $("<div>").attr('id', this.name).addClass('car');
  $('#track').append(el);
  el.css({
   top: this.posY + this.offX,
   left: this.posX + this.offY
 });
};


Car.prototype.renderNewPosition = function() {
  this.posX += Math.sin(this.angle * Math.PI / 180) * this.speed;
  this.posY += Math.cos(this.angle * Math.PI / 180) * this.speed;
  $('#' + this.name).css({
   top: this.posY + this.offX,
   left: this.posX + this.offY,
   transform: "rotate(" + this.angle + "deg)"});
};

Car.prototype.turnRight = function() {
  this.angle += 3;
};

Car.prototype.turnRight = function() {
  this.angle -= 3;
};




//Idea : crear una funcion que para parar ponga la velocidad a 0 cuando deje de presionar la tecla delantera y acelere a la velocidad del coche cuando pulse la tecla







// function Car(options) {
//   this.direction = "left"; //up, up-right, right, down-right, down, down-left, left, up-left
//   this.speed = 5;
// }
//
// //defines movement of the car pixels depending on the direction
// Car.prototype.moveForward = function(direction,carSpeed) {
//   console.log("acelera");
//   this.direction = direction;
//   var that = this;
//   this.intervalId = setInterval(function() {
//     //coger valores x e y del coche
//     actualCarHorPosition = $("#car-player1").position().left;
//     actualCarVertPosition = $("#car-player1").position().top;
//     //llamar a una funcion que controle las colisiones
//     car.carCrashes();
//     //y en la funcion, controlas si el area que ocupa el coche, coinciden con las de las barreras
//     switch (that.direction) {
//       case "left":
//         carDiv1.css({
//           top: carVertPosition = carVertPosition,
//           left: carHorPosition -= that.speed});
//         break;
//       case "up-left":
//         carDiv1.css({
//           top: carVertPosition -= that.speed,
//           left: carHorPosition -= that.speed});
//           console.log("acelerando direccion up-left!!");
//         break;
//       case "up":
//         carDiv1.css({
//           top: carVertPosition -= that.speed,
//           left: carHorPosition = carHorPosition});
//           console.log("acelerando direccion up!!");
//         break;
//       case "up-right":
//         carDiv1.css({
//           top: carVertPosition -= that.speed,
//           left: carHorPosition += that.speed});
//           console.log("acelerando direccion up-right!!");
//         break;
//       case "right":
//         carDiv1.css({
//           top: carVertPosition = carVertPosition,
//           left: carHorPosition += that.speed});
//           console.log("acelerando direccion right!!");
//         break;
//       case "down-right":
//         carDiv1.css({
//           top: carVertPosition += that.speed,
//           left: carHorPosition += that.speed});
//           console.log("acelerando direccion down-right!!");
//         break;
//       case "down":
//         carDiv1.css({
//           top: carVertPosition += that.speed,
//           left: carHorPosition = carHorPosition});
//           console.log("acelerando direccion down!!");
//         break;
//       case "down-left":
//         carDiv1.css({
//           top: carVertPosition += that.speed,
//           left: carHorPosition -= that.speed});
//           console.log("acelerando direccion down-left!!");
//         break;
//       default:
//     }
//   },30);
// };
//
// Car.prototype.stop = function() {
//   if (this.intervalId){
//     clearInterval(this.intervalId);
//     // carDiv1.css({
//     //   top: carVertPosition = carVertPosition,
//     //   left: carHorPosition = carHorPosition});
//     // this.direction = lastDirection;
//   }
// };
//
// //controls that the turns are allowed just from correct directions
// Car.prototype.changeDirection = function(newDirection) {
//   if (newDirection === 'left') {
//     if (this.direction === 'down-left' || this.direction === 'up-left') {
//         this.direction = newDirection;
//         return;
//       }
//     }
//   if (newDirection === 'up-left') {
//     if (this.direction === 'left' || this.direction === 'up') {
//         this.direction = newDirection;
//         return;
//       }
//     }
//   if (newDirection === 'up') {
//     if (this.direction === 'up-left' || this.direction === 'up-right') {
//         this.direction = newDirection;
//         return;
//       }
//     }
//   if (newDirection === 'up-right') {
//     if (this.direction === 'up' || this.direction === 'right') {
//         this.direction = newDirection;
//         return;
//       }
//     }
//   if (newDirection === 'right') {
//     if (this.direction === 'up-right' || this.direction === 'down-right') {
//         this.direction = newDirection;
//         return;
//       }
//     }
//   if (newDirection === 'down-right') {
//     if (this.direction === 'right' || this.direction === 'down') {
//         this.direction = newDirection;
//         return;
//       }
//     }
//   if (newDirection === 'down') {
//     if (this.direction === 'down-right' || this.direction === 'down-left') {
//         this.direction = newDirection;
//         return;
//       }
//     }
//   if (newDirection === 'down-left') {
//     if (this.direction === 'down' || this.direction === 'left') {
//         this.direction = newDirection;
//         return;
//       }
//     }
// };


//------------------ control crashes ---------------------------
//--------------------------------------------------------------


// Car.prototype.carCrashes = function () {
//   if(actualCarHorPosition < trackLeftLimit) {
//     car.stop();
//   }
//   if(actualCarVertPosition < trackUpperLimit) {
//     car.stop();
//   }
//   if(actualCarHorPosition > trackRightLimit - carLength) {
//     car.stop();
//   }
//   if(actualCarVertPosition > trackBottomLimit - carLength) {
//     car.stop();
//   }
//
// };
