import { cleanup, render, waitFor } from "@testing-library/react";
import type { ReactElement } from "react";

import * as gitFlow from "./01_GitFlow.stories";
import * as gitLabFlow from "./02_GitLabFlow.stories";
import * as gitHubFlow from "./03_GitHubFlow.stories";
import * as microsoftGitFlow from "./04_MicrosoftGiFlow.stories";
import * as myGitFlow from "./05_MyGitFlow.stories";

// Every story is a CSF `render`-only story, so it can be rendered directly
// without the Storybook runtime. This guards the whole catalogue against
// regressions in the React / gitgraph.js pairing.
const modules = {
  "01_GitFlow": gitFlow,
  "02_GitLabFlow": gitLabFlow,
  "03_GitHubFlow": gitHubFlow,
  "04_MicrosoftGiFlow": microsoftGitFlow,
  "05_MyGitFlow": myGitFlow,
};

afterEach(cleanup);

describe.each(Object.entries(modules))("%s", (_file, module) => {
  const { default: _meta, ...stories } = module as Record<string, unknown>;

  it("exports at least one story", () => {
    expect(Object.keys(stories).length).toBeGreaterThan(0);
  });

  it.each(Object.entries(stories))("renders %s", async (_name, story) => {
    const { render: renderStory } = story as { render: () => ReactElement };
    const { container } = render(renderStory());

    // @gitgraph/core debounces its updates through setTimeout(0), so a graph
    // is only drawn on a later tick. Text-only stories render synchronously.
    await waitFor(() => {
      expect(container.firstElementChild).not.toBeNull();

      const svg = container.querySelector("svg");
      if (svg) {
        // A rendered flow always draws at least one commit dot.
        expect(svg.querySelectorAll("circle").length).toBeGreaterThan(0);
      }
    });
  });
});
