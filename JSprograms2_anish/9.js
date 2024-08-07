function parseURL(url) {
    try {
      const parsedURL = new URL(url);
  
      return {
        href: parseURL.name,
        protocol: parsedURL.protocol,
        host: parsedURL.host,
        hostname: parsedURL.hostname,
        port: parsedURL.port,
        pathname: parsedURL.pathname,
        search: parsedURL.search,
        searchParams: Array.from(parsedURL.searchParams.entries()),
        hash: parsedURL.hash,
      };
    } catch (error) {
      console.error("Invalid URL", error);
      return null;
    }
  }
  
  // Example usage
  const url = "https://example.com:8080/path/name?query=string&param=value#hash";
  const parsedURL = parseURL(url);
  console.log(parsedURL.protocol);
  