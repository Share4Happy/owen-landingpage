/**
 * Lead Registration Form Handling
 * Validation, UI feedback, loading state & submission
 */

import { CONFIG } from './config.js';

export function initLeadForm() {
  const form = document.querySelector('#lead-form');
  if (!form) return;

  const nameInput = form.querySelector('#lead-name');
  const phoneInput = form.querySelector('#lead-phone');
  const emailInput = form.querySelector('#lead-email');
  const submitBtn = form.querySelector('button[type="submit"]');
  const formSuccess = form.querySelector('.form-success-message');

  function validatePhone(phone) {
    // Regex for Vietnamese 10-digit mobile phone numbers
    const cleanPhone = phone.replace(/[\s.-]/g, '');
    const regex = /^(0|\+84)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$/;
    return regex.test(cleanPhone);
  }

  function validateEmail(email) {
    if (!email) return true; // Optional field
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function showError(input, errorElement, message) {
    input.classList.add('is-invalid');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('is-visible');
    }
  }

  function clearError(input, errorElement) {
    input.classList.remove('is-invalid');
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.remove('is-visible');
    }
  }

  // Real-time error clearance
  nameInput?.addEventListener('input', () => {
    clearError(nameInput, form.querySelector('#name-error'));
  });
  phoneInput?.addEventListener('input', () => {
    clearError(phoneInput, form.querySelector('#phone-error'));
  });
  emailInput?.addEventListener('input', () => {
    clearError(emailInput, form.querySelector('#email-error'));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let isValid = true;
    const nameVal = nameInput?.value.trim() || '';
    const phoneVal = phoneInput?.value.trim() || '';
    const emailVal = emailInput?.value.trim() || '';

    // Validate Name
    if (!nameVal || nameVal.length < 2) {
      showError(nameInput, form.querySelector('#name-error'), 'Vui lòng nhập họ và tên (tối thiểu 2 ký tự)');
      isValid = false;
    } else {
      clearError(nameInput, form.querySelector('#name-error'));
    }

    // Validate Phone
    if (!phoneVal) {
      showError(phoneInput, form.querySelector('#phone-error'), 'Vui lòng nhập số điện thoại để nhận tư vấn');
      isValid = false;
    } else if (!validatePhone(phoneVal)) {
      showError(phoneInput, form.querySelector('#phone-error'), 'Số điện thoại không hợp lệ (cần 10 chữ số, ví dụ 0902308279)');
      isValid = false;
    } else {
      clearError(phoneInput, form.querySelector('#phone-error'));
    }

    // Validate Email
    if (emailVal && !validateEmail(emailVal)) {
      showError(emailInput, form.querySelector('#email-error'), 'Địa chỉ email không đúng định dạng');
      isValid = false;
    } else {
      clearError(emailInput, form.querySelector('#email-error'));
    }

    if (!isValid) return;

    // Loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner" aria-hidden="true"></span> Đang gửi...';

    const formData = {
      name: nameVal,
      phone: phoneVal,
      email: emailVal,
      timestamp: new Date().toISOString(),
    };

    console.info('[Owen Lead Form Submission]', formData);

    try {
      if (CONFIG.formEndpoint) {
        await fetch(CONFIG.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } else {
        // Simulated network delay when endpoint not yet provided
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      // Success feedback
      form.reset();
      if (formSuccess) {
        formSuccess.classList.add('is-visible');
        formSuccess.focus();
      }
    } catch (err) {
      console.error('[Owen Lead Form] Submission error:', err);
      alert('Đã xảy ra lỗi khi gửi thông tin. Quý khách vui lòng gọi Hotline 0902 308 279 để được hỗ trợ trực tiếp.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}
