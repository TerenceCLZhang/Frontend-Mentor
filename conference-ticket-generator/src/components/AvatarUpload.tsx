import type {
  Control,
  UseFormClearErrors,
  UseFormResetField,
  UseFormSetError,
} from "react-hook-form";
import { MAX_FILE_SIZE, type FormData } from "./TicketForm";
import InfoIcon from "./InfoIcon";
import { useEffect, useRef, useState } from "react";
import AvatarUploadNoImage from "./AvatarUploadNoImage";
import AvatarUploadImage from "./AvatarUploadImage";

interface Props {
  error: string | undefined;
  resetField: UseFormResetField<FormData>;
  setError: UseFormSetError<FormData>;
  cleanErrors: UseFormClearErrors<FormData>;
  avatar: File[];
  control: Control<FormData>;
}

const AvatarUpload = ({
  error,
  resetField,
  setError,
  cleanErrors,
  avatar,
  control,
}: Props) => {
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [isDragActive, setIsDragActive] = useState<boolean>(false);

  const inputAvatarRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let url: string | null;

    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      if (file.size <= MAX_FILE_SIZE) {
        url = URL.createObjectURL(file);
        setPreviewURL(url);
        cleanErrors("avatar");
      } else {
        setPreviewURL(null);
        setError("avatar", {
          type: "manual",
          message: "Upload your photo (JPG or PNG, max size: 500KB).",
        });
      }
    } else {
      setPreviewURL(null);
    }

    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [avatar]);

  const handleRemoveAvatar = () => {
    resetField("avatar");
    setPreviewURL(null);
  };

  const handleChangeAvatar = () => {
    inputAvatarRef.current?.click();
  };

  return (
    <div className="form-input-container">
      <label htmlFor="avatar-upload" className="form-label">
        Upload Avatar
      </label>
      <div
        className={`bg-overlay border-2 border-dashed border-neutral-500 rounded-xl overflow-hidden cursor-pointer ${
          isDragActive ? "outline-2 outline-offset-2 outline-neutral-500" : ""
        }`}
      >
        <AvatarUploadNoImage
          control={control}
          setIsDragActive={setIsDragActive}
          previewURL={previewURL}
          ref={inputAvatarRef}
        />
        <AvatarUploadImage
          previewURL={previewURL}
          handleRemoveAvatar={handleRemoveAvatar}
          handleChangeAvatar={handleChangeAvatar}
        />
      </div>
      <p className="text-xs text-neutral-500 flex items-center">
        <InfoIcon error={error} />
        <span className={`${error && "error-msg"}`}>
          {!error ? "Upload your photo (JPG or PNG, max size: 500KB)." : error}
        </span>
      </p>
    </div>
  );
};

export default AvatarUpload;
