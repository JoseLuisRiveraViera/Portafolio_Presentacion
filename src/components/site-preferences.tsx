"use client";

import { createContext, useContext, useEffect, useTransition, type ReactNode } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown, Languages, Moon, Sun } from "lucide-react";
import { isLocale, localeCookie, type Locale } from "@/lib/locale";
import { messages } from "@/lib/messages";

const LocaleContext = createContext<Locale>("es");

export function SitePreferencesProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  return (
    <LocaleContext.Provider value={locale}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange storageKey="jlrv-theme">
        {children}
      </ThemeProvider>
    </LocaleContext.Provider>
  );
}

export function useSiteLocale() {
  const locale = useContext(LocaleContext);
  return { locale, t: messages[locale] };
}

export function SitePreferences() {
  const { locale, t } = useSiteLocale();
  const { resolvedTheme, setTheme } = useTheme();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function changeLanguage(value: string) {
    if (!isLocale(value) || value === locale) return;
    document.cookie = `${localeCookie}=${value}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
    startTransition(() => router.refresh());
  }

  return (
    <div className="site-preferences" role="group" aria-label={t.preferences.label}>
      <Select.Root value={locale} onValueChange={changeLanguage} disabled={pending}>
        <Select.Trigger className="language-control" aria-label={t.preferences.language} aria-busy={pending}>
          <Languages size={16} aria-hidden="true" />
          <Select.Value>{locale === "es" ? "Español" : "English"}</Select.Value>
          <Select.Icon asChild>
            <ChevronDown size={13} className="language-chevron" aria-hidden="true" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="language-menu" position="popper" align="end" sideOffset={8} collisionPadding={16}>
            <Select.Viewport>
              <Select.Item className="language-option" value="es" lang="es">
                <Select.ItemText>Español</Select.ItemText>
                <Select.ItemIndicator><Check size={16} aria-hidden="true" /></Select.ItemIndicator>
              </Select.Item>
              <Select.Item className="language-option" value="en" lang="en">
                <Select.ItemText>English</Select.ItemText>
                <Select.ItemIndicator><Check size={16} aria-hidden="true" /></Select.ItemIndicator>
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      <button type="button" className="theme-toggle" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
        <Moon size={18} className="theme-when-light" aria-hidden="true" />
        <Sun size={18} className="theme-when-dark" aria-hidden="true" />
        <span className="sr-only theme-when-light">{t.preferences.dark}</span>
        <span className="sr-only theme-when-dark">{t.preferences.light}</span>
      </button>
      <span className="sr-only" role="status">{pending ? t.preferences.updating : ""}</span>
    </div>
  );
}
