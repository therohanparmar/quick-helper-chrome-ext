const apiUrl = 'https://api.jsonbin.io/v3/b/670101afacd3cb34a8919055';

const copySvg = `<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
<path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>`;

document.addEventListener('DOMContentLoaded', () => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let main = document.querySelector('.main');
      let waitText = document.querySelector('.wait-text');
      let wrapper = document.createElement('div'); // Initialize wrapper here
      data.record.forEach(element => {
        let sectionName = document.createElement('span');
        sectionName.className = 'section-name';
        sectionName.innerText = element.section;
        wrapper.appendChild(sectionName);

        element.data.forEach((data) => {
          let key = document.createElement('span');
          key.className = 'section-key';
          key.innerText = data.key;
          wrapper.appendChild(key);

          let valueWrap = document.createElement('div');
          valueWrap.className = 'value-wrap';
          
          let value = document.createElement('span');
          value.className = 'section-value';
          value.innerText = data.value;
          valueWrap.appendChild(value);

          // Create a container for the copy SVG
          let copyIcon = document.createElement('span');
          copyIcon.className = 'copy-icon';  // Optional class for styling
          copyIcon.innerHTML = copySvg;

          // Add event listener to the copy button
          copyIcon.addEventListener('click', () => {
            navigator.clipboard.writeText(value.innerText).then(() => {
              //TODO: add some code for success
            }).catch(err => {
              alert('Failed to copy text: ', err);
            });
          });

          valueWrap.appendChild(copyIcon);
          wrapper.appendChild(valueWrap);
        });

        // Append the wrapper after processing all sections
        main.appendChild(wrapper);
      });
      waitText.style.display = 'none';
    })
    .catch(error => {
      waitText.style.display = 'none';
      alert('Error fetching JSON data:', error);
    });
});
