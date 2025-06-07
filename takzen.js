window.onload = function() {
        let results = JSON.parse(localStorage.getItem("results") || "[]");
        let tbody = document.querySelector(".results-table tbody");
        tbody.innerHTML = "";
        results.forEach((r, i) => {
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${r.name}</td><td>${r.win}</td><td>${r.lose}</td><td>${r.time}</td>
                <td><button class="delete-btn" data-index="${i}">🗑 حذف</button></td>`;
            tbody.appendChild(tr);
        });

        // إضافة حدث الحذف
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                let index = this.getAttribute('data-index');
                let code = prompt("أدخل الرمز السري للحذف:");
                if (code === "622023abdo") { // غيّر الرمز السري كما تريد
                    results.splice(index, 1);
                    localStorage.setItem("results", JSON.stringify(results));
                    location.reload();
                } else {
                    alert("لا يمكن الا لمصمم الموقع اجراء عملية الحذف");
                }
            });
        });
    };
  
window.clearResults = function() {
    let code = prompt("أدخل الرمز السري لحذف جميع النتائج:");
    if (code === "622023abdo") { // يمكنك تغيير الرمز السري هنا
        localStorage.removeItem("results");
        location.reload();
    } else {
        alert("لا يمكن الا لمصمم الموقع اجراء عملية الحذف");
    }
};

