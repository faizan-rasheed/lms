// LMS class to manage courses and students
var LMS = /** @class */ (function () {
    function LMS() {
        this.courses = [];
        this.students = [];
    }
    // Add a new course to the LMS
    LMS.prototype.addCourse = function (course) {
        this.courses.push(course);
        console.log("Course added: ".concat(course.title));
    };
    // Add a new student to the LMS
    LMS.prototype.addStudent = function (student) {
        this.students.push(student);
        console.log("Student added: ".concat(student.name));
    };
    // Enroll a student in a course
    LMS.prototype.enrollStudent = function (courseId, studentId) {
        var course = this.findCourse(courseId);
        var student = this.findStudent(studentId);
        if (course && student) {
            course.students.push(student);
            student.enrolledCourses.push(course);
            console.log("".concat(student.name, " enrolled in ").concat(course.title));
        }
        else {
            console.log("Invalid course or student ID");
        }
    };
    // Display all courses in the LMS
    LMS.prototype.displayCourses = function () {
        console.log("Courses:");
        this.courses.forEach(function (course) {
            console.log("- ".concat(course.title, ": ").concat(course.description));
        });
    };
    // Display all students in the LMS
    LMS.prototype.displayStudents = function () {
        console.log("Students:");
        this.students.forEach(function (student) {
            console.log("- ".concat(student.name));
            console.log("  Enrolled in:");
            student.enrolledCourses.forEach(function (course) {
                console.log("    - ".concat(course.title));
            });
        });
    };
    LMS.prototype.findCourse = function (courseId) {
        return this.courses.find(function (course) { return course.id === courseId; });
    };
    LMS.prototype.findStudent = function (studentId) {
        return this.students.find(function (student) { return student.id === studentId; });
    };
    return LMS;
}());
// Example usage
var lms = new LMS();
var course1 = { id: 1, title: "Introduction to TypeScript", description: "Learn the basics of TypeScript", students: [] };
var course2 = { id: 2, title: "Web Development with React", description: "Build modern web applications with React", students: [] };
var student1 = { id: 101, name: "Alice", enrolledCourses: [] };
var student2 = { id: 102, name: "Bob", enrolledCourses: [] };
lms.addCourse(course1);
lms.addCourse(course2);
lms.addStudent(student1);
lms.addStudent(student2);
lms.enrollStudent(1, 101);
lms.enrollStudent(2, 102);
lms.displayCourses();
lms.displayStudents();
