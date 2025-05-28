interface Props {
  previewURL: string | null;
  handleRemoveAvatar: () => void;
  handleChangeAvatar: () => void;
}

const AvatarUploadImage = ({
  previewURL,
  handleRemoveAvatar,
  handleChangeAvatar,
}: Props) => {
  return (
    <div
      className={`${
        !previewURL && "hidden"
      } p-5 flex flex-col items-center justify-center gap-4`}
    >
      <img
        src={previewURL as string}
        alt="Uploaded avatar"
        className="w-20 h-20 border-2 border-neutral-500 rounded-lg object-cover object-center"
      />
      <div className="flex gap-3">
        <button
          type="button"
          className="avatar-btn underline text-neutral-300"
          onClick={handleRemoveAvatar}
        >
          Remove image
        </button>
        <button
          type="button"
          className="avatar-btn underline text-neutral-300"
          onClick={handleChangeAvatar}
        >
          Change image
        </button>
      </div>
    </div>
  );
};

export default AvatarUploadImage;
