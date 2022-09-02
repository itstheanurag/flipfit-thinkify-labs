let {workout} = require('../Data/workout')

exports.viewPlan = function (req, res){
   
    let dayPlan= req.query
    console.log(dayPlan)

    if(parseInt(dayPlan.day) > 6) {
        return res.status(400).send({error : "there are only 7 days in a week"})
    }

    let getData = workout[parseInt(dayPlan.day)]
    return res.status(200).send({message : 'data fetched successfully', data : getData})
}