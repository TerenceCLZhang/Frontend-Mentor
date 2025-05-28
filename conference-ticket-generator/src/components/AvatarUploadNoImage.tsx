import { Controller, type Control } from "react-hook-form";
import iconUpload from "../assets/images/icon-upload.svg";
import type { FormData } from "./TicketForm";
import { useDropzone } from "react-dropzone";
import { useEffect } from "react";

interface Props {
  control: Control<FormData>;
  setIsDragActive: React.Dispatch<React.SetStateAction<boolean>>;
  previewURL: string | null;
  ref: React.RefObject<HTMLInputElement | null>;
}

const AvatarUploadNoImage = ({
  control,
  setIsDragActive,
  previewURL,
  ref,
}: Props) => {
  return (
    <Controller
      name="avatar"
      control={control}
      render={({ field: { onChange } }) => {
        const onDrop = (acceptedFiles: File[]) => {
          onChange(acceptedFiles);
        };

        const { getRootProps, getInputProps, isDragActive } = useDropzone({
          onDrop,
          multiple: false,
          accept: {
            "image/png": [],
            "image/jpg": [],
            "image/jpeg": [],
          },
        });

        useEffect(
          () => setIsDragActive(isDragActive),
          [isDragActive, setIsDragActive]
        );

        const inputProps = getInputProps();

        const setInputRef = (e: HTMLInputElement) => {
          ref.current = e;

          const dropzoneRef = (inputProps as any).ref;

          if (typeof dropzoneRef === "function") {
            dropzoneRef(e);
          } else if (dropzoneRef && "current" in dropzoneRef) {
            dropzoneRef.current = e;
          }
        };

        return (
          <div
            {...getRootProps()}
            className={`${
              previewURL && "hidden"
            } relative w-full h-full p-5 flex flex-col items-center justify-center gap-4`}
          >
            <div className="bg-neutral-300/15 w-fit p-2 border border-neutral-500/25 rounded-xl">
              <img src={iconUpload} alt="Drop image here" />
            </div>
            <input
              {...getInputProps()}
              ref={setInputRef}
              className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
            />
            <span className="text-lg text-neutral-300">
              Drag and drop or click to upload
            </span>
          </div>
        );
      }}
    />
  );
};

export default AvatarUploadNoImage;
