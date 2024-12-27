import { component$, useResource$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import fs from "fs/promises";
import path from "path";

interface Projects {
  projects: {
    name: string;
    content: string;
  }[]
}


export const getMarkdowns = server$(async (): Promise<Projects> => {
  const projectsDir = path.join(process.cwd(), 'public', 'projects');
  const files = await fs.readdir(projectsDir);

  const markdownFiles = files.filter(file => file.endsWith('.md'));

  const projects = await Promise.all(
    markdownFiles.map(async (file) => {
      const filePath = path.join(projectsDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      return {
        name: file.replace(".md", ""),
        content,
      }
    })
  )

  console.log("loaded", projects)

  return {
    projects
  }
})

export default component$(() => {
  const dataResource = (async () => {
    return await getMarkdowns();
  })

  //TODO: fix this issue, we must be able to receive the data from the server and render it on the client

  console.log(dataResource.projects, 'projects')

  return (
    <section class="bg-back3 w-[100vw] h-[100vh]">
      <div class="projects-header py-4">
        <h1 class="text-orange font-extrabold text-2xl text-center">Projects</h1>
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
  )
})
