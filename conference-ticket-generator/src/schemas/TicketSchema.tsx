import { z } from "zod";

export const MAX_FILE_SIZE = 500 * 1024;

export const ticketSchema = z.object({
  avatar: z
    .custom<FileList>(
      (fileList) => fileList instanceof FileList && fileList.length > 0,
      {
        message: "Upload your photo (JPG or PNG, max size: 500KB).",
      }
    )
    .refine((fileList) => fileList[0]?.size <= MAX_FILE_SIZE, {
      message: "File too large. Please upload a photo under 500KB.",
    }),
  name: z.string().trim().min(1, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  username: z.string().trim().min(1, "Please enter your GitHub username."),
});

export type FormData = z.infer<typeof ticketSchema>;
