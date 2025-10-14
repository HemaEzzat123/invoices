// Global variables
let invoices = [];
let products = [];
let customers = [];
let settings = {};
let currentInvoiceNumber = 1;
let currentLanguage = localStorage.getItem("language") || "en";
// Translation System
const translations = {
  ar: {
    // App
    app_title: "نظام إدارة الفواتير",
    app_subtitle: "نظام شامل لإدارة الفواتير والعملاء والمنتجات",

    // Navigation
    dashboard: "لوحة التحكم",
    invoices: "الفواتير",
    products: "المنتجات",
    customers: "العملاء",
    settings: "الإعدادات",

    // Dashboard
    quick_stats: "إحصائيات سريعة",
    total_invoices: "إجمالي الفواتير",
    total_revenue: "إجمالي الإيرادات",
    total_customers: "إجمالي العملاء",
    total_products: "إجمالي المنتجات",
    recent_invoices: "أحدث الفواتير",
    top_customers: "أفضل العملاء",
    no_invoices: "لا توجد فواتير",
    no_data: "لا توجد بيانات",

    // Invoices
    invoice_management: "إدارة الفواتير",
    new_invoice: "فاتورة جديدة",
    search_invoices: "البحث في الفواتير...",
    no_invoices_msg: "لا توجد فواتير. ابدأ بإنشاء فاتورة جديدة.",
    invoice_number: "رقم الفاتورة",
    invoice_date: "تاريخ الفاتورة",
    customer: "العميل",
    choose_customer: "اختر عميل...",
    payment_method: "طريقة الدفع",
    due_days: "أيام الاستحقاق",
    invoice_items: "عناصر الفاتورة",
    add_item: "إضافة عنصر",
    tax_rate: "نسبة الضريبة (%)",
    discount: "خصم (%)",
    subtotal: "المجموع الفرعي:",
    discount_amount: "الخصم:",
    tax_amount: "الضريبة:",
    total: "المجموع الكلي:",
    notes: "ملاحظات",
    additional_notes: "ملاحظات إضافية...",
    save_invoice: "حفظ الفاتورة",
    save_print_invoice: "حفظ وطباعة",
    cancel: "إلغاء",
    invoice_notes: "ملاحظات:",
    print_invoice: "طباعة الفاتورة",
    close: "إغلاق",
    view: "عرض",
    edit: "تعديل",
    delete: "حذف",
    items: "عنصر",
    cash: "نقداً",
    card: "بطاقة ائتمان",
    bank: "تحويل بنكي",
    check: "شيك",
    customer_undefined: "عميل غير محدد",

    // Products
    product_management: "إدارة المنتجات",
    new_product: "منتج جديد",
    search_products: "البحث في المنتجات...",
    no_products_msg: "لا توجد منتجات. ابدأ بإضافة منتج جديد.",
    product_name: "اسم المنتج/الخدمة",
    product_name_placeholder: "اسم المنتج أو الخدمة",
    product_description: "وصف المنتج",
    product_description_placeholder: "وصف المنتج...",
    price: "السعر",
    unit: "الوحدة",
    unit_placeholder: "قطعة، كيلو، ساعة...",
    category: "فئة المنتج",
    category_placeholder: "فئة المنتج",
    stock: "الكمية المتاحة",
    product_code: "كود المنتج",
    product_code_placeholder: "كود المنتج (اختياري)",
    save_product: "حفظ المنتج",
    update_product: "تحديث المنتج",
    no_description: "لا يوجد وصف",
    product_code_label: "كود المنتج:",

    // Customers
    customer_management: "إدارة العملاء",
    new_customer: "عميل جديد",
    search_customers: "البحث في العملاء...",
    no_customers_msg: "لا توجد عملاء. ابدأ بإضافة عميل جديد.",
    customer_name: "اسم العميل/الشركة",
    customer_name_placeholder: "اسم العميل أو الشركة",
    customer_type: "نوع العميل",
    individual: "فرد",
    company: "شركة",
    phone: "رقم الهاتف",
    phone_placeholder: "رقم الهاتف",
    email: "البريد الإلكتروني",
    email_placeholder: "البريد الإلكتروني",
    address: "العنوان",
    address_placeholder: "عنوان العميل...",
    tax_number: "رقم الضريبة",
    tax_number_placeholder: "رقم الضريبة",
    id_number: "رقم الهوية/التجاري",
    id_number_placeholder: "رقم الهوية أو التجاري",
    save_customer: "حفظ العميل",
    update_customer: "تحديث العميل",
    tax_number_label: "رقم الضريبة:",
    id_number_label: "رقم الهوية:",

    // Settings
    company_settings: "إعدادات الشركة",
    company_name: "اسم الشركة",
    company_name_placeholder: "اسم الشركة",
    company_phone: "رقم الهاتف",
    company_phone_placeholder: "رقم الهاتف",
    company_email: "البريد الإلكتروني",
    company_email_placeholder: "البريد الإلكتروني",
    company_website: "الموقع الإلكتروني",
    company_website_placeholder: "الموقع الإلكتروني",
    company_address: "عنوان الشركة",
    company_address_placeholder: "عنوان الشركة الكامل",
    default_tax_rate: "نسبة الضريبة الافتراضية (%)",
    invoice_currency: "عملة الفاتورة",
    aed: "درهم إماراتي (AED)",
    usd: "دولار أمريكي (USD)",
    eur: "يورو (EUR)",
    sar: "ريال سعودي (SAR)",
    save_settings: "حفظ الإعدادات",
    export_data: "تصدير البيانات",
    import_data: "استيراد البيانات",

    // Validation Messages
    field_required: "هذا الحقل مطلوب",
    invalid_email: "يرجى إدخال بريد إلكتروني صحيح",
    invalid_number: "يرجى إدخال رقم صحيح أكبر من أو يساوي صفر",
    fix_form_errors: "يرجى تصحيح الأخطاء في النموذج",
    min_one_item: "يجب أن تحتوي الفاتورة على عنصر واحد على الأقل",

    // Success Messages
    product_saved: "تم حفظ المنتج بنجاح",
    product_updated: "تم تحديث المنتج بنجاح",
    product_deleted: "تم حذف المنتج بنجاح",
    customer_saved: "تم حفظ العميل بنجاح",
    customer_updated: "تم تحديث العميل بنجاح",
    customer_deleted: "تم حذف العميل بنجاح",
    invoice_saved: "تم حفظ الفاتورة بنجاح",
    invoice_deleted: "تم حذف الفاتورة بنجاح",
    settings_saved: "تم حفظ الإعدادات بنجاح",
    data_exported: "تم تصدير البيانات بنجاح",
    data_imported: "تم استيراد البيانات بنجاح",

    // Error Messages
    invoice_number_required: "يرجى إدخال رقم الفاتورة",
    invoice_date_required: "يرجى إدخال تاريخ الفاتورة",
    invoice_items_required: "يرجى إضافة عنصر واحد على الأقل للفاتورة",
    import_error: "خطأ في استيراد البيانات. تأكد من أن الملف صحيح.",

    // Confirmations
    delete_product: "هل أنت متأكد من حذف هذا المنتج؟",
    delete_customer: "هل أنت متأكد من حذف هذا العميل؟",
    delete_invoice: "هل أنت متأكد من حذف هذه الفاتورة؟",

    // Info Messages
    edit_invoice_coming: "تعديل الفواتير سيتم إضافته في الإصدار القادم",
  },
  en: {
    // App
    app_title: "Invoice Management System",
    app_subtitle:
      "Comprehensive system for managing invoices, customers and products",

    // Navigation
    dashboard: "Dashboard",
    invoices: "Invoices",
    products: "Products",
    customers: "Customers",
    settings: "Settings",

    // Dashboard
    quick_stats: "Quick Statistics",
    total_invoices: "Total Invoices",
    total_revenue: "Total Revenue",
    total_customers: "Total Customers",
    total_products: "Total Products",
    recent_invoices: "Recent Invoices",
    top_customers: "Top Customers",
    no_invoices: "No invoices",
    no_data: "No data",

    // Invoices
    invoice_management: "Invoice Management",
    new_invoice: "New Invoice",
    search_invoices: "Search invoices...",
    no_invoices_msg: "No invoices. Start by creating a new invoice.",
    invoice_number: "Invoice Number",
    invoice_date: "Invoice Date",
    customer: "Customer",
    choose_customer: "Choose customer...",
    payment_method: "Payment Method",
    due_days: "Due Days",
    invoice_items: "Invoice Items",
    add_item: "Add Item",
    tax_rate: "Tax Rate (%)",
    discount: "Discount (%)",
    subtotal: "Subtotal:",
    discount_amount: "Discount:",
    tax_amount: "Tax:",
    total: "Total:",
    notes: "Notes",
    additional_notes: "Additional notes...",
    save_invoice: "Save Invoice",
    save_print_invoice: "Save & Print",
    cancel: "Cancel",
    invoice_notes: "Notes:",
    print_invoice: "Print Invoice",
    close: "Close",
    view: "View",
    edit: "Edit",
    delete: "Delete",
    items: "items",
    cash: "Cash",
    card: "Credit Card",
    bank: "Bank Transfer",
    check: "Check",
    customer_undefined: "Undefined Customer",

    // Products
    product_management: "Product Management",
    new_product: "New Product",
    search_products: "Search products...",
    no_products_msg: "No products. Start by adding a new product.",
    product_name: "Product/Service Name",
    product_name_placeholder: "Product or service name",
    product_description: "Product Description",
    product_description_placeholder: "Product description...",
    price: "Price",
    unit: "Unit",
    unit_placeholder: "piece, kg, hour...",
    category: "Product Category",
    category_placeholder: "Product category",
    stock: "Available Quantity",
    product_code: "Product Code",
    product_code_placeholder: "Product code (optional)",
    save_product: "Save Product",
    update_product: "Update Product",
    no_description: "No description",
    product_code_label: "Product Code:",

    // Customers
    customer_management: "Customer Management",
    new_customer: "New Customer",
    search_customers: "Search customers...",
    no_customers_msg: "No customers. Start by adding a new customer.",
    customer_name: "Customer/Company Name",
    customer_name_placeholder: "Customer or company name",
    customer_type: "Customer Type",
    individual: "Individual",
    company: "Company",
    phone: "Phone Number",
    phone_placeholder: "Phone number",
    email: "Email",
    email_placeholder: "Email address",
    address: "Address",
    address_placeholder: "Customer address...",
    tax_number: "Tax Number",
    tax_number_placeholder: "Tax number",
    id_number: "ID/Trade Number",
    id_number_placeholder: "ID or trade number",
    save_customer: "Save Customer",
    update_customer: "Update Customer",
    tax_number_label: "Tax Number:",
    id_number_label: "ID Number:",

    // Settings
    company_settings: "Company Settings",
    company_name: "Company Name",
    company_name_placeholder: "Company name",
    company_phone: "Phone Number",
    company_phone_placeholder: "Phone number",
    company_email: "Email",
    company_email_placeholder: "Email address",
    company_website: "Website",
    company_website_placeholder: "Website URL",
    company_address: "Company Address",
    company_address_placeholder: "Full company address",
    default_tax_rate: "Default Tax Rate (%)",
    invoice_currency: "Invoice Currency",
    aed: "UAE Dirham (AED)",
    usd: "US Dollar (USD)",
    eur: "Euro (EUR)",
    sar: "Saudi Riyal (SAR)",
    save_settings: "Save Settings",
    export_data: "Export Data",
    import_data: "Import Data",

    // Validation Messages
    field_required: "This field is required",
    invalid_email: "Please enter a valid email address",
    invalid_number: "Please enter a valid number greater than or equal to zero",
    fix_form_errors: "Please fix the errors in the form",
    min_one_item: "Invoice must contain at least one item",

    // Success Messages
    product_saved: "Product saved successfully",
    product_updated: "Product updated successfully",
    product_deleted: "Product deleted successfully",
    customer_saved: "Customer saved successfully",
    customer_updated: "Customer updated successfully",
    customer_deleted: "Customer deleted successfully",
    invoice_saved: "Invoice saved successfully",
    invoice_deleted: "Invoice deleted successfully",
    settings_saved: "Settings saved successfully",
    data_exported: "Data exported successfully",
    data_imported: "Data imported successfully",

    // Error Messages
    invoice_number_required: "Please enter invoice number",
    invoice_date_required: "Please enter invoice date",
    invoice_items_required: "Please add at least one item to the invoice",
    import_error: "Error importing data. Make sure the file is correct.",

    // Confirmations
    delete_product: "Are you sure you want to delete this product?",
    delete_customer: "Are you sure you want to delete this customer?",
    delete_invoice: "Are you sure you want to delete this invoice?",

    // Info Messages
    edit_invoice_coming: "Invoice editing will be added in the next version",
  },
};

