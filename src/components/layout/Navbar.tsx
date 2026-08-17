// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { List, X } from "@phosphor-icons/react";
// import { clsx } from "clsx";
// import { Wordmark } from "../../assets/logo/Wordmark";

// const links = [
//   { to: "/", label: "Почетна" },
//   { to: "/destinatsii", label: "Дестинации" },
//   { to: "/dnevnik", label: "Дневник" },
//   { to: "/za-nas", label: "За нас" },
//   { to: "/kontakt", label: "Контакт" },
// ];

// const changeLanguage = (language: "mk" | "en") => {
//   const select = document.querySelector(
//     ".goog-te-combo",
//   ) as HTMLSelectElement | null;

//   if (!select) return;

//   select.value = language;
//   select.dispatchEvent(new Event("change"));
// };

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
//       <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-10">
//         <Link to="/" onClick={() => setIsOpen(false)}>
//           <Wordmark />
//         </Link>

//         <nav className="hidden items-center gap-8 md:flex">
//           {links.map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               end={link.to === "/"}
//               className={({ isActive }) =>
//                 clsx(
//                   "text-sm font-semibold transition-colors",
//                   isActive ? "text-rust" : "text-ink-soft hover:text-ink",
//                 )
//               }
//             >
//               {link.label}
//             </NavLink>
//           ))}
//         </nav>

//         <button
//           type="button"
//           aria-label={isOpen ? "Затвори мени" : "Отвори мени"}
//           aria-expanded={isOpen}
//           onClick={() => setIsOpen((value) => !value)}
//           className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
//         >
//           {isOpen ? <X size={23} /> : <List size={23} />}
//         </button>
//       </div>

