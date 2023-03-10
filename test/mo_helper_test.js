const mongoose = require('mongoose');
mongoose.Promise = global.Promise;  //ES-6 promise

exports.mochaHooks = {
before(done){
        mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser : true });
        mongoose.connection
                .once('open', ()=> {
                        console.log('Connected');
                        done();
                })
                .on('error', (error)=> {
                console.log("Your Error", error);
        });
},
};

