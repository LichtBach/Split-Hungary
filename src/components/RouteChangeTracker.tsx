import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component to track route changes and push page_view events to Google Tag Manager dataLayer
 */
export const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Get the full URL
    const fullUrl = window.location.href;
    const path = location.pathname + location.search + location.hash;

    // Push page_view event to dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: location.pathname,
        page_location: fullUrl,
        page_title: document.title
      });

      console.log(`[Page View] Path: ${location.pathname} | URL: ${fullUrl}`);
    }
  }, [location]);

  return null; // This component doesn't render anything
};
