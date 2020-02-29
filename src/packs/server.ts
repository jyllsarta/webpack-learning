const isLocal = location.host.startsWith("localhost");
const Server = {
  api: isLocal ? "http://localhost:3000/" : location.href,
  asset: isLocal ? "http://localhost:3000/" : location.href,
};
export default Server;