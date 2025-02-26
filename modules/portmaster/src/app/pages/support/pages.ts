export interface PageSections {
  title?: string;
  choices: SupportType[];
  style?: 'small';
}

export interface QuestionSection {
  title: string;
  help?: string;
}

export interface SupportPage {
  type?: undefined;
  id: string;
  title: string;
  shortHelp: string;
  repoHelp?: string;
  prologue?: string;
  epilogue?: string;
  sections: QuestionSection[];
  privateTicket?: boolean;
  ghIssuePreset?: string;
  includeDebugData?: boolean;
  repositories?: { repo: string, name: string }[];
}

export interface ExternalLink {
  type: 'link',
  url: string;
  title: string;
  shortHelp: string;
}

export type SupportType = SupportPage | ExternalLink;

export const supportTypes: PageSections[] = [
  {
    choices: [
      {
        id: "report-bug",
        title: "🐞 Report a Bug",
        shortHelp: "Found a bug? Report your discovery and make the Portmaster better for everyone.",
        repoHelp: "Where did the bug take place?",
        sections: [
          {
            title: "What happened?",
            help: "Describe what happened in detail"
          },
          {
            title: "What did you expect to happen?",
            help: "Describe what you expected to happen instead"
          },
          {
            title: "How did you reproduce it?",
            help: "Describe how to reproduce the issue"
          },
          {
            title: "Additional information",
            help: "Provide extra details if needed"
          },
        ],
        includeDebugData: true,
        privateTicket: true,
        ghIssuePreset: "report-bug.md",
        repositories: [
          { repo: 'portmaster', name: 'Portmaster Core' },
          { repo: 'portmaster-ui', name: 'User Interface' },
          { repo: 'portmaster-packaging', name: 'Packaging & Installers' },
          { repo: 'spn', name: 'SPN' },
        ]
      },
      {
        id: "give-feedback",
        title: "💡 Suggest an Improvement",
        shortHelp: "Suggest an enhancement or a new feature for the Portmaster.",
        repoHelp: "What would you would like to improve?",
        sections: [
          {
            title: "What would you like to add or change?",
          },
          {
            title: "Why do you and others need this?"
          }
        ],
        includeDebugData: false,
        privateTicket: true,
        ghIssuePreset: "suggest-feature.md",
        repositories: [
          { repo: 'portmaster', name: 'Portmaster Core' },
          { repo: 'portmaster-ui', name: 'User Interface' },
          { repo: 'portmaster-packaging', name: 'Packaging & Installers' },
          { repo: 'spn', name: 'SPN' },
        ]
      },
      {
        id: "compatibility-report",
        title: "📝 Make a Compatibility Report",
        shortHelp: "Report Portmaster in/compatibility with Linux Distros, VPN Clients or general Software.",
        sections: [
          {
            title: "What worked?",
            help: "Describe what worked"
          },
          {
            title: "What did not work?",
            help: "Describe what did not work in detail"
          },
          {
            title: "Additional information",
            help: "Provide extra details if needed"
          },
        ],
        includeDebugData: true,
        privateTicket: true,
        ghIssuePreset: "report-compatibility.md",
        repositories: [] // not needed with the default being "portmaster"
      },
      {
        type: 'link',
        title: '📘 Open Portmaster Docs',
        url: 'https://docs.safing.io/?source=Portmaster',
        shortHelp: 'View the Settings Handbook, get help with DNS Configuration and check VPN Compatibility.',
      },
    ],
  },
  {
    title: "Further Resources",
    style: 'small',
    choices: [
      {
        type: 'link',
        title: 'Settings Handbook',
        url: 'https://docs.safing.io/portmaster/settings?source=Portmaster',
        shortHelp: 'A reference document of all Portmaster settings'
      },
      {
        type: 'link',
        title: 'What\'s Next?',
        url: 'https://safing.io/next?source=Portmaster',
        shortHelp: 'View what Safing is currently working on.',
      },
      {
        type: 'link',
        title: 'Safing Blog',
        url: 'https://safing.io/blog?source=Portmaster',
        shortHelp: 'Visit the Safing Blog and the monthly progress updates.',
      },
      {
        type: 'link',
        title: 'Ask on Reddit',
        url: 'https://reddit.com/r/safing',
        shortHelp: 'Directly ask us on our subreddit r/safing.'
      },
      {
        type: 'link',
        title: 'Contact Support via Mail',
        url: 'mailto:support@safing.io',
        shortHelp: 'Reach out to the Safing team directly.'
      }
    ]
  }
]
