import courses from "../../data/courses.mjs";

const mainContent = document.querySelector(".main-course-content");
let content = "";
courses.forEach((course) => {
  let template = `
    <div class="course-container ${course.newArrival ? "new-arrival" : ""}">
        <img src="${course.icoUrl}" alt="course icon" class="course-image"/>
        <h3 class="course-heading">${course.courseName}</h3>
        <div class="course-details">
            <p class="course-duration">${course.durInWeek} weeks</p>
            <p class="course-ratings">${course.courseRatings}⭐</p>
        </div>
        <p class="course-description">${course.description}</p>
        <a href="./contact.html" class="know-more">Know More</a>
    </div>
    `;
  content += template;
});
mainContent.innerHTML = `<h2 class="course-section-title">Explore and Empower your Skills</h2>${content}`;
