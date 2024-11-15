const advices = [
    { number: 1, title: "التمسك بالصلاة في مواعيدها", description: "حافظ على أداء الصلوات في أوقاتها، خاصة في أوقات الدراسة. يمكنك تحديد أوقات للمذاكرة بحيث لا تتعارض مع الصلاة، أو أذكار الصلاة تذكرك بأهمية الاستمرارية في العبادة" },
    { number: 2, title: "قراءة القرآن الكريم", description: "خصص وقتًا يوميًا لقراءة القرآن ولو لآيات قليلة. القرآن هو مصدر الهداية والطمأنينة، ويمكن أن يعينك على التركيز والصبر خلال أيام الدراسة" },
    { number: 3, title: "استحضار النية في كل عمل", description: "اجعل نيتك في الدراسة, والبحث عن العلم هي إرضاء الله سبحانه وتعالى. علمك يمكن أن يكون عبادة إذا كان الهدف منه نفع الناس وتحقيق الخير" },
    { number: 4, title: "الإخلاص في العمل والجهد", description: "اعمل بجد وأخلص في دراستك. كما قال النبي صلى الله عليه وسلم: \"إن الله يحب إذا عمل أحدكم عملاً أن يتقنه\". الإخلاص في العمل والجد فيه من صلب ديننا" },
    { number: 5, title: "الابتعاد عن المعاصي والتغلب على الفتن", description: "في الجامعة قد تواجه مواقف وفتن عديدة، حاول الابتعاد عن المعاصي والتصرفات التي قد تؤثر على دينك أو تفسد عليك تركيزك. استخدم الوعي الذاتي لتجنب المواقف التي قد تضعف إيمانك" },
    { number: 6, title: "التوكل على الله في كل أمر", description: "توكل على الله في جميع أمورك الدراسية والعملية. إذا شعرت بالقلق أو الضغط، تذكر أن الله هو المتحكم في كل شيء، وما عليك سوى أن تبذل الجهد وتدعو الله بالتوفيق" },
    { number: 7, title: "الدعاء قبل وأثناء الامتحانات", description: "لا تنسَ الدعاء قبل الامتحانات وطلب العون من الله. كما كان يفعل الصحابة، اجعل الدعاء جزءًا من روتينك في أوقات الدراسة والاختبارات" },
    { number: 8, title: "التوازن بين الدراسة والعبادة", description: "حاول أن تجد توازنًا بين وقتك للدراسة ووقت عبادتك. لا تجعل الدراسة تأخذ كل وقتك، بل خصص وقتًا للصلاة والذكر وقراءة القرآن" },
    { number: 9, title: "التعاون مع الآخرين بالمعروف", description: "تعاون مع زملائك في الدراسة بالمعروف، وساعدهم في وقت الحاجة. فقد قال النبي صلى الله عليه وسلم: \"من لا يُؤثِر الناس، لا يُؤثَر\"" },
    { number: 10, title: "الاعتدال في وقت الفراغ", description: "استغل أوقات الفراغ بما يعود عليك بالنفع، مثل حضور المحاضرات الدينية أو الذهاب إلى المسجد لأداء الصلاة. لا تضيع وقتك في اللهو أو الملهيات التي لا فائدة منها" },
    { number: 11, title: "الاستغفار", description: "احرص على الاستغفار بشكل يومي. فهو سبب لمغفرة الذنوب وزيادة الرزق والبركة في الوقت، كما قال الله تعالى في القرآن: \"فَقُلتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا\"" },
    { number: 12, title: "الصدقة والإنفاق في سبيل الله", description: "شارك في الأعمال الخيرية أو الصدقات ولو بمبالغ صغيرة، فذلك يساعد في تطهير المال والرزق ويزيد من بركة الوقت. يمكن أن تكون صدقة في شكل مساعدات بسيطة للمحتاجين أو دعم الأنشطة الخيرية في الجامعة" },
    { number: 13, title: "الابتعاد عن الرفقة السيئة", description: "اجعل رفاقك من الصالحين الذين يعينونك على طاعة الله. كما قال النبي صلى الله عليه وسلم: \"المرء على دين خليله، فلينظر أحدكم من يخالل\". حافظ على بيئة صحية ومحفزة على الإيمان" },
    { number: 14, title: "التوبة والرجوع إلى الله", description: "لا تيأس إذا أخطأت أو وقعت في معصية، فالتوبة مفتوحة دائمًا. اجعل من كل خطأ فرصة للرجوع إلى الله والاعتراف بالتقصير" },
    { number: 15, title: "تحقيق النجاح بالوسائل المشروعة", description: "اجتهد في الدراسة ولكن مع الحرص على أن تكون الوسائل التي تستخدمها مشروعة. تجنب الغش أو استخدام الحيل الملتوية، فنجاحك يجب أن يكون مبنيًا على العمل الصادق" },
    { number: 16, title: "طلب العلم مع النية الصافية", description: "عندما تطلب العلم، اجعل نيتك خالصة لله. في الإسلام، العلم هو نور وهداية، وإذا كان هدفك هو تحقيق خير للناس والإفادة منهم، فسيبارك الله في علمك وجهدك" },
    { number: 17, title: "التأدب مع الأساتذة والزملاء", description: "كن محترمًا مع أساتذتك وزملائك، واحرص على التعامل معهم بلطف. قال النبي صلى الله عليه وسلم: \"إن من أكمل المؤمنين إيمانًا أحسنهم أخلاقًا\"" },
    { number: 18, title: "إدارة الوقت بحكمة", description: "تعلم كيفية إدارة وقتك بطريقة تسهل عليك التوفيق بين الدراسة والعبادة والأنشطة الأخرى. الوقت نعمة ويجب أن نحرص على استثماره في كل ما يرضي الله" },
    { number: 19, title: "الاعتناء بالصحة الجسدية", description: "الإسلام يوجهنا للحفاظ على صحتنا الجسدية، لذلك احرص على تناول الطعام الصحي والنوم الكافي لكي تكون قادرًا على أداء واجباتك الدراسية والعبادية" },
    { number: 20, title: "الثقة بالله في جميع الأحوال", description: "في نهاية المطاف، تذكر دائمًا أن الله هو الذي يرزقك النجاح والتوفيق. مهما واجهت من تحديات، ثق بأن الله معك إذا كنت صادقًا في نيتك وجهدك" },
    { number: 21, title: "احرص على بناء سمعة طيبة", description: "سواء بين زملائك أو الدكاترة، تحلى بالأخلاق والتعاون. الناس يتذكرون تعاملك وأخلاقك" },
    { number: 22, title: "الاهتمام بالعلم الشرعي", description: "من المهم أن لا تقتصر دراستك على العلوم الدنيوية فقط. احرص على تعلم بعض العلوم الشرعية مثل الفقه والتفسير والحديث، فذلك يساهم في تنمية عقلك وروحك، ويزيد من قربك إلى الله" },
    { number: 23, title: "الصبر على التحديات", description: "قد تواجه صعوبات في الدراسة أو في الحياة الجامعية. تذكر أن الصبر هو مفتاح الفرج، وأنه من أسباب الثواب عند الله. كما قال تعالى: \"إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُمْ بِغَيْرِ حِسَابٍ\"" },
    { number: 24, title: "الدعاء لله في كل خطوة", description: "لا تغفل عن الدعاء قبل وبعد كل اختبار أو مشروع دراسي. اسأل الله سبحانه وتعالى التوفيق والتيسير في كل أمورك، وتذكر أن الدعاء من أقوى وسائل التقرب إلى الله" },
    { number: 25, title: "الحفاظ على التواضع", description: "في الجامعة، قد تجد نفسك وسط بيئة متنوعة، وحينما تتفوق في دراستك، تذكر أن التواضع هو الطريق الأقرب لرضا الله. تجنب الغرور وتذكر أن النجاح بيد الله" },
    { number: 26, title: "اجتناب الرغبات الدنيوية الزائدة", description: "تجنب الانغماس في الترف أو البحث عن المتع المبالغ فيها. الحياة الجامعية قد تشجع أحيانًا على الانغماس في الترف والمظاهر، لكن حافظ على توازن حياتك واجعل أهدافك دينية ودنيوية معتدلة" },
    { number: 27, title: "التخطيط للمستقبل بعد التخرج", description: "اعمل بجد واجتهاد في دراستك، ولكن أيضًا خطط لحياتك بعد التخرج بحيث تكون قد هيأت نفسك للعمل الذي يفيد المجتمع ويسهم في خدمة دينك. استخدم العلم الذي تتعلمه في خدمة القيم الإسلامية" },
    { number: 28, title: "حسن معاملة الآخرين", description: "احرص على أن تكون أخلاقك حسنة مع الجميع، سواء مع أساتذتك أو زملائك. النبي صلى الله عليه وسلم قال: \"إنما بعثت لأتمم مكارم الأخلاق\"، فأخلاقك ستكون عنوانًا لشخصيتك ودليلًا على إيمانك" },
    { number: 29, title: "استشعار نعم الله عليك", description: "في كل لحظة، تذكر نعم الله عليك، سواء كانت نعمة الصحة، العلم، أو وقت الفراغ. لا تنسَ شكر الله على هذه النعم واستغلالها في الخير" },
    { number: 30, title: "الاستغفار في أوقات الشدة", description: "إذا شعرت بالتوتر أو القلق بسبب الامتحانات أو أي صعوبة تواجهها، أكثر من الاستغفار، فهو مفتاح للفرج والراحة النفسية. كما قال الله تعالى: \"وَقُلْ رَبُّ اغْفِرْ وَرَحْمْ وَأنتَ خَيْرُ الرَّاحِمِينَ\"" },
    { number: 31, title: "الاستماع للمواعظ والندوات الدينية", description: "احرص على حضور الدروس والمحاضرات الدينية في الجامعة أو عبر الإنترنت. هذه الدروس تفتح لك أبواب العلم وتزيد من معرفتك بدينك، وتمنحك الإلهام والراحة النفسية" },
    { number: 32, title: "مساعدة الآخرين والتعاون معهم", description: "شارك زملائك في الدراسة أو في الأنشطة الخيرية. التعاون في الخير يعين على النجاح في الدنيا والآخرة، ويُشجع على تبادل المعارف والنصائح التي تفيد الجميع" },
    { number: 35, title: "القيام بالأعمال الصغيرة التي تقربك إلى الله", description: "لا تهمل الأعمال الصالحة التي قد تبدو صغيرة، مثل مساعدة الآخرين، الابتسامة في وجه زميل، أو قول كلمة طيبة. فهذه الأعمال التي قد تبدو بسيطة، في ميزان الله لها أجر عظيم" },
    { number: 36, title: "الالتزام بالآداب الإسلامية في الملبس والمظهر", description: "حافظ على الالتزام بالآداب الإسلامية في مظهرك داخل الحرم الجامعي. لبسك يجب أن يكون محتشمًا ونظيفًا، فهذا يعبّر عن احترامك لدينك ولمن حولك" },
    { number: 37, title: "تقوية العلاقة مع الله في أوقات الفرح", description: "لا تقتصر علاقتك مع الله على أوقات الشدة فقط، بل اجعلها ممتدة في أوقات الفرح والسرور أيضًا. اشكر الله على نعمه حينما تحقق نجاحًا أو تتلقى أخبارًا سارة" },
    { number: 38, title: "الاستعانة بالله في اتخاذ القرارات", description: "عند اتخاذ أي قرار مهم في حياتك الجامعية، استعِن بالله. استخدم صلاة الاستخارة في قراراتك سواء كانت بشأن الدراسة أو حياتك الشخصية" },
    { number: 39, title: "طلب العلم وسيلة لإصلاح المجتمع", description: "تذكر أن طلبك للعلم ليس فقط من أجل النجاح الشخصي، بل هو وسيلة لتحسين المجتمع وتقديم الفائدة. اجعل نيتك دائمًا أن تستفيد من علمك في خدمة الآخرين" },
    { number: 40, title: "الاعتراف بالتقصير والتوبة عنه", description: "إذا شعرت أنك مقصر في دراستك أو عبادتك، اعترف بذلك أمام الله وتب إليه. الله غفور رحيم، وإذا تاب العبد، تقبل الله توبته" },
    { number: 41, title: "التنظيم في استخدام وسائل التكنولوجيا", description: "في العصر الحالي، وسائل التكنولوجيا مثل الهواتف الذكية والحواسيب أصبحت جزءًا من حياتنا. استخدمها بما يرضي الله واحرص على تنظيم وقتك وعدم إضاعة الوقت في الأنشطة غير المفيدة" },
    { number: 42, title: "الابتعاد عن الجدال غير المفيد", description: "في الجامعة، قد تواجه آراء وأيديولوجيات مختلفة. حاول أن تبتعد عن الجدال العقيم الذي لا يؤدي إلى نتائج مثمرة، وحاول أن تنشر السلام والفهم المتبادل بين الجميع" },
    { number: 43, title: "الاهتمام بالصحة النفسية والروحية", description: "إذا شعرت بالإرهاق أو الاكتئاب، لا تتردد في البحث عن الدعم. استغل وقتك في الصلاة والذكر والتأمل لتجد الراحة النفسية والروحية. كما قال رسول الله صلى الله عليه وسلم: \"ألا بذكر الله تطمئن القلوب\"" },
    { number: 44, title: "الاستعانة على النجاح بالنية الطيبة", description: "اجعل نيتك في طلب العلم والإجتهاد في الدراسة هي رضا الله تعالى. النية الطيبة في العمل تجعل العمل ذا قيمة عظيمة، كما قال النبي صلى الله عليه وسلم: \"إنما الأعمال بالنيات\"" },
    { number: 45, title: "الاستفادة من الوقت في عبادة الله", description: "احرص على أن تستثمر كل وقت فراغ لديك في عبادة الله، سواء كان ذلك في تلاوة القرآن، أو ذكر الله، أو الدعاء. الوقت الذي لا نعبده فيه يمكن أن يكون ضائعًا، بينما يمكننا تحويله إلى عبادة وتجربة روحية تقوي ارتباطنا بالله" },
    { number: 46, title: "الاعتراف بنعم الله عليك", description: "في كل لحظة، تذكر أن كل ما تحقق من نجاح أو تقدم هو بفضل الله ورحمته. الشكر لله على النعم يجلب المزيد من البركة، كما قال سبحانه: \"لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ\"" },
    { number: 47, title: "الاحتساب في كل عمل", description: "اجعل نيتك في كل عمل تقوم به هي رضا الله تعالى. سواء في دراستك أو تعاملك مع الناس أو في أي مجال آخر، احرص على أن يكون عملك خالصًا لله، فينقلب هذا العمل إلى عبادة" },
    { number: 48, title: "الاستمرار في الدعاء بعد التخرج", description: "لا تقتصر صلاتك ودعائك على أيام الدراسة فقط. استمر في الدعاء بعد التخرج لطلب التوفيق في العمل وفي كل مراحل حياتك القادمة، وتذكر أن الله قريب يسمع دعاءك" },
    { number: 49, title: "الاستعانة بالله في الصعاب", description: "عندما تواجه تحديات أو صعوبات دراسية أو حياتية، استعِن بالله وكن واثقًا من أن الله سيعينك ويُيسر لك كل أمر. تذكر أن الصبر والتوكل على الله هما الطريق للنجاح" },
    { number: 50, title: "الاحتفاظ بتوازن روحي وعقلي", description: "احرص على أن يكون لديك توازن بين جوانب حياتك المختلفة. لا تفرط في الدراسة على حساب روحك أو صحتك، بل حاول أن تكون لديك حياة متوازنة تسهم في بناء شخصيتك من جميع الجوانب" }
]

