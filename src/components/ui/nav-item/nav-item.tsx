import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface NavItemProps {
  href: string;
  icon: string;
  shortcut: string;
  disabled?: boolean;
}


export const NavItem = component$<NavItemProps>(({ href, icon, shortcut, disabled }) => {
  return (
    <Link
      href={disabled ? "#" : href}
      class={`${disabled ? "opacity-25" : ""} flex items-center text-yellow gap-4 px-4 py-2 hover:bg-back1 rounded transition-colors w-full max-w-xs`}
    >
      <span class="w-6">{icon}</span>
      <span class="flex-1"><Slot /></span>
      <span class="text-sm opacity-50 text-purple block md:hidden">click me</span>
      <span class="text-sm opacity-50 text-purple hidden md:block">{shortcut}</span>
    </Link>
  )
})
