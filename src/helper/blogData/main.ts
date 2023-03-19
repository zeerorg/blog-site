export interface BlogData {
    id:         number;
    slug:       string;
    published:  boolean;
    filename:   string;
    type:       string;
    tldr:       string;
    title:      string;
    timestamp:  number;
    dev_to?:    string;
    series?:    string;
    tweet?:     string
}

const MainBlogData: BlogData[] = [
    {
      "id": 1,
      "slug": "this-blog-architecture",
      "published": true,
      "filename": "BlogMajor",
      "type": "major",
      "tldr": "First major project I tackle is creating this blog.",
      "title": "Blog's Architecture",
      "timestamp": 1544450983,
      "dev_to": "https://dev.to/zeerorg/my-blogs-architecture-43p7",
      "series": "this-blog-series"
    },
    {
      "id": 2,
      "slug": "about-me",
      "published": false,
      "filename": "AboutMe",
      "type": "casual",
      "tldr": "Introduction to me.",
      "title": "About Me",
      "timestamp": 1544701909
    },
    {
      "id": 3,
      "slug": "about-blog",
      "published": false,
      "filename": "AboutBlog",
      "type": "casual",
      "tldr": "Why I'm writing this blog and what's TECH, CASUAL and MAJOR",
      "title": "About this Blog",
      "timestamp": 1544450983
    },
    {
      "id": 4,
      "slug": "blog-development-live-preview",
      "published": true,
      "filename": "LivePreviewBlogChanges",
      "type": "tech",
      "tldr": "Adding live preview of changes when I'm writing the blog.",
      "title": "Live Preview Blog Edits",
      "timestamp": 1544608657,
      "dev_to": "https://dev.to/zeerorg/live-preview-blog-edits-2oh1",
      "series": "this-blog-series"
    },
    {
      "id": 6,
      "slug": "frontend-caching",
      "published": true,
      "filename": "FrontEndCaching",
      "type": "tech",
      "tldr": "A simple trick to improve site performance with frontend caching",
      "title": "Caching data in frontend",
      "timestamp": 1545049130,
      "dev_to": "https://dev.to/zeerorg/caching-data-in-frontend-3973"
    },
    {
      "id": 7,
      "slug": "rss-feed-azure-functions",
      "published": true,
      "filename": "RssFeedNetCoreBlog",
      "type": "tech",
      "tldr": "Adding RSS feed to my blog using .NET Core running on azure functions.",
      "title": "Adding RSS with .NET Core",
      "timestamp": 1545534314,
      "dev_to": "https://dev.to/zeerorg/adding-rss-with-net-core-279o",
      "series": "this-blog-series"
    },
    {
      "id": 9,
      "slug": "rpi-home-server",
      "published": true,
      "filename": "RPiHomeServer",
      "type": "tech",
      "tldr": "Getting an actual Raspberry Pi based server up and running.",
      "title": "Sharing your apps with the world for 5$",
      "timestamp": 1546579159,
      "dev_to": "https://dev.to/zeerorg/sharing-your-apps-with-the-world-for-5-1p80"
    },
    {
      "id": 10,
      "slug": "adding-series-to-blog",
      "published": true,
      "filename": "AddingBlogSeries",
      "type": "tech",
      "tldr": "Linking blog posts which are part of a series and making an optimization sacrifice for cleaner code base.",
      "title": "Displaying a Series of Posts",
      "timestamp": 1547095682,
      "series": "this-blog-series"
    },
    {
      "id": 11,
      "slug": "creating-openfaas-connector",
      "published": true,
      "filename": "CreatingOpenFaasConnector",
      "type": "tech",
      "tldr": "Extending OpenFaas functionality by creating a connector.",
      "title": "Creating your own OpenFaas Connector",
      "timestamp": 1547799696
    },
    {
      "id": 12,
      "slug": "react-hooks-dependence",
      "published": true,
      "filename": "ChainingHooks",
      "type": "tech",
      "tldr": "Pointers and tips for managing multiple state variables and effects that depend on each other.",
      "title": "React hooks and their dependence on each other",
      "timestamp": 1548580974
    },
    {
      "id": 13,
      "slug": "wsl-docker-kubernetes",
      "published": true,
      "filename": "KubernetesWithWSL",
      "type": "tech",
      "tldr": "Develop with kubernetes on Docker Desktop with WSL",
      "title": "Run kubectl in WSL",
      "timestamp": 1549892032 
    },
    {
      "id": 14,
      "slug": "multi-arch-docker-travis",
      "published": true,
      "filename": "MultiArchDockerTravis",
      "type": "tech",
      "tldr": "Using existing Dockerfiles for different architectures and automate building Multi-Arch docker images with travisci.",
      "title": "Build Multi-Arch docker images on Travis",
      "timestamp": 1551435684,
      "tweet": "https://twitter.com/zeerorg/status/1101474751552335872"
    },
    {
      "id": 15,
      "slug": "k3d-kubernetes-dev-env",
      "published": true,
      "filename": "IntroducingK3dDev",
      "type": "tech",
      "tldr": "Introducing k3d (k3s in docker), a fast and efficient kubernetes development environment.",
      "title": "k3d - A fast kubernetes dev environment",
      "timestamp": 1553492479,
      "tweet": "https://twitter.com/zeerorg/status/1110143874436161538"
    }
  ];

export default MainBlogData;