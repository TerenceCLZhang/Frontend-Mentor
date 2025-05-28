import TicketForm from "../components/TicketForm";

const SignUp = () => {
  return (
    <div className="mt-10 flex flex-col lg:items-center">
      <div className="flex flex-col text-center gap-5">
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p>Secure your spot at next year's biggest coding conference.</p>
      </div>

      <TicketForm />
    </div>
  );
};

export default SignUp;