// Translation Functions
function translatePage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update page direction
  document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;

  // Update active language button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.getElementById(lang + "Btn").classList.add("active");

  // Update placeholders
  updatePlaceholders(lang);
}

function updatePlaceholders(lang) {
  const placeholderMap = {
    productName: "product_name_placeholder",
    productDescription: "product_description_placeholder",
    productUnit: "unit_placeholder",
    productCategory: "category_placeholder",
    productCode: "product_code_placeholder",
    customerName: "customer_name_placeholder",
    customerPhone: "phone_placeholder",
    customerEmail: "email_placeholder",
    customerAddress: "address_placeholder",
    customerTaxNumber: "tax_number_placeholder",
    customerIdNumber: "id_number_placeholder",
    companyName: "company_name_placeholder",
    companyPhone: "company_phone_placeholder",
    companyEmail: "company_email_placeholder",
    companyWebsite: "company_website_placeholder",
    companyAddress: "company_address_placeholder",
    invoiceSearch: "search_invoices",
    productSearch: "search_products",
    customerSearch: "search_customers",
    invoiceNotes: "additional_notes",
  };

  Object.keys(placeholderMap).forEach((id) => {
    const element = document.getElementById(id);
    if (
      element &&
      translations[lang] &&
      translations[lang][placeholderMap[id]]
    ) {
      element.placeholder = translations[lang][placeholderMap[id]];
    }
  });

  // Update select options
  document.querySelectorAll("option[data-translate]").forEach((option) => {
    const key = option.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      option.textContent = translations[lang][key];
    }
  });
}

