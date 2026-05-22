const addHabitBtn = document.getElementById("addHabitBtn");
const habitInput = document.getElementById("habitInput");
const habitBody = document.getElementById("habitBody");
const emptyState = document.getElementById("emptyState");

const prevWeekBtn = document.getElementById("prevWeekBtn");
const nextWeekBtn = document.getElementById("nextWeekBtn");
const todayBtn = document.getElementById("todayBtn");

const monHeader = document.getElementById("monHeader");

const tueHeader = document.getElementById("tueHeader");

const wedHeader = document.getElementById("wedHeader");

const thuHeader = document.getElementById("thuHeader");

const friHeader = document.getElementById("friHeader");

const satHeader = document.getElementById("satHeader");

const sunHeader = document.getElementById("sunHeader");

let habits = [];

let currentWeekOffset = 0;

prevWeekBtn.addEventListener("click", function () {
  currentWeekOffset--;
  renderHabits();
});
nextWeekBtn.addEventListener("click", function () {
  currentWeekOffset++;
  renderHabits();
});
todayBtn.addEventListener("click", function () {
  currentWeekOffset = 0;
  renderHabits();
});
addHabitBtn.addEventListener("click", function () {
  const habitName = habitInput.value;

  if (habitName === "") {
    return;
  }

  habits.push({
    id: Date.now(),
    name: habitName,
    completed: {},
  });

  console.log(habits);

  renderHabits();
  saveHabits();

  habitInput.value = "";
});

function renderHabits() {
  const weekDates = getWeekDates();
  if (habits.length === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }
  habitBody.innerHTML = "";

  for (let i = 0; i < habits.length; i++) {
    const habit = habits[i];
    const monDate = formatDate(weekDates[0]);
    const tueDate = formatDate(weekDates[1]);
    const wedDate = formatDate(weekDates[2]);
    const thuDate = formatDate(weekDates[3]);
    const friDate = formatDate(weekDates[4]);
    const satDate = formatDate(weekDates[5]);
    const sunDate = formatDate(weekDates[6]);
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${habit.name}</td>
      <td
  class="day-cell"
  data-day="mon"
  onclick="toggleDay(${habit.id}, '${monDate}')"
>
  ${habit.completed[monDate] ? "✔" : ""}
</td>

<td
  class="day-cell"
  data-day="tue"
  onclick="toggleDay(${habit.id}, '${tueDate}')"
>
  ${habit.completed[tueDate] ? "✔" : ""}
</td>

<td
  class="day-cell"
  data-day="wed"
  onclick="toggleDay(${habit.id}, '${wedDate}')"
>
  ${habit.completed[wedDate] ? "✔" : ""}
</td>

<td
  class="day-cell"
  data-day="thu"
  onclick="toggleDay(${habit.id}, '${thuDate}')"
>
  ${habit.completed[thuDate] ? "✔" : ""}
</td>

<td
  class="day-cell"
  data-day="fri"
  onclick="toggleDay(${habit.id}, '${friDate}')"
>
  ${habit.completed[friDate] ? "✔" : ""}
</td>

<td
  class="day-cell"
  data-day="sat"
  onclick="toggleDay(${habit.id}, '${satDate}')"
>
  ${habit.completed[satDate] ? "✔" : ""}
</td>

<td
  class="day-cell"
  data-day="sun"
  onclick="toggleDay(${habit.id}, '${sunDate}')"
>
  ${habit.completed[sunDate] ? "✔" : ""}
</td>
      <td>
  🔥 ${calculateStreak(habit.completed)}
</td>
      <td>
        <button onclick="editHabit(${habit.id})">
  Edit
</button>
        <button onclick="deleteHabit(${habit.id})">Delete</button>
      </td>
    `;

    habitBody.appendChild(row);
  }
  highlightToday();
  updateWeekHeaders();
}

function toggleDay(id, day) {
  for (let i = 0; i < habits.length; i++) {
    if (habits[i].id === id) {
      habits[i].completed[day] = !habits[i].completed[day];
    }
  }

  renderHabits();
  saveHabits();
}
function editHabit(id) {
  const newName = prompt("Enter new habit name");

  if (!newName) {
    return;
  }

  for (let i = 0; i < habits.length; i++) {
    if (habits[i].id === id) {
      habits[i].name = newName;
    }
  }

  renderHabits();

  saveHabits();
}

function calculateStreak(completed) {
  let streak = 0;

  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const checkDate = new Date(today);
    checkDate.setDate(today.getDate() - i);
    const checkDateStr = formatDate(checkDate);
    if (completed[checkDateStr]) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

function deleteHabit(id) {
  habits = habits.filter(function (habit) {
    return habit.id !== id;
  });

  renderHabits();
  saveHabits();
}
function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
}
const savedHabits = localStorage.getItem("habits");

if (savedHabits) {
  habits = JSON.parse(savedHabits);
}

renderHabits();

function highlightToday() {
  const today = new Date();
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const currentDay = days[today.getDay()];
  const cells = document.querySelectorAll(`.day-cell`);

  cells.forEach(function (cell) {
    cell.classList.remove("today");
  });

  const todayElements = document.querySelectorAll(`[data-day="${currentDay}"]`);

  todayElements.forEach(function (element) {
    element.classList.add("today");
  });
}

function updateWeekHeaders() {
  const today = new Date();
  const currentDay = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - currentDay + 1);
  monday.setDate(monday.getDate() + currentWeekOffset * 7);
  const headers = [
    monHeader,
    tueHeader,
    wedHeader,
    thuHeader,
    friHeader,
    satHeader,
    sunHeader,
  ];
  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    headers[i].textContent =
      headers[i].dataset.day.toUpperCase() + " " + date.getDate();
  }
}

function getWeekDates() {
  const today = new Date();
  const currentDay = today.getDay();
  const dates = [];

  const monday = new Date(today);
  monday.setDate(today.getDate() - currentDay + 1);
  monday.setDate(monday.getDate() + currentWeekOffset * 7);

  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    dates.push(date);
  }

  return dates;
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}
const dates = getWeekDates();

console.log(
  dates.map(function (date) {
    return formatDate(date);
  }),
);
