import { component$ } from "@builder.io/qwik";


export const Logo = component$(() => {
  return (
    <div class="text-2xl font-bold tracking-tight absolute">
      <span class="animate-pulse bg-fg text-fg">_</span>
    </div>
  )
})