function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  translatePage(lang);
  showAlert(
    lang === "ar"
      ? "تم تغيير اللغة إلى العربية"
      : "Language changed to English",
    "success",
    3000
  );
}

function getTranslation(key) {
  return translations[currentLanguage] && translations[currentLanguage][key]
    ? translations[currentLanguage][key]
    : key;
}

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  loadData();
  initializeApp();
  translatePage(currentLanguage); // Apply saved language
  updateDashboard();
  loadLists();
});

// Data management functions
function saveData() {
  localStorage.setItem("invoices", JSON.stringify(invoices));
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("customers", JSON.stringify(customers));
  localStorage.setItem("settings", JSON.stringify(settings));
  localStorage.setItem("invoiceNumber", currentInvoiceNumber.toString());
}

function loadData() {
  invoices = JSON.parse(localStorage.getItem("invoices") || "[]");
  products = JSON.parse(localStorage.getItem("products") || "[]");
  customers = JSON.parse(localStorage.getItem("customers") || "[]");
  settings = JSON.parse(localStorage.getItem("settings") || "{}");
  currentInvoiceNumber = parseInt(localStorage.getItem("invoiceNumber") || "1");
}

// Tab management
function showTab(tabName) {
  // Hide all tabs
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.remove("active");
  });
  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show selected tab
  document.getElementById(tabName).classList.add("active");
  document
    .querySelector(`[onclick="showTab('${tabName}')"]`)
    .classList.add("active");

  // Load data for specific tabs
  if (tabName === "invoices") {
    loadInvoicesList();
  } else if (tabName === "products") {
    loadProductsList();
  } else if (tabName === "customers") {
    loadCustomersList();
  }
}

// Modal management
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  // Clear form if it's a new item modal
  if (modalId.includes("Modal")) {
    document.querySelector(`#${modalId} form`)?.reset();
  }
}

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

// Utility functions
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Dashboard functions
function updateDashboard() {
  const totalInvoices = invoices.length;
  const totalRevenue = invoices.reduce(
    (sum, invoice) => sum + (invoice.total || 0),
    0
  );
  const totalCustomers = customers.length;
  const totalProducts = products.length;

  document.getElementById("totalInvoices").textContent = totalInvoices;
  document.getElementById("totalRevenue").textContent =
    formatCurrency(totalRevenue);
  document.getElementById("totalCustomers").textContent = totalCustomers;
  document.getElementById("totalProducts").textContent = totalProducts;

  // Load recent invoices
  loadRecentInvoices();
  loadTopCustomers();
}

function loadRecentInvoices() {
  const recentInvoices = invoices.slice(-5).reverse();
  const container = document.getElementById("recentInvoices");

  if (recentInvoices.length === 0) {
    container.innerHTML = `<p style="color: #6c757d; text-align: center;">${getTranslation(
      "no_invoices"
    )}</p>`;
    return;
  }

  container.innerHTML = recentInvoices
    .map(
      (invoice) => `
          <div class="invoice-item" style="padding: 10px; margin: 5px 0;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <strong>فاتورة #${invoice.number}</strong>
                <div style="font-size: 0.9em; color: #6c757d;">
                  ${new Date(invoice.date).toLocaleDateString("ar-EG")} - ${
        invoice.customerName || "عميل غير محدد"
      }
                </div>
              </div>
              <div style="font-weight: bold; color: #28a745;">
                ${formatCurrency(invoice.total)} ${settings.currency || "AED"}
              </div>
            </div>
          </div>
        `
    )
    .join("");
}

function loadTopCustomers() {
  const customerTotals = {};
  invoices.forEach((invoice) => {
    const customerName = invoice.customerName || "عميل غير محدد";
    customerTotals[customerName] =
      (customerTotals[customerName] || 0) + (invoice.total || 0);
  });

  const topCustomers = Object.entries(customerTotals)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const container = document.getElementById("topCustomers");

  if (topCustomers.length === 0) {
    container.innerHTML = `<p style="color: #6c757d; text-align: center;">${getTranslation(
      "no_data"
    )}</p>`;
    return;
  }

  container.innerHTML = topCustomers
    .map(
      ([name, total]) => `
          <div class="customer-item" style="padding: 10px; margin: 5px 0;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <strong>${name}</strong>
              </div>
              <div style="font-weight: bold; color: #667eea;">
                ${formatCurrency(total)} ${settings.currency || "AED"}
              </div>
            </div>
          </div>
        `
    )
    .join("");
}

// Product management functions
function openProductModal() {
  openModal("productModal");
  // Clear form
  document
    .getElementById("productModal")
    .querySelectorAll("input, textarea")
    .forEach((input) => {
      input.value = "";
    });
}

