import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-muted-foreground text-sm font-semibold">
        &copy; {new Date().getFullYear()} Delia-Elena Ungureanu. All rights
        reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
}
