
import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
// import { Logo } from "~/components/ui/logo/logo";
import { isMobile } from "~/utils/runtime";
import { Navigation } from "../navigation/navigation";

export const Hero = component$(() => {
  const mobile = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const checkMobile = () => {
      mobile.value = isMobile();
      console.log(mobile.value, 'is mobile');
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  });


  return (
    <section class="flex flex-col items-center justify-center min-h-screen p-6 gap-12 bg-back3 max-w-screen overflow-hidden">
      <header class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-nvim-accent mb-6 text-orange">Luiz Froes</h1>
        <h3 class="text-nvim text-lg md:text-xl max-w-screen px-4 text-fg whitespace-pre-wrap break-words">
          <span class="text-nvim text-lg md:text-xl text-red">const</span> developer <span class="text-red">=</span> {`{`}<br />
          &nbsp;&nbsp;skills: [<span class="text-aqua">'Typescript'</span>, <span class="text-aqua">'Qwik'</span>, <span class="text-aqua">'React'</span>, <span class="text-aqua">'Node'</span>, <span class="text-aqua">'Lua'</span>, <span class="text-aqua">'Go'</span>],<br />
          &nbsp;&nbsp;tools: [<span class="text-aqua">'TailwindCSS'</span>, <span class="text-aqua">'NeoVim'</span>, <span class="text-aqua">'Docker'</span>, <span class="text-aqua">'VTEX'</span>, <span class="text-aqua">'Tray'</span>, <span class="text-aqua">'Mongo'</span>, <span class="text-aqua">'PostgreSQL'</span>, <span class="text-aqua">'Supabase'</span>, <span class="text-aqua">'Shopify'</span>, <span class="text-aqua">'Fastify'</span>],<br />
          {`}`};
        </h3>
      </header>
      <Navigation />
      <footer class="text-nvim text-sm opacity-50 absolute bottom-4">
        {
          mobile.value ? (
            <p class="text-fg">Touch <span class="text-purple">something</span> to continue... </p>
          ) : (
            <p class="text-fg">Press <span class="text-purple">space</span> to continue... </p>
          )
        }
      </footer>
    </section >
  );
});


