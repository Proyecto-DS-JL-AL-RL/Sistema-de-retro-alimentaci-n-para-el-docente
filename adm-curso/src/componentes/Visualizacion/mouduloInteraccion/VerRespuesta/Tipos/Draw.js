function dibujarRecta(ctx,x0,y0,x1,y1,color="red",grozor = 2){
    ctx.lineWidth = grozor;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1,y1);
    ctx.closePath();
    ctx.stroke();
}
function dibujarBarra(ctx,x0,y0,wh,ht,color="blue"){
    ctx.fillStyle = color;
    ctx.fillRect(x0,y0,wh,ht);
}
function text(ctx,text,x0,y0,size,color="green",tipo="top") {
  ctx.textBaseline = tipo;
  ctx.font = size+'px serif';
  ctx.fillStyle = color;
  ctx.fillText(text,x0+5,y0);
  
}
export {dibujarRecta,dibujarBarra,text};