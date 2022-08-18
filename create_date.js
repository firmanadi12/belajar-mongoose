const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/db_mongoose_mlm');


const amimalSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
});

const Animal = mongoose.model('Animal', amimalSchema);

const cat = new Animal({ name: 'Kucing', rating: 9, review: 'kawai' });
const ikan = new Animal({ name: 'Ikan', rating: 8, review: 'enak' });
const ayam = new Animal({ name: 'Ayam', rating: 8, review: 'mantaps' });

Animal.insertMany([cat,ikan,ayam],function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Success');
    }    
});
