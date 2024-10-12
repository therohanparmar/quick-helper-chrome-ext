export const copyToClipboard = (text, copyIcon) => {
    navigator.clipboard.writeText(text).then(() => {
      // Change icon to indicate success
      const originalSVG = copyIcon.innerHTML;
      copyIcon.innerHTML = `
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
          <path d="M13 1L6 9l-3-3L1 8l5 5L15 3z"></path> <!-- Checkmark icon path -->
        </svg>`;

      // Create a tooltip to indicate copy success
      let tooltip = document.createElement('span');
      tooltip.className = 'tooltip';
      tooltip.innerText = 'Copied!';
      copyIcon.appendChild(tooltip);
  
      // Restore original icon after a short delay
      setTimeout(() => {
        copyIcon.innerHTML = originalSVG; // Restore original icon
        copyIcon.removeChild(tooltip); // Remove tooltip
      }, 1500);
    }).catch(err => {
    });
};
