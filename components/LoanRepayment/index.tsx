import ChoosePaymentMethod from "./choose-method";

const LoanRepayment = () => {
  return (
    <form className="bg-white p-2 rounded-md border shadow-md lg:w-[750px]">
      <ChoosePaymentMethod />
    </form>
  );
};

export default LoanRepayment;
