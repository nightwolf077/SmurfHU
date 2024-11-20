const advices = [
    { number: "1", title: "تعلم كيف تصرف بميزانية", description: "تابع مصاريفك عشان ما تصرف أكثر من اللازم، بتتعلم كذا مهارة مهمة" },
    { number: "2", title: "استغل خصومات الطلاب", description: "كثير أماكن تعطي خصومات للطلاب، استغلها عشان توفر" },
    { number: "3", title: "حدد ميزانية شهرية واضحة", description: "قبل بداية كل شهر، اجلس وحدد ميزانيتك للمصاريف الأساسية، مثل الأكل، السكن، والمواصلات. هذا بيساعدك تعرف وين تروح فلوسك وتقلل الهدر" },
    { number: "4", title: "ابتعد عن المشتريات غير الضرورية", description: "تجنب الشراء العشوائي للأشياء اللي ما تحتاجها، مثل الملابس الغالية أو الكماليات. ركز على الأشياء اللي فعلاً تستفيد منها" },
    { number: "5", title: "استفد من الخصومات الطلابية", description: "كثير من المحلات، المواصلات، وحتى البرامج تقدم خصومات للطلاب. تأكد من الاستفادة منها عشان تخفف التكاليف" },
    { number: "6", title: "حافظ على مصاريف الأكل بذكاء", description: "حاول تطبخ بنفسك أو تاخذ أكل من البيت بدل ما تشتري من المطاعم بشكل يومي. هذا بيوفر عليك مبلغ كبير شهرياً" },
    { number: "7", title: "احصل على بطاقة بنكية بدون رسوم شهرية", description: "بعض البنوك تقدم حسابات خاصة للطلاب بدون رسوم، تأكد إنك تفتح حساب مناسب يوفر لك مميزات بدون مصاريف إضافية" },
    { number: "8", title: "شارك السكن مع زملاء", description: "إذا ممكن، السكن المشترك بيوفر عليك نصف التكاليف تقريباً، سواء بالإيجار أو بالفواتير مثل الكهرباء والإنترنت" },
    { number: "9", title: "اشتري الكتب الدراسية مستعملة", description: "بدل ما تشتري كتب جديدة، حاول تشتري كتب مستعملة أو تبحث عن نسخة رقمية، الكتب المستعملة أحيانًا تكون بنصف السعر" },
    { number: "10", title: "ابحث عن فرص عمل جزئي", description: "إذا عندك وقت فراغ، حاول تشتغل دوام جزئي. هذا بيعطيك دخل إضافي يساعدك على تغطية بعض المصاريف" },
    { number: "11", title: "استغل وقتك للتوفير بدلاً من الإنفاق", description: "بدلاً من الخروج للإنفاق في كل عطلة، فكر في أنشطة ممتعة وغير مكلفة مثل التنزه في الحديقة أو ممارسة الرياضة" },
    { number: "12", title: "احذر من الإعلانات ", description: "تجنب الانجرار خلف الإعلانات ، خصوصاً على الإنترنت او الجروبات. فكر دائماً قبل الشراء إذا كنت فعلاً تحتاج المنتج أو الخدمة" },
    { number: "13", title: "استبدل الاماكن المكلفة بأنشطة مجانية", description: "بدلاً من زيارة الاماكن باهظة الثمن في الجامعة والمطاعم ، استمتع بأنشطة مجانية في الجامعة" },
    { number: "14", title: "خذ احتياطات للحالات الطارئة", description: "خصص جزء صغير من مصروفك للطوارئ، مثل مشاكل صحية أو أعطال غير متوقعة، هذا بيجنبك الاقتراض أو الضغط المالي" },
    { number: "15", title: "اختر الأجهزة الإلكترونية بعناية", description: "ما تحتاج دائماً أحدث الموديلات، اشتري جهاز بجودة مناسبة وسعر معقول يغطي احتياجاتك بدون إسراف" },
    { number: "16", title: "استفد من المكتبة الجامعية", description: "المكتبات الجامعية توفر مصادر كثيرة مجاناً مثل الكتب والمراجع ، استخدمها بدل ما تشتري كل شيء" },
    { number: "17", title: "استغل فترة الجامعة في اكتساب مهارات جديدة بدون تكلفة", description: "الجامعة هي وقت رائع لاكتساب مهارات مهنية وشخصية، استغل الدورات المجانية أو التدريبات التي لا تتطلب دفع مبالغ إضافية" },
    { number: "18", title: "فكر في تأجيل شراء الأشياء غير الضرورية", description: "إذا كنت تفكر في شراء شيء غير ضروري، حاول تأجيله لأسبوع أو أكثر. قد تجد أنك لم تعد بحاجة إليه بعد فترة" },
    { number: "19", title: "استئجار أو مشاركة الأدوات بدلاً من شرائها", description: "إذا كنت تحتاج إلى أدوات أو معدات معينة للمشاريع أو الأنشطة الدراسية، حاول استئجارها أو مشاركتها مع زملائك بدلًا من شراءها" },
    { number: "20", title: "استفد من العروض الخاصة في المطاعم والمقاهي القريبة", description: "بعض المقاهي والمطاعم تقدم عروضًا خاصة للطلاب أو خصومات في أوقات معينة. تأكد من التحقق من هذه العروض في الأماكن القريبة من الحرم الجامعي" }
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
  