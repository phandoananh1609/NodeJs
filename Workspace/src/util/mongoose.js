

module.exports ={
    multipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());    
    },
    mongooseToObject: function(mongooseArray){
        return mongoose ? mongoose.toObject():mongoose;
    }
}