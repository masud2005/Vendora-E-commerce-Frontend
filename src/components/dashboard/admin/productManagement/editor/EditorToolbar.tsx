import React from "react";
import { Editor } from "@tiptap/react";
import {
  Bold, Italic, UnderlineIcon, List, ListOrdered, Quote,
  Heading2, Heading3, AlignLeft, AlignCenter, AlignRight,
  Undo2, Redo2, Minus, Image as ImageIcon,
  TableColumnsSplit, TableRowsSplit, Trash2
} from "lucide-react";

import { Btn, Sep } from "./ToolbarButton";
import FontSizeDropdown from "./FontSizeDropdown";
import TableSelector from "./TableSelector";

interface EditorToolbarProps {
  editor: Editor;
  onImageClick: () => void;
}

export default function EditorToolbar({ editor, onImageClick }: EditorToolbarProps) {
  const isInTable = editor.isActive("table");
  const currentSize = editor.getAttributes("textStyle").fontSize ?? "";

  return (
    <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-100 bg-gray-50/80 px-2 py-1.5 rounded-t">
      {/* History */}
      <Btn onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo (Ctrl+Z)">
        <Undo2 className="size-3.5" />
      </Btn>
      <Btn onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo (Ctrl+Y)">
        <Redo2 className="size-3.5" />
      </Btn>

      <Sep />

      {/* Font size dropdown */}
      <FontSizeDropdown 
        currentSize={currentSize}
        onChange={(sz) => {
          if (sz) {
            editor.chain().focus().setMark("textStyle", { fontSize: sz }).run();
          } else {
            editor.chain().focus().unsetMark("textStyle").run();
          }
        }}
      />

      <Sep />

      {/* Headings */}
      <Btn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive("heading", { level: 2 })} title="Heading 2">
        <Heading2 className="size-4" />
      </Btn>
      <Btn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive("heading", { level: 3 })} title="Heading 3">
        <Heading3 className="size-4" />
      </Btn>

      <Sep />

      {/* Basic Marks */}
      <Btn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")} title="Bold (Ctrl+B)">
        <Bold className="size-3.5" />
      </Btn>
      <Btn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")} title="Italic (Ctrl+I)">
        <Italic className="size-3.5" />
      </Btn>
      <Btn onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive("underline")} title="Underline (Ctrl+U)">
        <UnderlineIcon className="size-3.5" />
      </Btn>

      <Sep />

      {/* Lists */}
      <Btn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")} title="Bullet List">
        <List className="size-3.5" />
      </Btn>
      <Btn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")} title="Numbered List">
        <ListOrdered className="size-3.5" />
      </Btn>
      <Btn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive("blockquote")} title="Quote">
        <Quote className="size-3.5" />
      </Btn>

      <Sep />

      {/* Alignment */}
      <Btn onClick={() => editor.chain().focus().setTextAlign("left").run()} active={editor.isActive({ textAlign: "left" })} title="Align Left">
        <AlignLeft className="size-3.5" />
      </Btn>
      <Btn onClick={() => editor.chain().focus().setTextAlign("center").run()} active={editor.isActive({ textAlign: "center" })} title="Align Center">
        <AlignCenter className="size-3.5" />
      </Btn>
      <Btn onClick={() => editor.chain().focus().setTextAlign("right").run()} active={editor.isActive({ textAlign: "right" })} title="Align Right">
        <AlignRight className="size-3.5" />
      </Btn>

      <Sep />

      <Btn onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal Line">
        <Minus className="size-3.5" />
      </Btn>

      <Sep />

      {/* Table & Image */}
      {!isInTable && (
        <TableSelector onSelect={(r, c) => editor.chain().focus().insertTable({ rows: r, cols: c, withHeaderRow: true }).run()} />
      )}
      <Btn onClick={onImageClick} title="Insert Image">
        <ImageIcon className="size-3.5" />
      </Btn>

      {/* Table Actions (only visible when inside a table) */}
      {isInTable && (
        <>
          <Sep />
          <Btn onClick={() => editor.chain().focus().addColumnAfter().run()} title="Add Column">
            <TableColumnsSplit className="size-3.5" />
          </Btn>
          <Btn onClick={() => editor.chain().focus().addRowAfter().run()} title="Add Row">
            <TableRowsSplit className="size-3.5" />
          </Btn>
          <Btn onClick={() => editor.chain().focus().deleteTable().run()} title="Delete Table">
            <Trash2 className="size-3.5 text-rose-500" />
          </Btn>
        </>
      )}
    </div>
  );
}
