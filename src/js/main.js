import '../scss/style.scss';
import { fetchData } from './api';
import { showLoader, hideLoader, showError, updateSuccess } from './ui';
import { copyToClipboard } from './clipboard';

const apiUrl = 'https://api.jsonbin.io/v3/b/670101afacd3cb34a8919055';

document.addEventListener('DOMContentLoaded', async () => {
  const main = document.querySelector('.main');
  if (!main) {
    console.error("Main element not found");
    return;
  }

  showLoader();

  try {
    const data = await fetchData(apiUrl);

    const wrapper = document.createElement('div');
    
    data.record.forEach(element => {
      if (!element.section || !element.data) {
        showError('Skipping element due to missing section or data');
        return;
      }

      // Section Name
      const sectionName = document.createElement('span');
      sectionName.className = 'section-name';
      sectionName.innerText = element.section;
      wrapper.appendChild(sectionName);

      // Section Data
      element.data.forEach(data => {
        if (!data.key || !data.value) {
          showError('Skipping data entry due to missing key or value');
          return;
        }

        const key = document.createElement('span');
        key.className = 'section-key';
        key.innerText = data.key;
        wrapper.appendChild(key);

        const valueWrap = document.createElement('div');
        valueWrap.className = 'value-wrap';

        const value = document.createElement('span');
        value.className = 'section-value';
        value.innerText = data.value;
        valueWrap.appendChild(value);

        // Copy Icon
        const copyIcon = document.createElement('span');
        copyIcon.className = 'copy-icon';
        copyIcon.innerHTML = `<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
<path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>`;
        
        copyIcon.addEventListener('click', () => {
          copyToClipboard(value.innerText, copyIcon);
        });

        valueWrap.appendChild(copyIcon);
        wrapper.appendChild(valueWrap);
      });
    });

    main.appendChild(wrapper);

    updateSuccess();
    setTimeout(() => hideLoader(), 2000);

  } catch (error) {
    showError(error.message);
    hideLoader();
  }
});
