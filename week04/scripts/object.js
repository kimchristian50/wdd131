let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "001", enrolled: 95, instructor: "Chuck Norris" },
        { section: "002", enrolled: 80, instructor: "Thor" },
        { section: "003", enrolled: 100, instructor: "Gandalf"}
    ]
};

function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

function renderSections(course) {
    const tbody = document.querySelector("#sections tbody");
    let rows = "";
    for (const section of course.sections) {
        rows +=
            `<tr>
        <td>${section.section}</td>
        <td>${section.enrolled}</td>
        <td>${section.instructor}</td>
        </tr>`;
    }
    tbody.innerHTML = rows;
}

setCourseInformation(aCourse);
renderSections(aCourse);
