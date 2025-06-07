const questions = [
    {
        question: "من هو اللاعب الأكثر تسجيلًا للأهداف في تاريخ دوري أبطال أوروبا؟",
        options: ["كريستيانو رونالدو", "ليونيل ميسي", "روبرت ليفاندوفسكي", "راؤول غونزاليس"],
        answer: 0
    },
    {
        question: "ما هو النادي الذي فاز بأكبر عدد من بطولات الدوري الإنجليزي الممتاز؟",
        options: ["مانشستر سيتي", "ليفربول", "مانشستر يونايتد", "تشيلسي"],
        answer: 2
    },
    {
        question: "أي منتخب فاز بكأس العالم عام 1954؟",
        options: ["ألمانيا", "الأوروغواي", "البرازيل", "إيطاليا"],
        answer: 0
    },
    {
        question: "من هو اللاعب الأكثر ظهورًا في تاريخ كأس العالم؟",
        options: ["مارادونا", "كلوزه", "مالديني", "ميسي"],
        answer: 2
    },
    {
        question: "ما هو النادي الذي حقق الثلاثية (الدوري، الكأس، دوري الأبطال) مرتين؟",
        options: ["برشلونة", "مانشستر يونايتد", "ريال مدريد", "بايرن ميونيخ"],
        answer: 3
    },
    {
        question: "أي منتخب سجل أكبر عدد من الأهداف في نسخة واحدة من كأس العالم؟",
        options: ["البرازيل", "فرنسا", "ألمانيا", "الأرجنتين"],
        answer: 2
    },
    {
        question: "ما هو الرقم القياسي لأكبر عدد من الأهداف سجله لاعب في مباراة واحدة في كأس العالم؟",
        options: ["4", "5", "6", "7"],
        answer: 1
    },
    {
        question: "من هو اللاعب الوحيد الذي سجل في 5 نسخ مختلفة من كأس العالم؟",
        options: ["رونالدو", "بيليه", "كريستيانو رونالدو", "مارادونا"],
        answer: 2
    },
    {
        question: "أي فريق أنهى أطول سلسلة مباريات دون هزيمة في تاريخ الدوري الإيطالي؟",
        options: ["يوفنتوس", "إنتر ميلان", "ميلان", "روما"],
        answer: 0
    },
    {
        question: "من هو المدرب الأكثر تتويجًا بدوري أبطال أوروبا؟",
        options: ["بيب غوارديولا", "زين الدين زيدان", "كارلو أنشيلوتي", "أليكس فيرغسون"],
        answer: 2
    },
    {
        question: "أي منتخب أفريقي وصل إلى نصف نهائي كأس العالم لأول مرة؟",
        options: ["نيجيريا", "الكاميرون", "غانا", "المغرب"],
        answer: 3
    },
    {
        question: "من هو اللاعب الأكثر فوزًا بجائزة الحذاء الذهبي الأوروبي؟",
        options: ["كريستيانو رونالدو", "ليونيل ميسي", "روبرت ليفاندوفسكي", "تييري هنري"],
        answer: 1
    },
    {
        question: "أي فريق حطم الرقم القياسي لأكبر عدد من النقاط في موسم واحد في الدوري الإنجليزي؟",
        options: ["مانشستر سيتي", "ليفربول", "أرسنال", "تشيلسي"],
        answer: 0
    },
    {
        question: "ما هو أول نادي فاز بكأس العالم للأندية؟",
        options: ["ريال مدريد", "كورينثيانز", "برشلونة", "ساو باولو"],
        answer: 1
    },
    {
        question: "من هو اللاعب الأكثر صناعة للأهداف في تاريخ الدوري الإسباني؟",
        options: ["تشافي", "ميسي", "رونالدينيو", "كريم بنزيما"],
        answer: 1
    },
    {
        question: "أي ملعب استضاف أكبر عدد من نهائيات كأس العالم؟",
        options: ["ويمبلي", "سانتياغو بيرنابيو", "ماراكانا", "أزتيكا"],
        answer: 3
    },
    {
        question: "ما هو الرقم القياسي لعدد الأهداف المسجلة في موسم واحد من الدوري الإنجليزي الممتاز؟",
        options: ["32", "34", "36", "38"],
        answer: 1
    },
    {
        question: "أي منتخب لم يخسر أي مباراة في كأس العالم ولكنه لم يحقق اللقب؟",
        options: ["هولندا", "المجر", "البرازيل", "فرنسا"],
        answer: 1
    },
    {
        question: "من هو اللاعب الوحيد الذي فاز بكأس العالم 3 مرات؟",
        options: ["بيليه", "مارادونا", "زين الدين زيدان", "رونالدو"],
        answer: 0
    }
];


let current = 0;
let score = 0;
let wrong = 0;
let startTime = Date.now();

const playerName = localStorage.getItem("playerName") || "الطالب";

document.getElementById("player").textContent = "الطالب: " + playerName;

function showQuestion() {
    document.getElementById("next-btn").style.display = "none";
    let q = questions[current];
    document.getElementById("question-box").textContent = q.question;
    let optionsBox = document.getElementById("options-box");
    optionsBox.innerHTML = "";
    q.options.forEach((opt, idx) => {
        let btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "option-btn";
        btn.onclick = function() {
            // تعطيل جميع الأزرار
            document.querySelectorAll(".option-btn").forEach(b => b.disabled = true);

            if (idx === q.answer) {
                score++;
                btn.style.background = "#4CAF50";
                btn.textContent = "✅ " + opt;
            } else {
                wrong++;
                btn.style.background = "#e74c3c";
                btn.textContent = "❌ " + opt;
                // إظهار علامة صح على الإجابة الصحيحة
                let allBtns = document.querySelectorAll(".option-btn");
                    allBtns[q.answer].style.background = "#4CAF50";
                allBtns[q.answer].textContent = "✅ " + q.options[q.answer];
            }
            document.getElementById("next-btn").style.display = "inline-block";
        };
        optionsBox.appendChild(btn);
    });
}

document.getElementById("next-btn").onclick = function() {
    current++;
    if (current < questions.length) {
        showQuestion();
    } else {
        let endTime = Date.now();
        let timeTaken = Math.round((endTime - startTime) / 1000) + " ثانية";
        let results = JSON.parse(localStorage.getItem("results") || "[]");
        results.push({
            name: playerName,
            win: score,
            lose: wrong,
            time: timeTaken
        });
        localStorage.setItem("results", JSON.stringify(results));
        window.location.href = "nn.html";
    }
};

showQuestion();