function saveProduct() {
  if (!validateForm("productModal")) {
    showAlert(getTranslation("fix_form_errors"), "error");
    return;
  }

  const productData = {
    id: generateId(),
    name: document.getElementById("productName").value.trim(),
    description: document.getElementById("productDescription").value.trim(),
    price: parseFloat(document.getElementById("productPrice").value) || 0,
    unit: document.getElementById("productUnit").value.trim(),
    category: document.getElementById("productCategory").value.trim(),
    stock: parseInt(document.getElementById("productStock").value) || 0,
    code: document.getElementById("productCode").value.trim(),
    createdAt: new Date().toISOString(),
  };

  products.push(productData);
  saveData();
  loadProductsList();
  closeModal("productModal");
  clearValidation("productModal");
  showAlert(getTranslation("product_saved"), "success");
}

function loadProductsList() {
  const container = document.getElementById("productsList");

  if (products.length === 0) {
    container.innerHTML = `<p style="color: #6c757d; text-align: center; padding: 20px;">${getTranslation(
      "no_products_msg"
    )}</p>`;
    return;
  }

  container.innerHTML = products
    .map(
      (product) => `
          <div class="product-item">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div style="flex: 1;">
                <h4 style="margin: 0 0 5px 0; color: #667eea;">${
                  product.name
                }</h4>
                <p style="margin: 0 0 5px 0; color: #6c757d; font-size: 0.9em;">${
                  product.description || "لا يوجد وصف"
                }</p>
                <div style="font-size: 0.9em; color: #495057;">
                  <span style="font-weight: bold;">السعر: ${formatCurrency(
                    product.price
                  )} ${settings.currency || "AED"}</span>
                  ${product.unit ? ` | الوحدة: ${product.unit}` : ""}
                  ${product.category ? ` | الفئة: ${product.category}` : ""}
                  ${product.stock > 0 ? ` | المخزون: ${product.stock}` : ""}
                </div>
                ${
                  product.code
                    ? `<div style="font-size: 0.8em; color: #6c757d;">كود المنتج: ${product.code}</div>`
                    : ""
                }
              </div>
              <div class="item-actions">
                <button class="btn btn-secondary" onclick="editProduct('${
                  product.id
                }')" style="padding: 5px 10px; font-size: 0.8em;">
                  <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn btn-danger" onclick="deleteProduct('${
                  product.id
                }')" style="padding: 5px 10px; font-size: 0.8em;">
                  <i class="fas fa-trash"></i> حذف
                </button>
              </div>
            </div>
          </div>
        `
    )
    .join("");
}

function editProduct(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  // Fill form with product data
  document.getElementById("productName").value = product.name;
  document.getElementById("productDescription").value =
    product.description || "";
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productUnit").value = product.unit || "";
  document.getElementById("productCategory").value = product.category || "";
  document.getElementById("productStock").value = product.stock;
  document.getElementById("productCode").value = product.code || "";

  openModal("productModal");

  // Change save button to update
  const saveBtn = document.querySelector("#productModal .btn-success");
  saveBtn.innerHTML = '<i class="fas fa-save"></i> تحديث المنتج';
  saveBtn.onclick = () => updateProduct(productId);
}

function updateProduct(productId) {
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex === -1) return;

  products[productIndex] = {
    ...products[productIndex],
    name: document.getElementById("productName").value.trim(),
    description: document.getElementById("productDescription").value.trim(),
    price: parseFloat(document.getElementById("productPrice").value) || 0,
    unit: document.getElementById("productUnit").value.trim(),
    category: document.getElementById("productCategory").value.trim(),
    stock: parseInt(document.getElementById("productStock").value) || 0,
    code: document.getElementById("productCode").value.trim(),
    updatedAt: new Date().toISOString(),
  };

  saveData();
  loadProductsList();
  closeModal("productModal");
  clearValidation("productModal");
  showAlert(getTranslation("product_updated"), "success");
}

function deleteProduct(productId) {
  if (confirm(getTranslation("delete_product"))) {
    products = products.filter((p) => p.id !== productId);
    saveData();
    loadProductsList();
    showAlert(getTranslation("product_deleted"), "success");
  }
}

// Customer management functions
function openCustomerModal() {
  openModal("customerModal");
  // Clear form
  document
    .getElementById("customerModal")
    .querySelectorAll("input, textarea, select")
    .forEach((input) => {
      input.value = "";
    });
}

function saveCustomer() {
  if (!validateForm("customerModal")) {
    showAlert(getTranslation("fix_form_errors"), "error");
    return;
  }

  const customerData = {
    id: generateId(),
    name: document.getElementById("customerName").value.trim(),
    type: document.getElementById("customerType").value,
    phone: document.getElementById("customerPhone").value.trim(),
    email: document.getElementById("customerEmail").value.trim(),
    address: document.getElementById("customerAddress").value.trim(),
    taxNumber: document.getElementById("customerTaxNumber").value.trim(),
    idNumber: document.getElementById("customerIdNumber").value.trim(),
    createdAt: new Date().toISOString(),
  };

  customers.push(customerData);
  saveData();
  loadCustomersList();
  closeModal("customerModal");
  clearValidation("customerModal");
  showAlert(getTranslation("customer_saved"), "success");
}

function loadCustomersList() {
  const container = document.getElementById("customersList");

  if (customers.length === 0) {
    container.innerHTML = `<p style="color: #6c757d; text-align: center; padding: 20px;">${getTranslation(
      "no_customers_msg"
    )}</p>`;
    return;
  }

  container.innerHTML = customers
    .map(
      (customer) => `
          <div class="customer-item">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div style="flex: 1;">
                <h4 style="margin: 0 0 5px 0; color: #667eea;">${
                  customer.name
                }</h4>
                <div style="font-size: 0.9em; color: #6c757d; margin-bottom: 5px;">
                  ${customer.type === "company" ? "شركة" : "فرد"}
                  ${customer.phone ? ` | ${customer.phone}` : ""}
                  ${customer.email ? ` | ${customer.email}` : ""}
                </div>
                ${
                  customer.address
                    ? `<div style="font-size: 0.9em; color: #495057; margin-bottom: 5px;">${customer.address}</div>`
                    : ""
                }
                <div style="font-size: 0.8em; color: #6c757d;">
                  ${
                    customer.taxNumber
                      ? `رقم الضريبة: ${customer.taxNumber}`
                      : ""
                  }
                  ${
                    customer.idNumber
                      ? ` | رقم الهوية: ${customer.idNumber}`
                      : ""
                  }
                </div>
              </div>
              <div class="item-actions">
                <button class="btn btn-secondary" onclick="editCustomer('${
                  customer.id
                }')" style="padding: 5px 10px; font-size: 0.8em;">
                  <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn btn-danger" onclick="deleteCustomer('${
                  customer.id
                }')" style="padding: 5px 10px; font-size: 0.8em;">
                  <i class="fas fa-trash"></i> حذف
                </button>
              </div>
            </div>
          </div>
        `
    )
    .join("");
}

