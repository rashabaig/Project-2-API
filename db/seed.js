const MuseumModel = require('./models/museumModel')

const museumData = require('./museum.json')

MuseumModel.remove({}).then(()=> {
    museumData.map(museum =>{
        MuseumModel.create(museum).then((newMuseum)=>{
            console.log(newMuseum)
        })
    })
})