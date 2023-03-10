const Student = require('../app/student');
const assert = require('assert');


// All update tests

describe("Update Tests", ()=>{
    let updater;
    beforeEach(done=>{
        updater = new Student ({name : "Updater"});
        updater.save().then(()=> done());        
    });

    it("Set n Save test",  done=> {

        updater.set('name', "UpUpdater");
        updater.save()
                .then(()=> Student.find({}))
                .then(students => {
                    assert (students[0].name !== "Updater");
                    assert (students[0].name === "UpUpdater");
                });        
    });
});