function editCustomer(customerId) {
  const customer = customers.find((c) => c.id === customerId);
  if (!customer) return;

  // Fill form with customer data
  document.getElementById("customerName").value = customer.name;
  document.getElementById("customerType").value = customer.type;
  document.getElementById("customerPhone").value = customer.phone || "";
  document.getElementById("customerEmail").value = customer.email || "";
  document.getElementById("customerAddress").value = customer.address || "";
  document.getElementById("customerTaxNumber").value = customer.taxNumber || "";
  document.getElementById("customerIdNumber").value = customer.idNumber || "";

  openModal("customerModal");

  // Change save button to update
  const saveBtn = document.querySelector("#customerModal .btn-success");
  saveBtn.innerHTML = '<i class="fas fa-save"></i> تحديث العميل';
  saveBtn.onclick = () => updateCustomer(customerId);
}

function updateCustomer(customerId) {
  const customerIndex = customers.findIndex((c) => c.id === customerId);
  if (customerIndex === -1) return;

  customers[customerIndex] = {
    ...customers[customerIndex],
    name: document.getElementById("customerName").value.trim(),
    type: document.getElementById("customerType").value,
    phone: document.getElementById("customerPhone").value.trim(),
    email: document.getElementById("customerEmail").value.trim(),
    address: document.getElementById("customerAddress").value.trim(),
    taxNumber: document.getElementById("customerTaxNumber").value.trim(),
    idNumber: document.getElementById("customerIdNumber").value.trim(),
    updatedAt: new Date().toISOString(),
  };

  saveData();
  loadCustomersList();
  closeModal("customerModal");
  clearValidation("customerModal");
  showAlert(getTranslation("customer_updated"), "success");
}

function deleteCustomer(customerId) {
  if (confirm(getTranslation("delete_customer"))) {
    customers = customers.filter((c) => c.id !== customerId);
    saveData();
    loadCustomersList();
    showAlert(getTranslation("customer_deleted"), "success");
  }
}

// Invoice management functions
function openInvoiceModal() {
  openModal("invoiceModal");

  // Generate invoice number
  document.getElementById("invoiceNumber").value = `INV-${String(
    currentInvoiceNumber
  ).padStart(4, "0")}`;

  // Set today's date
  document.getElementById("invoiceDate").value = new Date()
    .toISOString()
    .split("T")[0];

  // Load customers
  loadCustomerOptions();

  // Load products
  loadProductOptions();

  // Reset form
  document.getElementById("invoiceCustomer").value = "";
  document.getElementById("paymentMethod").value = "cash";
  document.getElementById("dueDays").value = "30";
  document.getElementById("invoiceTaxRate").value =
    settings.defaultTaxRate || "14";
  document.getElementById("invoiceDiscount").value = "0";
  document.getElementById("invoiceNotes").value = "";

  // Reset items
  const itemsContainer = document.getElementById("invoiceItems");
  itemsContainer.innerHTML = `
          <div class="invoice-item">
            <div class="row">
              <div class="col-3">
                <label>المنتج/الخدمة</label>
                <select class="item-product" onchange="updateItemPrice(this)">
                  <option value="">اختر منتج...</option>
                </select>
              </div>
              <div class="col">
                <label>الكمية</label>
                <input type="number" class="item-quantity" value="1" min="1" onchange="calculateItemTotal(this)">
              </div>
              <div class="col">
                <label>السعر</label>
                <input type="number" class="item-price" step="0.01" onchange="calculateItemTotal(this)">
              </div>
              <div class="col">
                <label>الإجمالي</label>
                <input type="number" class="item-total" step="0.01" readonly>
              </div>
              <div class="col">
                <button class="btn btn-danger" onclick="removeItem(this)">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        `;

  loadProductOptions();
  calculateInvoiceTotal();
}

function loadCustomerOptions() {
  const select = document.getElementById("invoiceCustomer");
  select.innerHTML = '<option value="">اختر عميل...</option>';
  customers.forEach((customer) => {
    select.innerHTML += `<option value="${customer.id}">${customer.name}</option>`;
  });
}

function loadProductOptions() {
  document.querySelectorAll(".item-product").forEach((select) => {
    if (select.innerHTML.includes("اختر منتج...")) {
      select.innerHTML = '<option value="">اختر منتج...</option>';
      products.forEach((product) => {
        select.innerHTML += `<option value="${product.id}" data-price="${
          product.price
        }">${product.name} - ${formatCurrency(product.price)}</option>`;
      });
    }
  });
}

function updateItemPrice(selectElement) {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const priceInput = selectElement.closest(".row").querySelector(".item-price");

  if (selectedOption.value && selectedOption.dataset.price) {
    priceInput.value = selectedOption.dataset.price;
    calculateItemTotal(selectElement);
  } else {
    priceInput.value = "";
    calculateItemTotal(selectElement);
  }
}

function calculateItemTotal(element) {
  const row = element.closest(".row");
  const quantity = parseFloat(row.querySelector(".item-quantity").value) || 0;
  const price = parseFloat(row.querySelector(".item-price").value) || 0;
  const total = quantity * price;

  row.querySelector(".item-total").value = total.toFixed(2);
  calculateInvoiceTotal();
}

function addInvoiceItem() {
  const itemsContainer = document.getElementById("invoiceItems");
  const newItem = document.createElement("div");
  newItem.className = "invoice-item";
  newItem.innerHTML = `
          <div class="row">
            <div class="col-3">
              <label>المنتج/الخدمة</label>
              <select class="item-product" onchange="updateItemPrice(this)">
                <option value="">اختر منتج...</option>
              </select>
            </div>
            <div class="col">
              <label>الكمية</label>
              <input type="number" class="item-quantity" value="1" min="1" onchange="calculateItemTotal(this)">
            </div>
            <div class="col">
              <label>السعر</label>
              <input type="number" class="item-price" step="0.01" onchange="calculateItemTotal(this)">
            </div>
            <div class="col">
              <label>الإجمالي</label>
              <input type="number" class="item-total" step="0.01" readonly>
            </div>
            <div class="col">
              <button class="btn btn-danger" onclick="removeItem(this)">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        `;

  itemsContainer.appendChild(newItem);
  loadProductOptions();
}

