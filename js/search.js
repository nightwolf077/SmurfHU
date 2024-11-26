$(document).ready(function () {
  const results = [
    { eco: { name: 'eco-tips', content_data: 'نصائح اقتصادية,سنافر,سنفور,نصائح,اقتصادية,اقتصاد,economic,eco' } },
    { rel: { name: 'rel-tips', content_data: 'دين,دينية,نصائح,سنافر,سنفور,نصائح دينية,التزام,religion' } },
    { serv: { name: 'serv-tips', content_data: 'services,service,سنافر,سنفور,خدمة,خدمات,نصائح,نصائح خدماتية' } },
    { std: { name: 'std-tips', content_data: 'std,طلاب,طالب,سنافر,سنفور,نصائح طلابية,نصائح ,طلابية' } },
    { std_to_std: { name: 'std-to-std-tips', content_data: 'std,طلاب,طالب,سنافر,سنفور,نصائح طلابية,نصائح ,طلابية,من طلاب' } },
    { table: { name: 'Terminology', content_data: 'مصطلحات,كلمات,معاني,جمل,جدول' } },
    { drop_sub: { name: 'drop_sub', content_data: 'مادة,اسفاط,اسقاط مادة,اسقاط مواد , مواد' } },
    { add_sub: { name: 'add_sub', content_data: 'تسجيل,تسجيل مواد,تسجيل مادة,مادة,اضافة,اضافة مادة , مواد' } },
    { withdraw_sub: { name: 'withdraw_sub', content_data: 'تسجيل,سحب مواد,انسحاب, مواد,انسحاب من المادة,مادة,سحب,سحب مادة , مواد' } },
    { army: { name: 'army', content_data: 'تجديد دفتر خدمة العلم,نجديد,دفتر,خدمة,علم,ديوان' } },
    { network: { name: 'network', content_data: 'شبكة,شبكات ,شبكات انترنت,شبكات لاسلكية,انترنت,net,internet,lab,windows,pc,computer,it,network,اتصال' } },
    { graduate: { name: 'graduate', content_data: 'gradutate,grad,خريجين,خريج,متخرج,قسم,دفاتر,دفتر,تخرج' } }
  ];
  
  $('#searchInput').val('');
  // Handle search input
  $('#searchInput').on('input', function () {
    const query = $(this).val().toLowerCase().trim(); // Normalize query
    const mainContentSections = $('#tips div'); // Ensure selecting all sections
    const parent = $('#main'); // Result container
    // parent.children().not(".slideshow-container").remove();

    let hasResults = false;

    if (query.length === 0) {
      mainContentSections.show(); // Show all sections if no query
      return;
    }


    mainContentSections.each(function () {
      const $this = $(this);
      const key = $this.data('key'); // Get data-key attribute
      const matchedObject = results.find(item => item[key]); // Find corresponding object

      if (matchedObject) {
        const contentData = matchedObject[key].content_data.toLowerCase(); // Access content_data

        if (contentData.includes(query)) { // Check if content includes the query
          $this.show(); // Show matching section
          parent.append($this.clone()); // Clone and append to results container
          hasResults = true;
        }
      }
    });

    // If no results found
    if (!hasResults) {
      parent.append('<p class="no-results">لا يوجد نتائج لبحثك</p>');
    }
  });

  $(".religion, .std-tips, .eco, .serv, .std-senpai").click(function () {
    // Hide all other sibling divs by setting their visibility to hidden
    $("#main div").not(this).css("visibility", "hidden");

  });


});
