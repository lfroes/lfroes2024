import {
  component$,
  useResource$,
  useStore,
  useTask$,
  Resource,
} from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import fs from "fs/promises";
import { marked } from "marked";
import path from "path";

type Project = {
  content: string;
};

interface Projects {
  projects: Project[] | never[];
}

export const getMarkdowns = server$(async (): Promise<Projects> => {
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

  console.log(projects);

  return {
    projects: projects,
  };
});

export default component$(() => {
  const dataResource = useResource$(async () => {
    return await getMarkdowns();
  });

  //TODO: Remove marked js and use a better markdown parser
  return (
    <section class="h-[100vh] w-[100vw] bg-back3">
      <div class="projects-header py-4">
        <h1 class="text-center text-4xl font-extrabold text-orange">
          Projects
        </h1>
      </div>
      <div class="project-list mx-2 max-w-screen-xl md:mx-auto">
        <Resource
          value={dataResource}
          onPending={() => <div>Loading...</div>}
          onRejected={(error) => <div>Error: {error.message}</div>}
          onResolved={(data) => {
            return (
              <div class="flex">
                {data.projects.map((project, i: number) => {
                  return (
                    <div
                      class="project border-2 border-back1 bg-back2 p-4"
                      key={i}
                    >
                      <div
                        class="project-content"
                        dangerouslySetInnerHTML={
                          marked(project.content) as string
                        }
                      ></div>
                    </div>
                  );
                })}
              </div>
            );
          }}
        ></Resource>
      </div>
    </section>
  );
});
