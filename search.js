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
  
    // Handle search input
    $('#searchInput').on('input', function () {
      
      const query = $(this).val().toLowerCase();
      
      // Loop through each div and match based on data-key
      $('div[data-key]').each(function () {
        const $this = $(this);
        const key = $this.data('key'); // Get the data-key attribute
        const matchedObject = results.find(item => item[key]); // Find the matching object
        const parent = document.getElementsByClassName("sreach-result")[0]; // Ensure you select the first element
      
        // Check if the query matches the content_data of the matched object
        if (matchedObject && matchedObject[key].content_data.toLowerCase().includes(query)) {
          $this.show(); // Show the matching div
      
          // Append to the parent if not already inside
          if (parent && !parent.contains($this[0])) {
            parent.appendChild($this[0]); // Convert $this to a native DOM element
          }
        } else {
          $this.hide(); // Hide non-matching divs
        }
      });
      
    });
  });
  