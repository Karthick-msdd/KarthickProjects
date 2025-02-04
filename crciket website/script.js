document.addEventListener("DOMContentLoaded", function () {
    const fixtures = [
        { team1: "India", team2: "Australia", date: "2025-02-15", Venue:"Chennai" },
        { team1: "India", team2: "England", date: "2025-03-01",Venue:"Kolkata" },
        { team1: "India", team2: "England", date: "6-02-2025",Venue:"Napur"},
        { team1: "India", team2: "England", date: "9-02-2025",Venue: "Cuttak"},
        { team1: "India", team2: "England", date: "12-02-2015",Venue:"Ahmedabad"}

    ];

    let fixturesList = document.getElementById("fixtures-list");
    fixtures.forEach(match => {
        let listItem = document.createElement("li");
        listItem.textContent = `${match.team1} vs ${match.team2} on ${match.date} Held on ${match.Venue}`;
        fixturesList.appendChild(listItem);
    });
});
