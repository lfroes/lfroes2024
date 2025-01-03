import { component$, useSignal, useOnWindow, $ } from "@builder.io/qwik";
// import { Logo } from "~/components/ui/logo/logo";
import { isMobile } from "~/utils/runtime";
import { Navigation } from "../navigation/navigation";

export const Hero = component$(() => {
  const mobile = useSignal(false);

  useOnWindow(
    "resize",
    $((event) => {
      mobile.value = isMobile();
      console.log(mobile.value, "is mobile");
    }),
  );

  return (
    <section class="max-w-screen flex min-h-screen flex-col items-center justify-center gap-12 overflow-hidden bg-back3 p-6">
      <header class="text-center">
        <h1 class="text-nvim-accent mb-6 text-4xl font-bold text-orange md:text-6xl">
          Luiz Froes
        </h1>
        <h3 class="text-nvim max-w-screen whitespace-pre-wrap break-words px-4 text-lg text-fg md:text-xl">
          <span class="text-nvim text-lg text-red md:text-xl">const</span>{" "}
          developer <span class="text-red">=</span> {`{`}
          <br />
          &nbsp;&nbsp;skills: [<span class="text-aqua">'Typescript'</span>,{" "}
          <span class="text-aqua">'Qwik'</span>,{" "}
          <span class="text-aqua">'React'</span>,{" "}
          <span class="text-aqua">'Node'</span>,{" "}
          <span class="text-aqua">'Lua'</span>,{" "}
          <span class="text-aqua">'Go'</span>],
          <br />
          &nbsp;&nbsp;tools: [<span class="text-aqua">'TailwindCSS'</span>,{" "}
          <span class="text-aqua">'NeoVim'</span>,{" "}
          <span class="text-aqua">'Docker'</span>,{" "}
          <span class="text-aqua">'VTEX'</span>,{" "}
          <span class="text-aqua">'Tray'</span>,{" "}
          <span class="text-aqua">'Mongo'</span>,{" "}
          <span class="text-aqua">'PostgreSQL'</span>,{" "}
          <span class="text-aqua">'Supabase'</span>,{" "}
          <span class="text-aqua">'Shopify'</span>,{" "}
          <span class="text-aqua">'Fastify'</span>],
          <br />
          {`}`};
        </h3>
      </header>
      <Navigation />
      <footer class="text-nvim absolute bottom-4 text-sm opacity-50">
        {mobile.value ? (
          <p class="text-fg">
            Touch <span class="text-purple">something</span> to continue...{" "}
          </p>
        ) : (
          <p class="text-fg">
            Press <span class="text-purple">space</span> to continue...{" "}
          </p>
        )}
      </footer>
    </section>
  );
});
