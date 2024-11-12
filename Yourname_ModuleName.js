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
  getCourseDetails(index) {
    return this.courses[index];
  },

  //--------------------------------------------------------------------------------------------------------//

  //get total number of courses added
  getCourseCount() {
    return this.courses.length;
  },

  //--------------------------------------------------------------------------------------------------------//

  //add a student into
  enrollStudent(AdminNo, courseCode, courseName) {
    const enrollment = { adminNo: AdminNo, moduleCode: courseCode, moduleName: courseName };

    // Check if course exists before enrolling
    const courseIndex = this.courses.findIndex(course => course.code === courseCode);
    if (courseIndex !== -1) {
      this.enrollment.push(enrollment);
    } else {
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
    let count = 0;
    for (let i = 0; i < this.enrollment.length; i++) {
      if (this.enrollment[i].adminNo === AdminNo) {
        count++;
      }
    }
    return count;
  },

  //--------------------------------------------------------------------------------------------------------//

  //udpate student's old modulecode and modulename with new ones
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
