constructor (body1,body2, ofsetX, offsetY) 
{ 
    this.offsetX=offsetX 
    this.offsetY=offsetY 
    var options= { 
        bodyA:body1, 
        bodyB:body2, 
        pointb:{x:this.offsetX,y:offsetY}
    } 
    this.rpoe=Constraint.create(options) 
    Worls.add(world,this.rope) 
    rope1=new rope(boObject1.bodyy,roofObject.body,-bobDiameter*2,0)
}