function removeItem(button) {
  const itemsContainer = document.getElementById("invoiceItems");
  if (itemsContainer.children.length > 1) {
    button.closest(".invoice-item").remove();
    calculateInvoiceTotal();
  } else {
    showAlert(getTranslation("min_one_item"), "warning");
  }
}

function calculateInvoiceTotal() {
  let subtotal = 0;

  document.querySelectorAll(".item-total").forEach((totalInput) => {
    subtotal += parseFloat(totalInput.value) || 0;
  });

  const discountRate =
    parseFloat(document.getElementById("invoiceDiscount").value) || 0;
  const discountAmount = (subtotal * discountRate) / 100;
  const afterDiscount = subtotal - discountAmount;

  const taxRate =
    parseFloat(document.getElementById("invoiceTaxRate").value) || 0;
  const taxAmount = (afterDiscount * taxRate) / 100;
  const total = afterDiscount + taxAmount;

  document.getElementById("subtotal").textContent = formatCurrency(subtotal);
  document.getElementById("discountAmount").textContent =
    formatCurrency(discountAmount);
  document.getElementById("taxAmount").textContent = formatCurrency(taxAmount);
  document.getElementById("totalAmount").textContent = formatCurrency(total);
}

function saveInvoice() {
  const invoiceData = collectInvoiceData();
  if (!validateInvoice(invoiceData)) return;

  invoices.push(invoiceData);
  currentInvoiceNumber++;
  saveData();
  loadInvoicesList();
  closeModal("invoiceModal");
  clearValidation("invoiceModal");
  showAlert(getTranslation("invoice_saved"), "success");
  updateDashboard();
}

function saveAndPrintInvoice() {
  const invoiceData = collectInvoiceData();
  if (!validateInvoice(invoiceData)) return;

  invoices.push(invoiceData);
  currentInvoiceNumber++;
  saveData();

  // Display invoice for printing
  displayInvoice(invoiceData);
  closeModal("invoiceModal");
  updateDashboard();
}

function collectInvoiceData() {
  const items = [];
  document.querySelectorAll(".invoice-item").forEach((itemElement) => {
    const row = itemElement.querySelector(".row");
    const productSelect = row.querySelector(".item-product");
    const quantity = parseFloat(row.querySelector(".item-quantity").value) || 0;
    const price = parseFloat(row.querySelector(".item-price").value) || 0;
    const total = parseFloat(row.querySelector(".item-total").value) || 0;

    if (productSelect.value && quantity > 0 && price > 0) {
      const product = products.find((p) => p.id === productSelect.value);
      items.push({
        productId: productSelect.value,
        productName: product ? product.name : "منتج غير محدد",
        quantity: quantity,
        price: price,
        total: total,
      });
    }
  });

  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const discountRate =
    parseFloat(document.getElementById("invoiceDiscount").value) || 0;
  const discountAmount = (subtotal * discountRate) / 100;
  const afterDiscount = subtotal - discountAmount;
  const taxRate =
    parseFloat(document.getElementById("invoiceTaxRate").value) || 0;
  const taxAmount = (afterDiscount * taxRate) / 100;
  const total = afterDiscount + taxAmount;

  const customerId = document.getElementById("invoiceCustomer").value;
  const customer = customers.find((c) => c.id === customerId);

  return {
    id: generateId(),
    number: document.getElementById("invoiceNumber").value,
    date: document.getElementById("invoiceDate").value,
    customerId: customerId,
    customerName: customer ? customer.name : "عميل غير محدد",
    paymentMethod: document.getElementById("paymentMethod").value,
    dueDays: parseInt(document.getElementById("dueDays").value) || 30,
    items: items,
    subtotal: subtotal,
    discountRate: discountRate,
    discountAmount: discountAmount,
    taxRate: taxRate,
    taxAmount: taxAmount,
    total: total,
    notes: document.getElementById("invoiceNotes").value.trim(),
    createdAt: new Date().toISOString(),
  };
}

function validateInvoice(invoiceData) {
  if (!invoiceData.number) {
    showAlert(getTranslation("invoice_number_required"), "error");
    return false;
  }
  if (!invoiceData.date) {
    showAlert(getTranslation("invoice_date_required"), "error");
    return false;
  }
  if (invoiceData.items.length === 0) {
    showAlert(getTranslation("invoice_items_required"), "error");
    return false;
  }
  return true;
}

function loadInvoicesList() {
  const container = document.getElementById("invoicesList");

  if (invoices.length === 0) {
    container.innerHTML = `<p style="color: #6c757d; text-align: center; padding: 20px;">${getTranslation(
      "no_invoices_msg"
    )}</p>`;
    return;
  }

  container.innerHTML = invoices
    .slice()
    .reverse()
    .map(
      (invoice) => `
          <div class="invoice-item">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div style="flex: 1;">
                <h4 style="margin: 0 0 5px 0; color: #667eea;">فاتورة #${
                  invoice.number
                }</h4>
                <div style="font-size: 0.9em; color: #6c757d; margin-bottom: 5px;">
                  ${new Date(invoice.date).toLocaleDateString("ar-EG")} - ${
        invoice.customerName
      }
                </div>
                <div style="font-size: 0.9em; color: #495057;">
                  ${invoice.items.length} عنصر | ${
        invoice.paymentMethod === "cash"
          ? "نقداً"
          : invoice.paymentMethod === "card"
          ? "بطاقة ائتمان"
          : invoice.paymentMethod === "bank"
          ? "تحويل بنكي"
          : "شيك"
      }
                </div>
                ${
                  invoice.notes
                    ? `<div style="font-size: 0.8em; color: #6c757d; margin-top: 5px;">${invoice.notes}</div>`
                    : ""
                }
              </div>
              <div style="text-align: left;">
                <div style="font-weight: bold; color: #28a745; font-size: 1.2em;">
                  ${formatCurrency(invoice.total)} ${settings.currency || "AED"}
                </div>
                <div class="item-actions" style="margin-top: 10px;">
                  <button class="btn btn-primary" onclick="displayInvoice('${
                    invoice.id
                  }')" style="padding: 5px 10px; font-size: 0.8em;">
                    <i class="fas fa-eye"></i> عرض
                  </button>
                  <button class="btn btn-secondary" onclick="editInvoice('${
                    invoice.id
                  }')" style="padding: 5px 10px; font-size: 0.8em;">
                    <i class="fas fa-edit"></i> تعديل
                  </button>
                  <button class="btn btn-danger" onclick="deleteInvoice('${
                    invoice.id
                  }')" style="padding: 5px 10px; font-size: 0.8em;">
                    <i class="fas fa-trash"></i> حذف
                  </button>
                </div>
              </div>
            </div>
          </div>
        `
    )
    .join("");
}

