const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,    
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],

    // getMaxAge: function(type){
    //     return type.find((person)=>person.age===Math.max(type.age));
    // },

    findPerson: function (type, id) {
        if (type == "teachers") {
            return this.teachers.find((teacher) => teacher.id == id)
        }
        else {
            return this.students.find((student) => student.id == id)
        }
    },

    assignStudent: function (studentId, subject) {
        this.teachers.forEach((teacher) => {
            teacher.subjects.find((teachingSubject) => {
                teachingSubject == subject
                if (teacher.capacityLeft > 0) {
                    teacher.students.push(studentId);
                    teacher.capacityLeft -= 1;
                    // return;
                }
            })
        })
            // console.log("Sorry, no available teachers left")
    },
    assignTeachersSubject: function(teacherId,newSubject){
        this.teachers.find((teacher)=>{teacher.id==teacherId;
        if(teacher.subjects[newSubject])
            teacher.subjects[newSubject];
        })
    }
};


console.log(school.findPerson("teachers", 1));
// console.log(school.assignStudent(10, "biology"));
// console.log(school.teachers);
school.assignTeachersSubject(1,"stam");
console.log(school.teachers);
// console.log(getMaxAge(school.teachers));