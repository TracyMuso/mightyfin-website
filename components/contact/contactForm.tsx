import "dotenv/config";
import { Input } from "../ui/input";
import { FormFieldData } from "@/constants/data/about";

export const ContactForm = () => {
  return (
    <form
      className="rounded-xl border border-primary pt-5 pb-7 px-6 md:w-1/2 w-full"
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <p className="md:text-[17px] text-m py-2 w-full text-primary font-bold">
        Please fill in all the fields
      </p>
       <input type="hidden" name="access_key"
        value="93cee527-3b7b-4ec0-bfb2-11a454e84fba"
        />
      <input
        type="hidden"
        name="subject"
        value="New Contact form Submission from Mightyfin website"
      />
      <input type="hidden" name="from_name" value="MF Contact" />
      <div className="grid gap-4 py-2 pt-4">
        {FormFieldData.map((data, idx) => (
          <div key={idx} className="flex flex-col">
            <label
              htmlFor={data.for}
              className="mb-2 text-black text-sm sm:text-base"
            >
              {data.label}
            </label>
            <Input
              id={data.id}
              name={data.name}
              placeholder={data.placeholder}
              type={data.type}
            />
          </div>
        ))}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="mb-2 text-black text-sm sm:text-base"
          >
            Message
          </label>
          <textarea
            className="px-4 py-2 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-input shadow-xs transition-[color,box-shadow] outline-none bg-primary/10 w-full h-[100px] rounded-md leading-5 text-sm text-gray-800"
            id="message"
            name="message"
            placeholder="Your message"
          ></textarea>
        </div>
      </div>
      <div className="pl-4 py-2 relative">
        <label htmlFor="botcheck" className="py-2 text-blue-700">
          <input
            type="checkbox"
            name="botcheck"
            className="hidden left-0 bottom-[14px]"
          />
        </label>
      </div>
      <button
        className="w-full bg-primary text-white px-4 py-3 rounded-full"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
