export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-white/40 sm:flex-row sm:px-8">
        <p>&copy; {new Date().getFullYear()} Knox Permanent Lighting. All rights reserved.</p>
        <p>Utah-owned &amp; operated.</p>
      </div>
    </footer>
  );
}
