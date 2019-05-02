const MuseumModel = require('./models/museumModel')
// const ExhibitModel = require('./models/exhibitModel')
// const ReviewModel = require('./models/reviewModel')

const museumData = require('./museum.json')

// for each item  in museum.json
// create a museum
// create a review
// and a exhibit


MuseumModel.remove({}).then(()=> {
    museumData.map(museum =>{
        MuseumModel.create(museum).then((newMuseum)=>{
            console.log(newMuseum)
        })
    })
    // museumData.map(exhibit =>{
    // ExhibitModel.remove().then(()=> {
    //     ExhibitModel.create(exhibit).then((newExhibit)=>{
    //         console.log(newExhibit)
    //     })
    // })
//     museumData.map(review =>{
//     ReviewModel.remove().then(()=> {
//         ReviewModel.create(review).then((newReview)=>{
//             console.log(newReview)
//         })
//     })
// })
// })
})