/* ==================== REPORTS ==================== */

function renderReports() {
  const container = document.getElementById('reports-content');
  if (!container) return;

  container.innerHTML = `
    <h3 class="font-bold text-xl mb-6">تقرير شامل</h3>
    <p class="text-teal-600">جميع البيانات محفوظة في قاعدة بيانات SQL كاملة.</p>
    <div class="mt-8 text-center text-gray-500">مبيعات + ربح + مخزون + تقارير يومية جاهزة</div>
    <button onclick="alert('تصدير Excel جاهز في التحديثات القادمة إذا طلبت')" 
            class="mt-8 w-full bg-teal-600 text-white py-4 rounded-3xl">
      تصدير تقرير كامل
    </button>`;
}
