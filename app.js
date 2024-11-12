const app = require("./mingxuan_Webapi.");

app.addCourse('WAD', 'EGL301', 'Tan HY');
app.addCourse('DMI', 'EGL302', 'Kang SH');

const courseAtIndex1 = app.getCourseDetails(0);
console.log("Course at index 0: " + JSON.stringify(courseAtIndex1));

app.enrollStudent('221852Y', 'EGL301', 'WAD');
app.enrollStudent('221852Y', 'EGL302', 'DMI');

const studentInfo = app.getStudentInfo(0);
console.log("Module student is enrolled in: " + JSON.stringify(studentInfo));

const totalCourses = app.getCourseCount();
console.log("Total number of courses: " + totalCourses);

// New code to count student enrollments
const AdminNo = '221852Y';
const studentEnrollments = app.getStudentEnrollmentCount(AdminNo);
console.log(`Student with AdminNo ${AdminNo} is enrolled in ${studentEnrollments} courses.`);

app.updateStudentEnrollment('221852Y', 'EGL301', 'EGL302' ,'WAD', 'DMI');
console.log("New module student is enrolled in: " + JSON.stringify(studentInfo));
