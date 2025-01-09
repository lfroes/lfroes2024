import { component$ } from "@builder.io/qwik";
import { NavItem } from "~/components/ui/nav-item/nav-item";

export const Navigation = component$(() => {
  return (
    <nav class="mas-w-xs flex w-full flex-col items-center gap-2">
      <NavItem href="/resume" icon="" shortcut="spc h">
        resume
      </NavItem>
      <NavItem href="/projects" icon="󰏗" shortcut="spc p">
        projects
      </NavItem>
      <NavItem href="/about" icon="󰋗" shortcut="spc a">
        about
      </NavItem>
      <NavItem href="/blog" icon="󰂺" shortcut="spc b" disabled={true}>
        blog (soon)
      </NavItem>
      <NavItem href="/contact" icon="󰊎" shortcut="spc c">
        contact
      </NavItem>
    </nav>
  );
});