let currentIndex = 0;
let prev = document.getElementById("prev");
let next = document.getElementById("next");

function updateButtonStates(index) {
    document.getElementById("advice-number").textContent = advices[index].number;
    document.getElementById("advice-title").textContent = advices[index].title;
    document.getElementById("advice-description").textContent = advices[index].description;

    // Update button background colors based on current index
    if (currentIndex === advices.length - 1) {
        next.style.backgroundColor = 'silver';
        next.disabled = true;  // Disable next button
        next.style.cursor = 'default';
    } else {
        next.style.backgroundColor = '#4CAF50';
        next.disabled = false; // Enable next button
        prev.style.cursor = 'pointer';
    }
    
    if (currentIndex === 0) {
        prev.style.backgroundColor = 'silver';
        prev.disabled = true;  // Disable prev button
        prev.style.cursor = 'default';
    } else {
        prev.style.backgroundColor = '#4CAF50';
        prev.disabled = false; // Enable prev button
    }
}

function disableButtonsTemporarily() {
    // Disable buttons immediately
    next.disabled = true;
    prev.disabled = true;

    // Set buttons back to normal state after 1000ms (1 second)
    setTimeout(function() {
        updateButtonStates();  // Re-enable buttons based on the current index
    }, 1000);
}

function nextAdvice() {
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % advices.length;
        updateButtonStates(currentIndex);
    }, 500); // 500ms delay
}

function prevAdvice() {
    setTimeout(() => {
        currentIndex = (currentIndex - 1 + advices.length) % advices.length;
        updateButtonStates(currentIndex);
    }, 500); // 500ms delay
}

// Initialize with the first advice
updateButtonStates(currentIndex);
$("#next, #prev").click(function () {
    // Disable buttons temporarily while content fades
    disableButtonsTemporarily();

    // Fade out content
    $("#advice-number, #advice-title, #advice-description")
        .fadeOut(500, function() {
            // After fade-out completes, fade content back in
            $("#advice-number, #advice-title, #advice-description").fadeIn(500);
        });
});

/**/
  