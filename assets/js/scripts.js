/* ====================================================================

    تفاصيل القالب
    --------------------------------

     Restaurant : اسم القالب
     Yasoo : اسم المؤلف
     1.0.0 : الإصدار 
     تاريخ الإنشاء : 1/8/2024
    الوصف: ملف التنسيق الرئيسي للنسخة العربية من قالب المطعم 

==================================================================== */

/* ==================================
    initialize AOS (Animate On Scroll)  
================================== */
AOS.init();

$(document).ready(function () {
    /* ==================================
         initialize loading screen   
    ================================== */
    Pace.on('done', function () {
        document.getElementById('loading-screen').style.display = 'none';
        document.querySelector('main').style.display = 'block';
        document.body.style.overflow = 'auto'; // إعادة تفعيل التمرير
    });
});

/* ==================================
     initialize modal for reservation form   
================================== */
document.querySelector('.res-form-btn').addEventListener('click', function () {
    // الحصول على قيم الحقول من النموذج
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var guests = document.getElementById('guests').value;
    var message = document.getElementById('message').value;
    // عرض القيم داخل النافذة المنبثقة (modal)
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalEmail').textContent = email;
    document.getElementById('modalPhone').textContent = phone;
    document.getElementById('modalDate').textContent = date;
    document.getElementById('modalTime').textContent = time;
    document.getElementById('modalGuests').textContent = guests;
    document.getElementById('modalMessage').textContent = message;
});
/* End of File */