//       {isOpen && (
//         <nav className="border-t border-ink/10 bg-cream px-6 py-5 md:hidden">
//           <div className="mx-auto flex max-w-6xl flex-col gap-1">
//             {links.map((link) => (
//               <NavLink
//                 key={link.to}
//                 to={link.to}
//                 end={link.to === "/"}
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   clsx(
//                     "rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
//                     isActive
//                       ? "bg-rust/10 text-rust"
//                       : "text-ink-soft hover:bg-ink/5 hover:text-ink",
//                   )
//                 }
//               >
//                 {link.label}
//               </NavLink>
//             ))}
//           </div>
//         </nav>
//       )}

//       <div className="language-switcher">
//         <button
//           onClick={() => changeLanguage("mk")}
//           className="language-button"
//         >
//           MK
//         </button>

//         <span>|</span>

//         <button
//           onClick={() => changeLanguage("en")}
//           className="language-button"
//         >
//           EN
//         </button>
//       </div>
//     </header>
//   );
// }

// import { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { List, X } from "@phosphor-icons/react";
// import { clsx } from "clsx";
// import { Wordmark } from "../../assets/logo/Wordmark";

// declare global {
//   interface Window {
//     google: any;
//     googleTranslateElementInit: () => void;
//   }
// }

// const links = [
//   { to: "/", label: "Почетна" },
//   { to: "/destinatsii", label: "Дестинации" },
//   { to: "/dnevnik", label: "Дневник" },
//   { to: "/za-nas", label: "За нас" },
//   { to: "/kontakt", label: "Контакт" },
// ];

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Initialize Google Translate
//   useEffect(() => {
//     // Check if already loaded
//     if (document.querySelector(".goog-te-combo")) {
//       return;
//     }

//     // Define the init function globally
//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "mk",
//           includedLanguages: "mk,en",
//           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//         },
//         "google_translate_element",
//       );
//     };

//     // Load Google Translate script
//     const script = document.createElement("script");
//     script.src =
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     script.async = true;
//     document.body.appendChild(script);

//     // Cleanup
//     return () => {
//       // Optional: remove script if needed
//     };
//   }, []);

//   // Function to change language
//   const changeLanguage = (language: "mk" | "en") => {
//     const select = document.querySelector(
//       ".goog-te-combo",
//     ) as HTMLSelectElement | null;

//     if (!select) {
//       console.warn("Google Translate not ready yet");
//       return;
//     }

//     select.value = language;
//     select.dispatchEvent(new Event("change"));
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
//       <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-10">
//         <Link to="/" onClick={() => setIsOpen(false)}>
//           <Wordmark />
//         </Link>

//         <div className="flex items-center gap-8">
//           <nav className="hidden items-center gap-8 md:flex">
//             {links.map((link) => (
//               <NavLink
//                 key={link.to}
//                 to={link.to}
//                 end={link.to === "/"}
//                 className={({ isActive }) =>
//                   clsx(
//                     "text-sm font-semibold transition-colors",
//                     isActive ? "text-rust" : "text-ink-soft hover:text-ink",
//                   )
//                 }
//               >
//                 {link.label}
//               </NavLink>
//             ))}
//           </nav>

//           {/* Language Switcher - Desktop */}
//           <div className="hidden items-center gap-2 text-sm font-semibold md:flex">
//             <button
//               onClick={() => changeLanguage("mk")}
//               className="text-ink-soft transition-colors hover:text-ink"
//             >
//               MK
//             </button>
//             <span className="text-ink-soft">|</span>
//             <button
//               onClick={() => changeLanguage("en")}
//               className="text-ink-soft transition-colors hover:text-ink"
//             >
//               EN
//             </button>
//           </div>
//         </div>

//         <button
//           type="button"
//           aria-label={isOpen ? "Затвори мени" : "Отвори мени"}
//           aria-expanded={isOpen}
//           onClick={() => setIsOpen((value) => !value)}
//           className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
//         >
//           {isOpen ? <X size={23} /> : <List size={23} />}
//         </button>
//       </div>

//       {isOpen && (
//         <nav className="border-t border-ink/10 bg-cream px-6 py-5 md:hidden">
//           <div className="mx-auto flex max-w-6xl flex-col gap-1">
//             {links.map((link) => (
//               <NavLink
//                 key={link.to}
//                 to={link.to}
//                 end={link.to === "/"}
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   clsx(
//                     "rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
//                     isActive
//                       ? "bg-rust/10 text-rust"
//                       : "text-ink-soft hover:bg-ink/5 hover:text-ink",
//                   )
//                 }
//               >
//                 {link.label}
//               </NavLink>
//             ))}

//             {/* Language Switcher - Mobile - PERFECT ALIGNMENT */}
//             <div className="flex items-center gap-2 px-4 py-3">
//               <button
//                 onClick={() => {
//                   changeLanguage("mk");
//                   setIsOpen(false);
//                 }}
//                 className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
//               >
//                 MK
//               </button>
//               <span className="text-ink-soft">|</span>
//               <button
//                 onClick={() => {
//                   changeLanguage("en");
//                   setIsOpen(false);
//                 }}
//                 className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
//               >
//                 EN
//               </button>
//             </div>
//           </div>
//         </nav>
//       )}

//       {/* Hidden Google Translate Widget - Must be in the DOM */}
//       <div id="google_translate_element" style={{ display: "none" }}></div>
//     </header>
//   );
// }

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { Wordmark } from "../../assets/logo/Wordmark";
import GoogleTranslate from "next-google-translate-widget";
import "next-google-translate-widget/styles";

const links = [
  { to: "/", label: "Почетна" },
  { to: "/destinatsii", label: "Дестинации" },
  { to: "/dnevnik", label: "Дневник" },
  { to: "/za-nas", label: "За нас" },
  { to: "/kontakt", label: "Контакт" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (language: "mk" | "en") => {
    const select = document.querySelector(
      ".goog-te-combo",
    ) as HTMLSelectElement | null;
    if (!select) {
      console.warn("Google Translate not ready yet");
      return;
    }
    select.value = language;
    select.dispatchEvent(new Event("change", { bubbles: true }));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        {/* Brand – protected from translation */}
        <Link to="/" onClick={() => setIsOpen(false)} className="notranslate">
          <Wordmark />
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  clsx(
                    "text-sm font-semibold transition-colors",
                    isActive ? "text-rust" : "text-ink-soft hover:text-ink",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Language Switcher – protected from translation */}
          <div className="notranslate hidden items-center gap-2 text-sm font-semibold md:flex">
            <button
              onClick={() => changeLanguage("mk")}
              className="text-ink-soft transition-colors hover:text-ink"
            >
              MK
            </button>
            <span className="text-ink-soft">|</span>
            <button
              onClick={() => changeLanguage("en")}
              className="text-ink-soft transition-colors hover:text-ink"
            >
              EN
            </button>
          </div>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Затвори мени" : "Отвори мени"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
        >
          {isOpen ? <X size={23} /> : <List size={23} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-ink/10 bg-cream px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    "rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-rust/10 text-rust"
                      : "text-ink-soft hover:bg-ink/5 hover:text-ink",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Mobile Language Switcher – protected from translation */}
            <div className="notranslate flex items-center gap-2 px-4 py-3">
              <button
                onClick={() => {
                  changeLanguage("mk");
                  setIsOpen(false);
                }}
                className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
              >
                MK
              </button>
              <span className="text-ink-soft">|</span>
              <button
                onClick={() => {
                  changeLanguage("en");
                  setIsOpen(false);
                }}
                className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
              >
                EN
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Hidden Google Translate Widget */}
      <div className="hidden">
        <GoogleTranslate
          pageLanguage="mk"
          languages={[
            { label: "Македонски", value: "mk", flag: "mk" },
            { label: "English", value: "en", flag: "us" },
          ]}
        />
      </div>
    </header>
  );
}
