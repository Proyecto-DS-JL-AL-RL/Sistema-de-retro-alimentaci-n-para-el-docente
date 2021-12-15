var material = require('../../Esquemas/Gestion/gMaterial');

var createMaterial = async function(data){
    const newmaterial = new material(data)//.catch(err=> console.log(err))
    await newmaterial.save()
}

var findmaterial = async function(codigo){
    const findMaterial = await material.find(codigo).catch(err=> console.log(err))
    return findMaterial
}

var updateMaterial = async function(codigo, update){
    const mewmaterial = await material.findOneAndUpdate(codigo, update)
    mewmaterial.save()
    return mewmaterial
}

var deleteMaterial = async function(codigo){
    await material.findOneAndDelete(codigo)
}

module.exports.createMaterial = createMaterial;
module.exports.findmaterial = findmaterial;
module.exports.updateMaterial = updateMaterial;
module.exports.deleteMaterial = deleteMaterial;




