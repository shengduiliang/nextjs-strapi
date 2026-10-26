// Strapi 内容 API 读取辅助（服务端）。
// 服务端（容器内）通过 STRAPI_URL_INTERNAL 访问 Strapi；本地开发回退 localhost。
const STRAPI_URL = process.env.STRAPI_URL_INTERNAL ?? "http://localhost:1337";

/**
 * GET 一个 Strapi REST 端点，返回响应中的 `data` 字段（集合为数组、单类型为对象）。
 * 失败或未命中时返回 null，由调用方回退到静态默认内容。
 */
export async function strapiGet(path: string): Promise<any> {
  try {
    const res = await fetch(`${STRAPI_URL}${path}`, { cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data ?? null;
  } catch {
    return null;
  }
}
