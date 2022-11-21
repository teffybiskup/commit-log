import React from "react";
import {
  Gitgraph,
  MergeStyle,
  templateExtend,
  TemplateName,
} from "@gitgraph/react";
import { COLORS } from "../values/colors";

// Based on https://github.com/nicoespeon/gitgraph.js/tree/master/packages/gitgraph-react
const CommitGraph = () => {
  const customTemplate = templateExtend(TemplateName.Metro, {
    colors: [COLORS.purple, COLORS.blue, COLORS.green, COLORS.red],
    branch: {
      lineWidth: 2,
      mergeStyle: MergeStyle.Straight,
      label: {
        display: false,
      },
      spacing: 10,
    },
    commit: {
      message: {
        display: false,
        displayAuthor: false,
        displayHash: false,
        font: "",
      },
      dot: {
        size: 5,
      },
      spacing: 28,
    },
  });
  const branchesOrder = ["secondFeature", "master", "dev", "feature"];
  const compareBranches = (a: string, b: string) => {
    return branchesOrder.indexOf(a) - branchesOrder.indexOf(b);
  };

  return (
    <tr>
      <td style={{ position: "absolute" }}>
        <Gitgraph
          options={{
            template: customTemplate,
            compareBranchesOrder: compareBranches,
          }}
        >
          {(gitgraph) => {
            const master = gitgraph.branch("master").commit();
            const secondFeature = gitgraph.branch("origin/feature/test2");

            master
              .commit("Some commit message from the developer here")
              .commit("Added feature Y");

            const feature = master.branch("feature").commit("Added feature X");

            master
              .commit("Fixed a bug which broke the app")
              .commit("Release v1.0.0");

            feature.commit("test");
            master.merge(feature);

            master
              .commit("Added feature Y")
              .commit("Added feature X")
              .commit("Fixed a bug which broke the app")
              .commit("Release v2.0.0")
              .commit("test");

            const dev = gitgraph.branch("dev");
            dev.commit("Another commit message here");

            secondFeature.commit("Some commit message from the developer here");
          }}
        </Gitgraph>
      </td>
    </tr>
  );
};

export default CommitGraph;
