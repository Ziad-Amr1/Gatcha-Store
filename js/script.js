let slideIndex = 1;
let timeout; // متغير لتخزين الوقت المؤقت
showSlides(slideIndex); // ابدأ العرض التلقائي

// الدالة لعرض الصور تلقائيًا
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // التأكد من أن slideIndex يبقى ضمن النطاق الصحيح
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // إخفاء جميع الشرائح
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // إزالة النشاط من جميع النقاط
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // عرض الشريحة الحالية وتفعيل النقطة المقابلة
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // تغيير الصورة تلقائيًا كل 5 ثواني
  timeout = setTimeout(() => showSlides(slideIndex + 1), 5000);
}

// الدوال للتحكم اليدوي بالأزرار والنقاط
function plusSlides(n) {
  clearTimeout(timeout); // إيقاف العرض التلقائي عند النقر على الأزرار
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timeout); // إيقاف العرض التلقائي عند النقر على النقاط
  showSlides(slideIndex = n);
}

function closeAlert() {
  const alertDiv = document.querySelector('.alert');
  alertDiv.style.opacity = '0';
  alertDiv.style.transform = 'translateY(-20px)';
  setTimeout(() => {
      alertDiv.style.display = 'none';
  }, 300); // الانتظار حتى تكتمل الانتقالات قبل الإخفاء
}

document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdown.addEventListener('click', function (e) {
    e.preventDefault(); // منع السلوك الافتراضي للرابط
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  // إخفاء القائمة عند النقر خارجها
  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
});