import EmailInput from "./EmailInput";
import TextInput from "./TextInput";
import QueryTypeInput from "./QueryTypeInput";
import MessageInput from "./MessageInput";
import ConsentInput from "./ConsentInput";
import { useForm } from "react-hook-form";

const Form = ({ setShowSuccess }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setShowSuccess(true);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
        <TextInput
          label={"First Name"}
          name={"firstName"}
          register={register}
          error={errors.firstName?.message}
          rules={{ required: "This field is required" }}
        />
        <TextInput
          label={"Last Name"}
          name={"lastName"}
          register={register}
          error={errors.lastName?.message}
          rules={{ required: "This field is required" }}
        />
      </div>
      <EmailInput
        register={register}
        error={errors.email?.message}
        rules={{
          required: "This field is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address",
          },
        }}
      />
      <QueryTypeInput
        register={register}
        error={errors.type?.message}
        rules={{ required: "Please select a query type" }}
        watch={watch("type")}
      />
      <MessageInput
        register={register}
        error={errors.message?.message}
        rules={{ required: "This field is required" }}
      />
      <ConsentInput
        register={register}
        error={errors.consent?.message}
        rules={{
          required: "To submit this form, please consent to being contacted",
        }}
      />
      <input
        type="submit"
        value="Submit"
        className="p-4 bg-green-600 font-bold text-white rounded-lg cursor-pointer hover:opacity-80"
      />
    </form>
  );
};

export default Form;
