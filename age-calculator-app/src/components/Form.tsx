import type { JSX } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

export type Inputs = {
  day: number;
  month: number;
  year: number;
};

interface Props {
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const Form = ({ setDate }: Props): JSX.Element => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    const day: number = Number(data.day);
    const month: number = Number(data.month);
    const year: number = Number(data.year);

    const inputDate: Date = new Date(year, month - 1, day);

    const today: Date = new Date();
    today.setHours(0, 0, 0, 0); // ensures time doesn't affect date comparison

    // Validate that the date components are actually valid
    // e.g., catch invalid dates like 31 April or 30 February
    if (
      inputDate.getFullYear() !== year ||
      inputDate.getMonth() !== month - 1 ||
      inputDate.getDate() !== day
    ) {
      setError("day", { message: "Must be a valid date" });
      setError("month", { message: " " });
      setError("year", { message: " " });
      return;
    }

    // Check if the date is in the future or today
    if (inputDate >= today) {
      setError("day", { message: " " });
      setError("month", { message: " " });
      setError("year", { message: "Must be in the past" });
      return;
    }

    console.log("Valid date:", inputDate.toDateString());
    setDate(inputDate);
  };

  return (
    <form
      action="#"
      className="flex gap-2 relative lg:w-[75%] lg:self-start"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        name="day"
        register={register}
        rules={{
          required: "This field is required",
          min: { value: 1, message: "Must be a valid day" },
          max: { value: 31, message: "Must be a valid day" },
        }}
        error={errors.day?.message}
        placeholder="DD"
        maxDigits={2}
      />

      <FormInput
        name="month"
        register={register}
        rules={{
          required: "This field is required",
          min: { value: 1, message: "Must be a valid month" },
          max: { value: 12, message: "Must be a valid month" },
        }}
        error={errors.month?.message}
        placeholder="MM"
        maxDigits={2}
      />

      <FormInput
        name="year"
        register={register}
        rules={{
          required: "This field is required",
          max: {
            value: new Date().getFullYear(),
            message: "Must be in the past",
          },
        }}
        error={errors.year?.message}
        placeholder="YYYY"
        maxDigits={4}
      />

      <input
        type="submit"
        value=""
        aria-label="Show age"
        className="absolute left-1/2 -translate-x-1/2 -bottom-23 lg:left-auto lg:translate-x-0 lg:-right-44 lg:-bottom-26 w-17 h-17 lg:w-23 lg:h-23 bg-purple-500 rounded-full bg-[url(assets/images/icon-arrow.svg)] bg-no-repeat bg-center bg-size-[30px] lg:bg-size-[50px] cursor-pointer hover:bg-black"
      />
    </form>
  );
};

export default Form;
