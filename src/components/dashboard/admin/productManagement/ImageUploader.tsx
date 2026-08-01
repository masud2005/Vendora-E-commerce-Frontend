"use client";

import { useState, useRef, useCallback } from "react";
import { UploadCloud, X, GripVertical, ImagePlus, AlertCircle } from "lucide-react";

export interface UploadedImage {
  id: string;
  file: File;
  preview: string;
}

interface ImageUploaderProps {
  images: UploadedImage[];
  onChange: (images: UploadedImage[]) => void;
  maxImages?: number;
}

const ACCEPTED = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_SIZE_MB = 5;

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

export default function ImageUploader({ images, onChange, maxImages = 8 }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  /* ── File processing ── */
  const processFiles = useCallback(
    (files: FileList | File[]) => {
      const newErrors: string[] = [];
      const validFiles: UploadedImage[] = [];
      const remaining = maxImages - images.length;

      Array.from(files).slice(0, remaining).forEach((file) => {
        if (!ACCEPTED.includes(file.type)) {
          newErrors.push(`"${file.name}" — unsupported format (use JPG, PNG, WEBP or GIF)`);
          return;
        }
        if (file.size > MAX_SIZE_MB * 1024 * 1024) {
          newErrors.push(`"${file.name}" — exceeds ${MAX_SIZE_MB}MB limit`);
          return;
        }
        validFiles.push({
          id: generateId(),
          file,
          preview: URL.createObjectURL(file),
        });
      });

      if (Array.from(files).length > remaining) {
        newErrors.push(`Maximum ${maxImages} images allowed. Extra files were skipped.`);
      }

      setErrors(newErrors);
      if (validFiles.length > 0) {
        onChange([...images, ...validFiles]);
      }
    },
    [images, onChange, maxImages]
  );

  /* ── Input change ── */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processFiles(e.target.files);
      e.target.value = "";
    }
  };

  /* ── Drag zone ── */
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    processFiles(e.dataTransfer.files);
  };

  /* ── Remove ── */
  const removeImage = (id: string) => {
    const img = images.find((i) => i.id === id);
    if (img) URL.revokeObjectURL(img.preview);
    onChange(images.filter((i) => i.id !== id));
  };

  /* ── Reorder via drag ── */
  const handleThumbDragStart = (index: number) => setDraggedIndex(index);
  const handleThumbDragEnter = (index: number) => setDragOverIndex(index);
  const handleThumbDragEnd = () => {
    if (draggedIndex === null || dragOverIndex === null || draggedIndex === dragOverIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }
    const reordered = [...images];
    const [moved] = reordered.splice(draggedIndex, 1);
    reordered.splice(dragOverIndex, 0, moved);
    onChange(reordered);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const canAdd = images.length < maxImages;

  return (
    <div className="space-y-3">
      {/* ── Drop zone ── */}
      {canAdd && (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`group flex cursor-pointer flex-col items-center justify-center gap-3 rounded border-2 border-dashed py-8 px-4 transition-all duration-200
            ${isDragging
              ? "border-[#0F4C81] bg-[#0F4C81]/5 scale-[1.01]"
              : "border-gray-200 bg-gray-50/50 hover:border-[#0F4C81]/50 hover:bg-[#0F4C81]/3"
            }`}
        >
          <div className={`flex size-12 items-center justify-center rounded-full transition-colors ${isDragging ? "bg-[#0F4C81]/10" : "bg-gray-100 group-hover:bg-[#0F4C81]/8"}`}>
            <UploadCloud className={`size-6 transition-colors ${isDragging ? "text-[#0F4C81]" : "text-gray-400 group-hover:text-[#0F4C81]"}`} />
          </div>
          <div className="text-center">
            <p className={`text-sm font-semibold transition-colors ${isDragging ? "text-[#0F4C81]" : "text-gray-600 group-hover:text-[#0F4C81]"}`}>
              {isDragging ? "Drop files here" : "Drag & drop images here"}
            </p>
            <p className="mt-0.5 text-xs text-gray-400">
              or <span className="font-semibold text-[#0F4C81]">click to browse</span>
            </p>
            <p className="mt-1.5 text-[11px] text-gray-400">
              JPG, PNG, WEBP, GIF · Max {MAX_SIZE_MB}MB each · Up to {maxImages} images
            </p>
          </div>
          <input
            ref={inputRef}
            type="file"
            accept={ACCEPTED.join(",")}
            multiple
            className="sr-only"
            onChange={handleInputChange}
          />
        </div>
      )}

      {/* ── Max reached banner ── */}
      {!canAdd && (
        <div className="flex items-center gap-2 rounded border border-amber-200 bg-amber-50 px-3.5 py-2.5 text-xs font-medium text-amber-700">
          <ImagePlus className="size-4 shrink-0" />
          Maximum of {maxImages} images reached. Remove one to add more.
        </div>
      )}

      {/* ── Error messages ── */}
      {errors.length > 0 && (
        <div className="space-y-1.5 rounded border border-rose-200 bg-rose-50 p-3">
          {errors.map((err, i) => (
            <div key={i} className="flex items-start gap-2 text-xs font-medium text-rose-600">
              <AlertCircle className="size-3.5 mt-0.5 shrink-0" />
              {err}
            </div>
          ))}
          <button
            type="button"
            onClick={() => setErrors([])}
            className="mt-1 text-[11px] font-semibold text-rose-500 hover:text-rose-700 transition-colors"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* ── Image grid ── */}
      {images.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, index) => (
            <div
              key={img.id}
              draggable
              onDragStart={() => handleThumbDragStart(index)}
              onDragEnter={() => handleThumbDragEnter(index)}
              onDragEnd={handleThumbDragEnd}
              onDragOver={(e) => e.preventDefault()}
              className={`group relative aspect-square cursor-grab overflow-hidden rounded border-2 bg-gray-50 transition-all duration-150 active:cursor-grabbing
                ${dragOverIndex === index && draggedIndex !== index
                  ? "border-[#0F4C81] scale-[1.04] shadow-md"
                  : "border-gray-200 hover:border-gray-300"
                }
                ${draggedIndex === index ? "opacity-40 scale-95" : "opacity-100"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.preview}
                alt={img.file.name}
                className="h-full w-full object-cover"
                draggable={false}
              />

              {/* overlay on hover */}
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />

              {/* drag handle */}
              <div className="absolute left-1.5 top-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="rounded bg-black/50 p-0.5">
                  <GripVertical className="size-3 text-white" />
                </div>
              </div>

              {/* remove button */}
              <button
                type="button"
                onClick={() => removeImage(img.id)}
                className="absolute right-1 top-1 rounded-full bg-rose-500 p-0.5 text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-rose-600"
              >
                <X className="size-3" />
              </button>

              {/* Main badge */}
              {index === 0 && (
                <span className="absolute bottom-1 left-1 rounded bg-[#0F4C81] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white shadow">
                  Main
                </span>
              )}

              {/* index badge */}
              {index > 0 && (
                <span className="absolute bottom-1 right-1 rounded bg-black/50 px-1.5 py-0.5 text-[9px] font-bold text-white">
                  {index + 1}
                </span>
              )}
            </div>
          ))}

          {/* Inline add button when some images exist but not maxed */}
          {canAdd && (
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="flex aspect-square items-center justify-center rounded border-2 border-dashed border-gray-200 bg-gray-50 text-gray-400 transition-all hover:border-[#0F4C81]/50 hover:bg-[#0F4C81]/5 hover:text-[#0F4C81]"
            >
              <ImagePlus className="size-6" />
            </button>
          )}
        </div>
      )}

      {images.length > 0 && (
        <p className="text-[11px] text-gray-400">
          Drag thumbnails to reorder · First image is the main thumbnail ·{" "}
          <span className="font-medium text-gray-500">{images.length}/{maxImages} uploaded</span>
        </p>
      )}
    </div>
  );
}
