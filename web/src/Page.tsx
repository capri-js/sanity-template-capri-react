import * as sections from "./components/sections";
import { Header } from "./components/Header";
import { SectionNotFound } from "./components/SectionNotFound";
import { Footer } from "./components/Footer";
import { usePageData } from "./sanity/usePageData";

export function Page() {
  const data = usePageData();
  return (
    <>
      <Header />
      <main>
        {data?.content?.map(({ _type, _key, ...props }: any) => {
          const Section = (sections as any)[_type];
          return Section ? (
            <Section key={_key} {...props} />
          ) : (
            <SectionNotFound key={_key} type={_type} />
          );
        })}
      </main>
      <Footer />
    </>
  );
}
