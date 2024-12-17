import { MarkdownInput, MarkdownInputProps } from "sanity-plugin-markdown";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { useMemo } from "react";

export function CustomMarkdownInput(props: MarkdownInputProps) {
  const reactMdeProps: MarkdownInputProps["reactMdeProps"] = useMemo(() => {
    return {
      options: {
        previewRender: (markdownText: string) => {
          // configure as needed according to
          // https://github.com/markedjs/marked#docs
          const parsed = marked.parse(markdownText) as string;

          return DOMPurify.sanitize(parsed);
        },
        //customising using renderingConfig is also an option
      },
    };
  }, []);

  return <MarkdownInput {...props} reactMdeProps={reactMdeProps} />;
}
