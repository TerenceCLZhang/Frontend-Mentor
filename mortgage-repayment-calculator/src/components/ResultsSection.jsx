import { useEffect, useState } from "react";
import empty from "../assets/images/illustration-empty.svg";

const ResultsSection = ({ data }) => {
  const [results, setResults] = useState({
    monthlyRepayments: null,
    repayTerm: null,
  });

  useEffect(() => {
    if (Object.values(data).every((value) => value !== null && value !== "")) {
      calculateMortgage();
    } else {
      setResults({ monthlyRepayments: null, repayTerm: null });
    }
  }, [data]);

  const calculateMortgage = () => {
    const principal = parseFloat(data.amount.replace(/,/g, ""));
    const years = parseFloat(data.term.replace(/,/g, ""));
    const annualRate = parseFloat(data.interestRate.replace(/,/g, "")) / 100;
    const monthlyRate = annualRate / 12;
    const totalPayments = years * 12;

    let monthlyRepayment, totalRepayment;

    if (data.mortgageType === "repayment") {
      monthlyRepayment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1);
      totalRepayment = monthlyRepayment * totalPayments;
    } else if (data.mortgageType === "interest-only") {
      monthlyRepayment = principal * monthlyRate;
      totalRepayment = monthlyRepayment * totalPayments + principal;
    } else {
      monthlyRepayment = null;
      totalRepayment = null;
    }

    setResults({
      monthlyRepayments: monthlyRepayment
        ? formatNumber(monthlyRepayment.toFixed(2))
        : "Invalid",
      repayTerm: totalRepayment
        ? formatNumber(totalRepayment.toFixed(2))
        : "Invalid",
    });
  };

  const formatNumber = (num) => {
    const [integerPart, decimalPart] = num.toString().split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return decimalPart
      ? `${formattedInteger}.${decimalPart}`
      : formattedInteger;
  };

  return (
    <section className="bg-slate-900 text-white p-8 flex items-center justify-center lg:basis-1/2 lg:rounded-bl-[20%]">
      {!Object.values(results).every((value) => value !== null) ? (
        <div className=" flex flex-col text-center gap-5 justify-center items-center">
          <img src={empty} alt="illustration-empty" />
          <h2 className="text-2xl font-bold">Results shown here</h2>
          <p className="text-slate-300">
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-5 justify-center h-full lg:justify-start lg:p-2 lg:gap-8 break-all">
          <h2 className="text-2xl font-bold">Your results</h2>
          <p className="text-slate-300">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>
          <div className="overflow-hidden rounded-xl text-slate-300">
            <div className="bg-lime h-1"></div>
            <div className="bg-gray-900 shadow-lg p-5 flex flex-col gap-5 lg:gap-8">
              <div className="flex flex-col gap-2 border-b pb-5 border-slate-700 border-solid lg:pb-8">
                <span>Your monthly repayments</span>
                <span className="text-4xl text-lime break-words whitespace-normal md:text-6xl">
                  £{results.monthlyRepayments}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Total you'll repay over the term</span>
                <span className="text-2xl text-slate-100 break-words whitespace-normal">
                  £{results.repayTerm}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResultsSection;
