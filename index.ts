 
interface Course {
  id: number;
  title: string;
  description: string;
  students: Student[];
}

interface Student {
  id: number;
  name: string;
  enrolledCourses: Course[];
}

// LMS class to manage courses and students
class LMS {
  private courses: Course[] = [];
  private students: Student[] = [];

  // Add a new course to the LMS
  addCourse(course: Course): void {
    this.courses.push(course);
    console.log(`Course added: ${course.title}`);
  }

  // Add a new student to the LMS
  addStudent(student: Student): void {
    this.students.push(student);
    console.log(`Student added: ${student.name}`);
  }

  // Enroll a student in a course
  enrollStudent(courseId: number, studentId: number): void {
    const course = this.findCourse(courseId);
    const student = this.findStudent(studentId);

    if (course && student) {
      course.students.push(student);
      student.enrolledCourses.push(course);
      console.log(`${student.name} enrolled in ${course.title}`);
    } else {
      console.log("Invalid course or student ID");
    }
  }

  // Display all courses in the LMS
  displayCourses(): void {
    console.log("Courses:");
    this.courses.forEach((course) => {
      console.log(`- ${course.title}: ${course.description}`);
    });
  }

  // Display all students in the LMS
  displayStudents(): void {
    console.log("Students:");
    this.students.forEach((student) => {
      console.log(`- ${student.name}`);
      console.log("  Enrolled in:");
      student.enrolledCourses.forEach((course) => {
        console.log(`    - ${course.title}`);
      });
    });
  }

  private findCourse(courseId: number): Course | undefined {
    return this.courses.find((course) => course.id === courseId);
  }

  private findStudent(studentId: number): Student | undefined {
    return this.students.find((student) => student.id === studentId);
  }
}

// Example usage
const lms = new LMS();

const course1: Course = { id: 1, title: "Introduction to TypeScript", description: "Learn the basics of TypeScript", students: [] };
const course2: Course = { id: 2, title: "Web Development with React", description: "Build modern web applications with React", students: [] };

const student1: Student = { id: 101, name: "Alice", enrolledCourses: [] };
const student2: Student = { id: 102, name: "Bob", enrolledCourses: [] };

lms.addCourse(course1);
lms.addCourse(course2);

lms.addStudent(student1);
lms.addStudent(student2);

lms.enrollStudent(1, 101);
lms.enrollStudent(2, 102);

lms.displayCourses();
lms.displayStudents();