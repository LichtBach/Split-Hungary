import { useEffect } from 'react';

/**
 * Component to track clicks on buttons containing "Contact" text
 * Pushes click_contact event to Google Tag Manager dataLayer
 */
export const ContactButtonTracker = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Find the button element (clicked element or parent)
      let button: HTMLElement | null = null;

      // Check if target is a button or has button role
      if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
        button = target;
      } else {
        // Check if parent is a button (for clicks on child elements like icons)
        button = target.closest('button, [role="button"]');
      }

      if (button) {
        const buttonText = button.textContent || button.innerText || '';

        // Check if button text contains "Contact" (case insensitive)
        if (buttonText.toLowerCase().includes('contact')) {
          // Push event to dataLayer
          if (window.dataLayer) {
            window.dataLayer.push({
              event: 'click_contact',
              button_text: buttonText.trim(),
              button_location: window.location.pathname
            });

            console.log(`[Contact Button Click] Text: "${buttonText.trim()}" | Location: ${window.location.pathname}`);
          }
        }
      }
    };

    // Add global click listener
    document.addEventListener('click', handleClick, true);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return null; // This component doesn't render anything
};
