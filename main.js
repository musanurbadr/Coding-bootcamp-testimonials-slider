let lang = {
    ar: {

        link: "لقد كنت مهتمًا بالبرمجة لفترة من الوقت، ولكن لم أقم بهذه الخطوة حتى الآن. لا أستطيع أن أوصي بهذه الدورة التدريبية بما فيه الكفاية. أنا الآن في وظيفة أحلامي وأنا متحمس جدًا للمستقبل.",
        link1: "تانيا سينكلير",
        link01: "مهندس تجربة المستخدم",
        link2: "إذا كنت تريد وضع أفضل أساس ممكن، فإنني أوصيك بأخذ هذه الدورة التدريبية. إن العمق الذي يتعمق فيه المدربون مذهل. أشعر الآن بثقة كبيرة في البدء كمطور محترف.",
        link02: "جون تاركبور",
        link002 : "مطور واجهة أمامية مبتدئ",
    },
    en: {
        link: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
        link1: "Tanya Sinclair",
        link01: "UX Engineer",
        link2: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        link02: "John Tarkpor",
        link002 : "Junior Front-end Developer",
    }
};

document.addEventListener('DOMContentLoaded', function() {
    let selector = document.getElementById('language-selector');
    
    if (selector) {
        selector.onchange = updateLanguage;

        function updateLanguage() {
            let language = selector.options[selector.selectedIndex].value;
            
            if (lang[language]) {
                let nodes = document.querySelectorAll('[data-lang]');
                
                nodes.forEach(node => {
                    let key = node.getAttribute('data-lang');
                    if (lang[language][key]) {
                        node.innerHTML = lang[language][key];
                    }
                });
            }
        }
    }
});