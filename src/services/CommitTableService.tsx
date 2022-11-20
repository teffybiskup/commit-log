import { ICommit } from '../types/commit';

export async function getAllCommits(): Promise<ICommit[] | []> {
    try {
        return [
            {
                branches: [
                    {
                        name: "origin/feature/test2",
                        backgroundColor: "#DF9FF7",
                        textColor: "#624573",
                        showPill: true,
                    },
                ],
                description: "Some commit message from the developer here",
                hash: "057d1e616b4a4...",
                author: "John Smith",
                date: "Today at 9:25 PM",
            },
            {
                branches: [
                    {
                        name: "origin/HEAD",
                        backgroundColor: "#8AE798",
                        textColor: "#45734C",
                        showPill: true,
                    },
                    {
                        name: "dev",
                        backgroundColor: "#8AE798",
                        textColor: "#45734C",
                        showPill: true,
                    },
                ],
                description: "Another commit message here",
                hash: "7bd1d34575ed1…",
                author: "John Smith",
                date: "Today at 9:22 PM",
            },
            {
                branches: [
                    {
                        name: "master",
                        backgroundColor: "#96D0EC",
                        textColor: "#455E73",
                        showPill: true,
                    },
                ],
                description: "test",
                hash: "051d27ecbfd42a…",
                author: "Darren Brun",
                date: "Yesterday at 10:02 AM",
            },
            {
                branches: [
                    {
                        name: "master",
                        backgroundColor: "#96D0EC",
                        textColor: "#455E73",
                        showPill: false,
                    },
                ],
                description: "Release v2.0.0",
                hash: "d3a035d533ec6…",
                author: "James Boon",
                date: "July 17, 2019 at 1:13 PM",
            },
            {
                branches: [
                    {
                        name: "master",
                        backgroundColor: "#96D0EC",
                        textColor: "#455E73",
                        showPill: false,
                    },
                ],
                description: "Fixed a bug which broke the app",
                hash: "168282b545258…",
                author: "John Smith",
                date: "July 17, 2019 at 1:11 PM",
            },
            {
                branches: [
                    {
                        name: "master",
                        backgroundColor: "#96D0EC",
                        textColor: "#455E73",
                        showPill: false,
                    },
                ],
                description: "Added feature X",
                hash: "68cfbfeee2918b…",
                author: "John Smith",
                date: "July 16, 2019 at 2:15 PM",
            },
            {
                branches: [
                    {
                        name: "master",
                        backgroundColor: "#96D0EC",
                        textColor: "#455E73",
                        showPill: false,
                    },
                ],
                description: "Added feature Y",
                hash: "057a1e616b4a4…",
                author: "Darren Brun",
                date: "July 16, 2019 at 9:02 AM",
            },
            {
                branches: [
                    {
                        name: "origin/master",
                        backgroundColor: "#96D0EC",
                        textColor: "#455E73",
                        showPill: true,
                    },
                ],
                description: "Merged in feature branch",
                hash: "7bd1d34575ed1…",
                author: "John Smith",
                date: "July 12, 2019 at 10:02 AM",
            },
            {
                branches: [
                    {
                        name: "origin/feature/test",
                        backgroundColor: "#EC9696",
                        textColor: "#734545",
                        showPill: true,
                    },
                ],
                description: "test",
                hash: "051d27ecbfd42a…",
                author: "Darren Brun",
                date: "July 11, 2019 at 11:12 AM",
            },
            {
                branches: [
                    {
                        name: "origin/feature/test",
                        backgroundColor: "#EC9696",
                        textColor: "#734545",
                        showPill: false,
                    },
                ],
                description: "Release v1.0.0",
                hash: "d3a035d533ec6…",
                author: "James Boon",
                date: "July 9, 2019 at 1:13 PM",
            },
            {
                branches: [
                    {
                        name: "origin/feature/test",
                        backgroundColor: "#EC9696",
                        textColor: "#734545",
                        showPill: false,
                    },
                ],
                description: "Fixed a bug which broke the app",
                hash: "168282b545258…",
                author: "John Smith",
                date: "July 8, 2019 at 1:11 PM",
            },
            {
                branches: [
                    {
                        name: "origin/feature/test",
                        backgroundColor: "#EC9696",
                        textColor: "#734545",
                        showPill: false,
                    },
                ],
                description: "Added feature X",
                hash: "68cfbfeee2918b…",
                author: "John Smith",
                date: "July 7, 2019 at 2:15 PM",
            },
            {
                branches: [
                    {
                        name: "origin/feature/test",
                        backgroundColor: "#EC9696",
                        textColor: "#734545",
                        showPill: false,
                    },
                ],
                description: "Added feature Y",
                hash: "057a1e616b4a4…",
                author: "Darren Brun",
                date: "July 6, 2019 at 9:02 AM",
            },
            {
                branches: [
                    {
                        name: "origin/master",
                        backgroundColor: "#96D0EC",
                        textColor: "#455E73",
                        showPill: false,
                    },
                ],
                description: "Some commit message from the developer here",
                hash: "057d1e616b4a4…",
                author: "John Smith",
                date: "July 6, 2019 at 8:25 AM",
            },
        ];
    } catch (error) {
        return [];
    }
}
