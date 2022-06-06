import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

/**
 * Handle preview requests like `/preview?slug=/about` by redirecting
 * to the given slug parameter.
 */
export function Preview() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const slug = searchParams.get("slug");
    if (slug) {
      navigate(slug);
    }
  });
  return null;
}
