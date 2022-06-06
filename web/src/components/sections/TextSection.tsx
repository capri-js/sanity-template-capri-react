import { SimpleBlockContent } from "../SimpleBlockContent";

type Props = {
  heading: string;
  label: string;
  text: any;
};

export function TextSection({ heading, label, text }: Props) {
  return (
    <section>
      <div>{label}</div>
      <h2>{heading}</h2>
      {text && <SimpleBlockContent blocks={text} />}
    </section>
  );
}
