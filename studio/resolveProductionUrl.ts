export default function resolveProductionUrl(document) {
  return `<#< deployments.web.url >#>/preview?slug=${document.slug.current}`;
}
