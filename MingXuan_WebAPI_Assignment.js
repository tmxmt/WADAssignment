let controller = {
  courses: [], //Empty arrays to store info
  enrollment: [],

  //add a course with course name, code and lecturer in charge
  addCourse(courseName, courseCode, lecturer) {
    const course = { name: courseName, code: courseCode, lecturer: lecturer };
    this.courses.push(course);
  },
  //--------------------------------------------------------------------------------------------------------//

  //return function to get course details by index
  getCourseDetails(detailsIndex) {
    return this.courses[detailsIndex];
  },

  //--------------------------------------------------------------------------------------------------------//

  //get total number of courses added by length
  getCourseCount() {
    return this.courses.length;
  },

  //--------------------------------------------------------------------------------------------------------//

  // Function to enroll a student in a course
enrollStudent(AdminNo, courseCode, courseName) {
  // Create an enrollment object with student and course information
  const enrollment = {adminNo: AdminNo,moduleCode: courseCode,moduleName: courseName};

  // Find the course in the courses array by its Course code
  const courseIndex = this.courses.findIndex(course => course.code === courseCode);

  // If the course is found (index is not -1)
  if (courseIndex !== -1) {
    // Add the enrollment to the enrollment array
    this.enrollment.push(enrollment);
  } else {
    // If the course is not found, log an error message
    console.error(`Course with code ${courseCode} not found. Enrollment failed.`);
  }
},

  //--------------------------------------------------------------------------------------------------------//

  getStudentInfo(index) {
    return this.enrollment[index];
  },

  //--------------------------------------------------------------------------------------------------------//

  // count how many modules a student is enrolled in by adminNo 
  getStudentEnrollmentCount(AdminNo) {
    // Initialize a counter to keep track of enrollments
    let count = 0;

    // loop through each enrollment in the enrollment array
    for (let i = 0; i < this.enrollment.length; i++) {
      // Check if the current enrollment's admin number matches the given admin number
      if (this.enrollment[i].adminNo === AdminNo) {
        // If it matches, increase count
        count++;
      }
    }
    // Return the final count of enrollments
    return count;
  },

  //--------------------------------------------------------------------------------------------------------//

  //update student's old modulecode and modulename with new ones
  updateStudentEnrollment(adminNo, oldModuleCode, newModuleCode, oldModuleName, NewModuleName) {
    // Use a for loop through the index to find module enrolled
    for (let i = 0; i < this.enrollment.length; i++) {
      if (this.enrollment[i].adminNo === adminNo) {
        // Update the enrollment with the new course code and name
        this.enrollment[i].moduleCode = newModuleCode;
        this.enrollment[i].moduleName = NewModuleName;
        console.log("Student enrollment updated successfully.");
        return;
      }
    }

    // return error if student is not found or enrolled in previous module
    console.error("Student not found or not enrolled in the old module.");
  }
};

module.exports = controller;
