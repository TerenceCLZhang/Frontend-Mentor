import { useForm } from "react-hook-form";
import AvatarUpload from "./AvatarUpload";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TicketFormTextInput from "./TicketFormTextInput";
import { useNavigate } from "react-router-dom";

export const MAX_FILE_SIZE = 500 * 1024;

const ticketSchema = z.object({
  avatar: z
    .custom<File[]>(
      (fileList) => Array.isArray(fileList) && fileList.length > 0,
      {
        message: "Upload your photo (JPG or PNG, max size: 500KB).",
      }
    )
    .refine((fileList) => fileList[0]?.size <= MAX_FILE_SIZE, {
      message: "File too large. Please upload a photo under 500KB.",
    }),
  name: z
    .string()
    .trim()
    .min(1, "Please enter your full name.")
    .max(
      150,
      "Please keep your name under 150 characters. You can abbreviate if needed."
    ),
  email: z.string().trim().email("Please enter a valid email address."),
  username: z
    .string()
    .trim()
    .min(1, "Please enter your GitHub username.")
    .max(40, "GitHub username must be 39 characters or fewer."),
});

export type FormData = z.infer<typeof ticketSchema>;

const TicketForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    setError,
    clearErrors,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(ticketSchema) });

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    navigate("/ticket", { state: data });
  };

  const addAtSymbol = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value.trim();
    if (!value.startsWith("@") && value.length > 0) {
      value = "@" + value;
    }
    value = value.replace(/ /g, "_");
    setValue("username", value);
  };

  return (
    <form
      className="flex flex-col gap-5 mt-10 lg:w-[80%] xl:w-[75%] lg:gap-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <AvatarUpload
        error={errors.avatar?.message}
        resetField={resetField}
        setError={setError}
        cleanErrors={clearErrors}
        avatar={watch("avatar")}
        control={control}
      />

      <TicketFormTextInput
        register={register}
        error={errors.name?.message}
        label="Full Name"
        name="name"
      />

      <TicketFormTextInput
        register={register}
        error={errors.email?.message}
        label="Email Address"
        name="email"
        placeholder={"example@email.com"}
      />

      <TicketFormTextInput
        register={register}
        error={errors.username?.message}
        label="GitHub Username"
        name="username"
        placeholder={"@yourusername"}
        handleOnBlur={addAtSymbol}
      />

      <button
        type="submit"
        className="bg-linear-to-r from-orange-700 to-orange-500 text-neutral-900 font-extrabold rounded-xl p-3 mt-1 cursor-pointer hover:to-orange-700 hover:shadow-[0_4px_0_0_hsl(7,_88%,_67%)]"
      >
        Generate My Ticket
      </button>
    </form>
  );
};

export default TicketForm;
