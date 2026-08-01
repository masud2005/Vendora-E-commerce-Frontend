"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import { TextStyle } from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";
import { Table, TableRow, TableCell, TableHeader } from "@tiptap/extension-table";
import { Extension } from "@tiptap/core";
import { useRef, useState, useEffect } from "react";
import EditorToolbar from "./editor/EditorToolbar";

/* ─── FontSize via TextStyle global attribute ─── */
const FontSize = Extension.create({
  name: "fontSize",
  addGlobalAttributes() {
    return [{
      types: ["textStyle"],
      attributes: {
        fontSize: {
          default: null,
          parseHTML: (el: any) => el.style.fontSize || null,
          renderHTML: (attrs: any) =>
            attrs.fontSize ? { style: `font-size:${attrs.fontSize}` } : {},
        },
      },
    }];
  },
});

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Write a detailed product description…",
}: RichTextEditorProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        bulletList: { keepMarks: true, keepAttributes: false },
        orderedList: { keepMarks: true, keepAttributes: false },
      }),
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder }),
      TextStyle,
      FontSize,
      Image.configure({ allowBase64: true, inline: false }),
      Table.configure({ resizable: false }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: value || "",
    onUpdate({ editor }) {
      const html = editor.getHTML();
      onChange(html === "<p></p>" ? "" : html);
    },
    editorProps: {
      attributes: {
        class: "rte-editor prose-sm outline-none min-h-[220px] px-5 py-4",
        spellcheck: "true",
      },
    },
  });

  /* Image upload handler */
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      editor.chain().focus().setImage({ src: ev.target?.result as string }).run();
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  // Workaround for hydration mismatches and testing undo/redo disabled states
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!editor || !mounted) return null;

  return (
    <div className="rounded border border-gray-200 bg-white shadow-sm focus-within:border-[#0F4C81] focus-within:ring-2 focus-within:ring-[#0F4C81]/10 transition-all duration-150">
      <EditorToolbar editor={editor} onImageClick={() => imageInputRef.current?.click()} />
      <div className="relative">
        <EditorContent editor={editor} />
        {/* Hidden file input for images */}
        <input
          type="file"
          ref={imageInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
}
