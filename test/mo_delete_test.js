const Student = require('../app/student');
const assert = require('assert');


// All delete tests

describe("Delete Tests", ()=>{
    let deleter;
    beforeEach(done=>{
        deleter = new Student ({name : "Deleter"});
        deleter.save().then(()=> done());     
    });

    it("A delete trest for deleter",  done=> {
        Student.findOneAndDelete(deleter._id)
            .then(()=> Student.findOne({name: "Deleter"}))
            .then((student) => {
                assert(student === null);
                done();
            });
        });
});