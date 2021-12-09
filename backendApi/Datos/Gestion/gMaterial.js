var material = require('../../Esquemas/Gestion/gMaterial');

var createMaterial = async function(data){
    const newmaterial = new material(data)//.catch(err=> console.log(err))
    await newmaterial.save()
}

var findmaterial = async function(codigo){
    const findMaterial = await material.find(codigo).catch(err=> console.log(err))
    return findMaterial
}


module.exports.createMaterial = createMaterial;
module.exports.findmaterial = findmaterial;



