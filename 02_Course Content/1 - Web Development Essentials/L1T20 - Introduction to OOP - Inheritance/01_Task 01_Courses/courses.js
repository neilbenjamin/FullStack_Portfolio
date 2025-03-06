class Courses {
  //SuperClass
  constructor(courseName, contactWebsite) {
    this.courseName = courseName;
    this.contactWebsite = contactWebsite;
  }
  //Methods
  get getDisplayContactWebsite() {
    return this.contactWebsite;
  }
}
//suerclass end

class Subjects extends Courses {
  //SubClass
  constructor(
    courseName, //previous attributes
    contactWebsite, //previous attributes
    subjectChoice, //new attributes
    courseDuration, //new attributes
    coursePrice //new attributes
  ) {
    super(courseName, contactWebsite); //Attributes of superclass
    this.subjectChoice = subjectChoice; //New attributes of subclass
    this.courseDuration = courseDuration; //New attributes of subclass
    this.coursePrice = coursePrice; //New attributes of subclass
  }
  //Methods
  get getSubjectOverview() {
    return `
    ${this.subjectChoice} is part of the ${this.courseName} course. 
    The course is ${this.courseDuration} long and costs ${this.coursePrice}. 
    Check out ${this.contactWebsite} for more info.`;
  }
}
//subclass end

//objects/instances of subclass
const html = new Subjects(
  "WebDev",
  "www.wedDev.com/courses/contact/html",
  "HTML",
  "6 Months",
  "$128.00"
);
const css = new Subjects(
  "WebDev",
  "www.wedDev.com/courses/contact/css",
  "CSS",
  "6 Months",
  "$228.00"
);
const javaScript = new Subjects(
  "WebDev",
  "www.wedDev.com/courses/contact/javaScript",
  "javaScript",
  "9 Months",
  "$628.00"
);
//Object/instance of superclass
const webDevCourse = new Courses("webDev", "www.wedDev.com/courses/contact");
//test
console.log(javaScript.getSubjectOverview);
//end