function displayInvoice(invoiceId) {
  const invoice = invoices.find((i) => i.id === invoiceId);
  if (!invoice) return;

  // Display company info
  document.getElementById("displayCompanyName").textContent =
    settings.companyName || "اسم الشركة";
  document.getElementById("displayCompanyAddress").textContent =
    settings.companyAddress || "العنوان";
  document.getElementById("displayCompanyPhone").textContent =
    settings.companyPhone || "---";
  document.getElementById("displayCompanyEmail").textContent =
    settings.companyEmail || "---";

  // Display invoice info
  document.getElementById("displayInvoiceNumber").textContent = invoice.number;
  document.getElementById("displayInvoiceDate").textContent = new Date(
    invoice.date
  ).toLocaleDateString("ar-EG");

  const dueDate = new Date(invoice.date);
  dueDate.setDate(dueDate.getDate() + invoice.dueDays);
  document.getElementById("displayDueDate").textContent =
    dueDate.toLocaleDateString("ar-EG");

  document.getElementById("displayPaymentMethod").textContent =
    invoice.paymentMethod === "cash"
      ? "Cash"
      : invoice.paymentMethod === "card"
      ? "Credit Card"
      : invoice.paymentMethod === "bank"
      ? "Bank Transfer"
      : "Check";

  // Display customer info
  const customer = customers.find((c) => c.id === invoice.customerId);
  document.getElementById("displayCustomerInfo").innerHTML = `
          <div style="font-size: 1.1em; margin-bottom: 10px;"><strong>${
            invoice.customerName
          }</strong></div>
          ${
            customer && customer.phone
              ? `<div style="margin-bottom: 5px;"><strong>Phone:</strong> ${customer.phone}</div>`
              : ""
          }
          ${
            customer && customer.email
              ? `<div style="margin-bottom: 5px;"><strong>Email:</strong> ${customer.email}</div>`
              : ""
          }
          ${
            customer && customer.address
              ? `<div style="margin-bottom: 5px;"><strong>Address:</strong> ${customer.address}</div>`
              : ""
          }
        `;

  // Display items
  const itemsBody = document.getElementById("displayItemsBody");
  itemsBody.innerHTML = invoice.items
    .map(
      (item) => `
          <tr>
            <td style="text-align: left;">${item.productName}</td>
            <td style="text-align: center;">${item.quantity}</td>
            <td style="text-align: center;">---</td>
            <td style="text-align: center;">${formatCurrency(item.price)}</td>
            <td style="text-align: right;">${formatCurrency(item.total)}</td>
          </tr>
        `
    )
    .join("");

  // Display totals
  document.getElementById("displaySubtotal").textContent = formatCurrency(
    invoice.subtotal
  );
  document.getElementById("displayDiscount").textContent = formatCurrency(
    invoice.discountAmount
  );
  document.getElementById("displayTax").textContent = formatCurrency(
    invoice.taxAmount
  );
  document.getElementById("displayTotal").textContent = formatCurrency(
    invoice.total
  );

  // Display notes
  if (invoice.notes) {
    document.getElementById("displayNotes").innerHTML = `
            <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; text-align: left;">
              <h4 style="margin: 0 0 10px 0; color: #495057;">Notes:</h4>
              <p style="margin: 0; line-height: 1.5;">${invoice.notes}</p>
            </div>
          `;
  } else {
    document.getElementById("displayNotes").innerHTML = "";
  }

  // Show invoice display
  document.getElementById("invoiceDisplay").style.display = "block";
  document.querySelector(".app").style.display = "none";
}

function printInvoice() {
  window.print();
}

function closeInvoiceDisplay() {
  document.getElementById("invoiceDisplay").style.display = "none";
  document.querySelector(".app").style.display = "block";
}

function editInvoice(invoiceId) {
  // Implementation for editing invoices
  showAlert(getTranslation("edit_invoice_coming"), "info");
}

function deleteInvoice(invoiceId) {
  if (confirm(getTranslation("delete_invoice"))) {
    invoices = invoices.filter((i) => i.id !== invoiceId);
    saveData();
    loadInvoicesList();
    showAlert(getTranslation("invoice_deleted"), "success");
    updateDashboard();
  }
}

// Settings functions
function saveSettings() {
  settings = {
    companyName: document.getElementById("companyName").value.trim(),
    companyPhone: document.getElementById("companyPhone").value.trim(),
    companyEmail: document.getElementById("companyEmail").value.trim(),
    companyWebsite: document.getElementById("companyWebsite").value.trim(),
    companyAddress: document.getElementById("companyAddress").value.trim(),
    defaultTaxRate:
      parseFloat(document.getElementById("defaultTaxRate").value) || 14,
    currency: document.getElementById("defaultCurrency").value,
  };

  saveData();
  showAlert(getTranslation("settings_saved"), "success");
}

function exportData() {
  const data = {
    invoices: invoices,
    products: products,
    customers: customers,
    settings: settings,
    exportDate: new Date().toISOString(),
  };

  const dataStr = JSON.stringify(data, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(dataBlob);
  link.download = `invoice-data-${new Date().toISOString().split("T")[0]}.json`;
  link.click();
}

function importData() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";

  input.onchange = function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const data = JSON.parse(e.target.result);

        if (data.invoices) invoices = data.invoices;
        if (data.products) products = data.products;
        if (data.customers) customers = data.customers;
        if (data.settings) settings = data.settings;

        saveData();
        loadLists();
        updateDashboard();
        showAlert(getTranslation("data_imported"), "success");
      } catch (error) {
        showAlert(getTranslation("import_error"), "error");
      }
    };
    reader.readAsText(file);
  };

  input.click();
}

