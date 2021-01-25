module.exports = {
  title: "{{ cookiecutter.project_name }} Documentation",
  tagline: "The tagline of my site",
  url: "https://{{ cookiecutter.github_username }}.github.io",
  baseUrl: "/{{ cookiecutter.project_name }}/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "{{ cookiecutter.github_username }}",
  projectName: "{{ cookiecutter.project_name }}",
  themeConfig: {
    navbar: {
      title: "{{ cookiecutter.project_name }}",
      logo: {
        alt: "{{ cookiecutter.project_name }} Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "/",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href:
            "https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.project_name }}",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href:
                "https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.project_name }}",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} {{ cookiecutter.github_name }}, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          routeBasePath: "/",
          editUrl:
            "https://github.com/{{ cookiecutter.github_name }}/{{ cookiecutter.project_name }}/edit/main/{{cookiecutter.docs_project_name}}/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
