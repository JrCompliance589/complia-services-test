"use client";

import Script from "next/script";

const settings = {
  default_language: "en",
  languages: ["ar", "zh-CN", "en", "es", "tr"],
  url_structure: "none",
  detect_browser_language: false,
  flag_style: "2d",
  flag_size: 16,
  wrapper_selector: "#complia-language-selector",
  switcher_horizontal_position: "inline",
  switcher_open_direction: "bottom",
  native_language_names: false,
  switcher_text_color: "#203247",
  switcher_arrow_color: "#526170",
  switcher_border_color: "#cbd4d9",
  switcher_background_color: "#ffffff",
  switcher_background_shadow_color: "rgba(6, 21, 34, 0.18)",
  switcher_background_hover_color: "#f7f5ef",
  dropdown_text_color: "#0b2033",
  dropdown_hover_color: "#ffffff",
  dropdown_background_color: "#044bad",
};

export function LanguageTranslator() {
  return (
    <div className="language-translator notranslate" aria-label="Translate this website">
      <div id="complia-language-selector" className="gtranslate_wrapper" />
      <Script id="complia-gtranslate-settings" strategy="afterInteractive">
        {`window.gtranslateSettings = ${JSON.stringify(settings)};`}
      </Script>
      <Script
        id="complia-gtranslate-widget"
        src="https://cdn.gtranslate.net/widgets/latest/dwf.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
