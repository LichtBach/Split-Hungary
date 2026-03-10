import { useEffect, useRef } from 'react';

/**
 * Custom hook to track section visibility and push events to Google Tag Manager dataLayer
 * Fires a "section_visibility" event when at least 40% of a section is visible in the viewport
 */
export const useSectionVisibility = () => {
  const observedSections = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Track which sections have already triggered the event
    const triggeredSections = new Set<string>();

    // Helper function to check if ID is a valid section identifier
    const isValidSectionId = (id: string): boolean => {
      // Filter out form field IDs and Radix UI generated IDs
      const invalidPatterns = [
        /^radix-/i,           // Radix UI generated IDs (e.g., radix-:r5:)
        /Employee/i,          // Form fields like numEmployees, avgEmployees
        /Salary/i,            // Form fields like avgSalary
        /Hours/i,             // Form fields like hoursWasted
        /Cost/i,              // Form fields like costPerHour
        /^[a-z][a-z0-9]*$/,   // Single word camelCase (likely form fields)
      ];

      // Check if ID matches any invalid pattern
      for (const pattern of invalidPatterns) {
        if (pattern.test(id)) {
          return false;
        }
      }

      // Valid section IDs typically use kebab-case or have meaningful names
      return id.includes('-') || id.length > 15;
    };

    // Create IntersectionObserver with 40% threshold
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;

          // Only process elements with a valid ID
          if (!sectionId || !isValidSectionId(sectionId)) return;

          // Check if at least 40% is visible and hasn't been triggered yet
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4 && !triggeredSections.has(sectionId)) {
            // Mark as triggered
            triggeredSections.add(sectionId);

            // Push event to dataLayer
            if (window.dataLayer) {
              window.dataLayer.push({
                event: 'section_visibility',
                section_name: sectionId
              });

              console.log(`[Section Visibility] Tracked: ${sectionId}`);
            }
          }
        });
      },
      {
        threshold: 0.4, // Trigger when 40% of the element is visible
        rootMargin: '0px'
      }
    );

    // Find all sections and divs with IDs (our trackable sections)
    const sections = document.querySelectorAll('section[id], div[id], footer[id]');

    sections.forEach((section) => {
      if (section.id && isValidSectionId(section.id)) {
        observer.observe(section);
        observedSections.current.add(section.id);
      }
    });

    // Cleanup
    return () => {
      observer.disconnect();
      observedSections.current.clear();
    };
  }, []);
};
