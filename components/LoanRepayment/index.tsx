import ChoosePaymentMethod from "./choose-method";

const LoanRepayment = () => {
  return (
    <div className="bg-white p-2 rounded-md border shadow-md lg:w-[750px]">
      <form className="p-2">
        <ChoosePaymentMethod />
      </form>
    </div>
  );
};

export default LoanRepayment;
