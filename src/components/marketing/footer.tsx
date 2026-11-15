import { getMessages } from "@/i18n";

export function Footer() {
  const m = getMessages();
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:px-6">
        <p>{m.landing.footer.disclaimer}</p>
        <p>{m.landing.footer.rights}</p>
      </div>
    </footer>
  );
}
