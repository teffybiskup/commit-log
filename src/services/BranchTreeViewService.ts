import { IBranch } from "../types/branch";

export async function getAllBranches(): Promise<IBranch[] | []> {
  try {
    return [
      {
        name: "local",
        list: ["dev", "master", "feature/test", "feature/test2"],
      },
      {
        name: "remote",
        list: {
          name: "origin",
          list: [
            "dev",
            "master",
            "feature/test",
            "feature/test2",
            "bug/1023-fixes-issue",
            "bug/1024-fixes-issue",
            "bug/1424-fixes-issue",
          ],
        },
      },
    ];
  } catch (error) {
    return [];
  }
}
