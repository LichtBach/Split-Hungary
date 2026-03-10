/// <reference types="vite/client" />

interface CalendlyInlineWidgetOptions {
  url: string;
  parentElement: Element;
}

interface Window {
  Calendly?: {
    initInlineWidget: (options: CalendlyInlineWidgetOptions) => void;
    showPopupWidget: (url: string) => void;
  };
  dataLayer?: any[];
}