// Search and filter functions
function filterInvoices() {
  const searchTerm = document
    .getElementById("invoiceSearch")
    .value.toLowerCase();
  const invoiceItems = document.querySelectorAll("#invoicesList .invoice-item");

  invoiceItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(searchTerm) ? "block" : "none";
  });
}

function filterProducts() {
  const searchTerm = document
    .getElementById("productSearch")
    .value.toLowerCase();
  const productItems = document.querySelectorAll("#productsList .product-item");

  productItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(searchTerm) ? "block" : "none";
  });
}

function filterCustomers() {
  const searchTerm = document
    .getElementById("customerSearch")
    .value.toLowerCase();
  const customerItems = document.querySelectorAll(
    "#customersList .customer-item"
  );

  customerItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(searchTerm) ? "block" : "none";
  });
}

// Initialize app
function initializeApp() {
  // Load settings into form
  if (settings.companyName)
    document.getElementById("companyName").value = settings.companyName;
  if (settings.companyPhone)
    document.getElementById("companyPhone").value = settings.companyPhone;
  if (settings.companyEmail)
    document.getElementById("companyEmail").value = settings.companyEmail;
  if (settings.companyWebsite)
    document.getElementById("companyWebsite").value = settings.companyWebsite;
  if (settings.companyAddress)
    document.getElementById("companyAddress").value = settings.companyAddress;
  if (settings.defaultTaxRate)
    document.getElementById("defaultTaxRate").value = settings.defaultTaxRate;
  if (settings.currency)
    document.getElementById("defaultCurrency").value = settings.currency;
}

function loadLists() {
  loadInvoicesList();
  loadProductsList();
  loadCustomersList();
}

// Add some sample data for demonstration
function addSampleData() {
  if (products.length === 0) {
    products = [
      {
        id: "sample1",
        name: "خدمة استشارية",
        description: "خدمة استشارية في مجال الأعمال",
        price: 500,
        unit: "ساعة",
        category: "خدمات",
        stock: 0,
        code: "CONS-001",
        createdAt: new Date().toISOString(),
      },
      {
        id: "sample2",
        name: "منتج رقمي",
        description: "منتج رقمي قابل للتحميل",
        price: 299,
        unit: "قطعة",
        category: "منتجات رقمية",
        stock: 100,
        code: "DIG-001",
        createdAt: new Date().toISOString(),
      },
    ];
  }

  if (customers.length === 0) {
    customers = [
      {
        id: "sample1",
        name: "شركة النمو المحدودة",
        type: "company",
        phone: "+971501234567",
        email: "info@company.com",
        address: "دبي، الإمارات العربية المتحدة",
        taxNumber: "123456789",
        idNumber: "987654321",
        createdAt: new Date().toISOString(),
      },
      {
        id: "sample2",
        name: "أحمد محمد",
        type: "individual",
        phone: "+971507654321",
        email: "ahmed@email.com",
        address: "أبوظبي، الإمارات العربية المتحدة",
        taxNumber: "",
        idNumber: "1234567890123",
        createdAt: new Date().toISOString(),
      },
    ];
  }

  if (!settings.companyName) {
    settings = {
      companyName: "شركتي للخدمات",
      companyPhone: "+971501234567",
      companyEmail: "info@mycompany.com",
      companyWebsite: "www.mycompany.com",
      companyAddress: "دبي، الإمارات العربية المتحدة",
      defaultTaxRate: 14,
      currency: "AED",
    };
  }

  saveData();
  loadLists();
  updateDashboard();
  initializeApp();
}

// Beautiful Alert System
function showAlert(message, type = "info", duration = 5000) {
  const alertContainer = document.getElementById("alertContainer");
  const alertId = "alert-" + Date.now();

  const alertTypes = {
    success: { icon: "✅", class: "alert-success" },
    error: { icon: "❌", class: "alert-error" },
    warning: { icon: "⚠️", class: "alert-warning" },
    info: { icon: "ℹ️", class: "alert-info" },
  };

  const alertConfig = alertTypes[type] || alertTypes.info;

  const alertHTML = `
          <div id="${alertId}" class="alert ${alertConfig.class}">
            <span class="alert-icon">${alertConfig.icon}</span>
            <div class="alert-content">${message}</div>
            <button class="alert-close" onclick="hideAlert('${alertId}')">&times;</button>
          </div>
        `;

  alertContainer.insertAdjacentHTML("beforeend", alertHTML);

  // Auto hide after duration
  if (duration > 0) {
    setTimeout(() => {
      hideAlert(alertId);
    }, duration);
  }
}

function hideAlert(alertId) {
  const alert = document.getElementById(alertId);
  if (alert) {
    alert.classList.add("hide");
    setTimeout(() => {
      alert.remove();
    }, 300);
  }
}

// Form Validation Functions
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const inputs = form.querySelectorAll(
    "input[required], select[required], textarea[required]"
  );
  let isValid = true;

  inputs.forEach((input) => {
    const formGroup = input.closest(".form-group");
    if (!formGroup) return;

    // Remove previous validation classes
    formGroup.classList.remove("error", "success");
    const existingError = formGroup.querySelector(".error-message");
    if (existingError) existingError.remove();

    if (!input.value.trim()) {
      formGroup.classList.add("error");
      const errorMsg = document.createElement("div");
      errorMsg.className = "error-message";
      errorMsg.textContent = getTranslation("field_required");
      formGroup.appendChild(errorMsg);
      isValid = false;
    } else {
      formGroup.classList.add("success");

      // Additional validations
      if (input.type === "email" && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          formGroup.classList.remove("success");
          formGroup.classList.add("error");
          const errorMsg = document.createElement("div");
          errorMsg.className = "error-message";
          errorMsg.textContent = getTranslation("invalid_email");
          formGroup.appendChild(errorMsg);
          isValid = false;
        }
      }

      if (input.type === "number") {
        const value = parseFloat(input.value);
        if (isNaN(value) || value < 0) {
          formGroup.classList.remove("success");
          formGroup.classList.add("error");
          const errorMsg = document.createElement("div");
          errorMsg.className = "error-message";
          errorMsg.textContent = getTranslation("invalid_number");
          formGroup.appendChild(errorMsg);
          isValid = false;
        }
      }
    }
  });

  return isValid;
}

function clearValidation(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const formGroups = form.querySelectorAll(".form-group");
  formGroups.forEach((group) => {
    group.classList.remove("error", "success");
    const errorMsg = group.querySelector(".error-message");
    if (errorMsg) errorMsg.remove();
  });
}
