import { component$, useResource$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import fs from "fs/promises";
import path from "path";

interface Projects {
  projects: {
    content: string;
  }[];
}

export const getMarkdowns = server$(async () => {
  const projectsDir = path.join(process.cwd(), "public", "projects");
  const files = await fs.readdir(projectsDir);

  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const projects = await Promise.all(
    markdownFiles.map(async (file) => {
      const filePath = path.join(projectsDir, file);
      const content = await fs.readFile(filePath, "utf-8");
      return {
        content,
      };
    }),
  );

  console.log("loaded", projects);

  return {
    projects: projects,
  };
});

export default component$(() => {
  console.log(getMarkdowns().projects);

  //TODO: fix this issue, we must be able to receive the data from the server and render it on the client

  return (
    <section class="h-[100vh] w-[100vw] bg-back3">
      <div class="projects-header py-4">
        <h1 class="text-center text-2xl font-extrabold text-orange">
          Projects
        </h1>
      </div>
      <div class="project-list">
        {/* { */}
        {/*   dataResource.value.projects.map((project: { name: string, content: string }) => { */}
        {/*     return ( */}
        {/*       <h2>{project.name}</h2> */}
        {/*     ) */}
        {/*   }) */}
        {/* } */}
      </div>
    </section>
  );
});
