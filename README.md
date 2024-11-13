# Assignment 1

# NYP Student enrollment module

This module is a node.js program that helps to enroll students inside a module in NYP with functions such as add course, enroll student in a course, getting a total count of courses, retrieving studentInfo and updating the module the student is enrolled in. 


## Table of Contents

1. [Features](#Functions)
2. [Data](#Data)
3. [Explanation](#Explanation)
4. [References](#References)

## Functions

**1. Adding a course**
- `addCourse(courseName, courseCode, lecturer) `:
Adds a new course with the course's name, code and the lecturer in charge of the course.

**2. Get course details**
- `getCourseDetails(index)`: 
Retrieves the details of a course based on the index inside the courses array.

**3. Get Course count** 
- `getCourseCount()`: 
Retrieves the total number of courses added that are inside the courses array

**4. Enroll student in a module**
- `enrollStudent(AdminNo, courseCode, courseName)`:
Checks whether a course exists before adding a student inside the course with the details "Admin Number, Module Code and Module Name". returns an error if course does not exist.

**5. Get Student Info**
- `getStudentInfo(index)`:
Retrieves the details of a student based on the index inside the enrollment array.

**6. Get Student Enrollment count**
- `getStudentEnrollmentCount(AdminNo) `:
Retrieves the total number of courses that a student is enrolled in.

**7. Update module student is enrolled in**
- `updateStudentEnrollment(adminNo, oldModuleCode, newModuleCode, oldModuleName, NewModuleName)`:
Updates the module that a student is enrolled in based on student admin number and returns an error if the student is NOT found or enrolled in the previous module.

## Data

- `courses` : Array for courses
- `Enrollment` :  Array for enrollment


```js
  courses: [], //Empty arrays to store info
  enrollment: [],
```

## Explanation

## addCourse

```j
addCourse(courseName, courseCode, lecturer)
```

### Explanation
- Adds a course into courses array.
- `courseName`: Param for Course Name
- `courseCode`: Param for Course Code
- `Lecturer`: Param for Lecturer in charge of course

## getCourseDetails

```j
getCourseDetails(index)
```

### Explanation
- Retrieve the details of a course of a certain index in courses array.
- `detailsIndex`: Index for Course details

```js
{
    "adminNo" : String
    "moduleCode" : String
    "moduleName" : String
}
```
## getCourseCount

```j

getCourseCount(index)
```

### Explanation
- Retrieve the total count of courses inside courses array.
- `return`:

```js
{
    "Total number of courses [this.course.length]"
}
```
## EnrollStudent

```j
enrollStudent(AdminNo, courseCode, courseName)
```

### Explanation
- Enrolls a student inside a course by student Admin Number.

```js
{
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
}
```

## getStudentInfo

```j
getStudentInfo(index)
```

### Explanation
- Retrieve the details of the student (Admin Number, Module Code and Module Name)
- `Index`: Index of student Info inside enrollment array
- `return`: 

```js
{
    "this.enrollment[index]"
}
```

## getStudentEnrollmentCount

```j
getStudentEnrollmentCount(AdminNo) 
```

### Explanation
- count how many modules a student is enrolled in by adminNo 

```js
    {
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
```

## updateStudentEnrollment

```j
updateStudentEnrollment(adminNo, oldModuleCode, newModuleCode, oldModuleName, NewModuleName)
```

### Explanation
- update student's old modulecode and modulename with new ones

```js
{
   {
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
```





# References

- https://www.w3schools.com/js/js_loop_for.asp
- https://www.google.com.sg
