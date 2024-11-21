import dataAnalyst from "../../data/dataAnalyst.mjs";
import developer from "../../data/developer.mjs";
import internship from "../../data/internship.mjs";
import marketing from "../../data/marketing.mjs";
import workFromHome from "../../data/workFromHome.mjs";

const cateSection = document.querySelector(".categories-section");
const jobsContent = document.querySelector(".jobs");

const cateName = [
  "Data Analyst",
  "Developer",
  "Internship",
  "Marketing",
  "Work From Home",
];

const jobsAll = [dataAnalyst, developer, internship, marketing, workFromHome];

let content = "";
let activeCategory = "";

cateName.forEach((category) => {
  content += `<p class="category-name ${
    category == "" ? "active-category" : ""
  }">${category}</p>`;
});

cateSection.innerHTML = content;
const categories = document.querySelectorAll(".category-name");
categories.forEach((category) => {
  category.addEventListener("click", () => {
    let jobTemplate = "";
    activeCategory = category.textContent;
    categories.forEach((cate) => {
      // REMOVING THE CLASS NAME
      cate.classList.remove("active-category");
      // ADDING THE CLASS NAME
      if (cate.textContent == activeCategory) {
        cate.classList.add("active-category");
      }
    });

    let index = 0;
    index = cateName.indexOf(activeCategory);
    const currentCate = jobsAll[index];
    currentCate.forEach((job) => {
      let jobDetails = `
          <div class="job-details">
            <div class="job-name"><p>Experience</p> <p>${job.jobDetails.experience}</p></div>
            <div class="job-name"><p>Location:</p> <p>${job.jobDetails.location}</p></div>
            <div class="job-name"><p>Vacancies:</p> <p>${job.jobDetails.nVacancies}</p></div>
          </div>
  `;
      let jobDivision = `
        <div class="jobs-division">
          <div>
            <h3 class="jobs-headline">${job.headline}</h3>
              ${jobDetails}
            <div class="jobs-content">
              <p class="jd">JOB DESCRIPTION</p>
              <p>
              ${job.note}
              </p>
            </div>
          </div>
          <a href="${job.link}" class="apply-job-link">APPLY HERE</a>
        </div>
  `;
      jobTemplate += jobDivision;
    });
    jobsContent.innerHTML = jobTemplate;
  });
});
