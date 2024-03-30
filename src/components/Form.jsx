import { useForm } from "react-hook-form";

// <div className="w-full h-screen bg-black login">
{
  /* <div className="background sm:w-[430px] sm:h-[520px] w-[320px] h-[350px]">
        <motion.div
          initial={{ opacity: 0, y: -50, x: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="shape sm:size-[200px] size-[100px] sm:-top-[80px] sm:-left-[80px] -top-[50px] -left-[25px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="shape sm:size-[200px] size-[100px] sm:-bottom-[80px] sm:-right-[80px] -bottom-[50px] -right-[25px]"
        ></motion.div>
      </div> */
}
// {/* form */}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Handle form submission (e.g., send data to server)
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center text-black w-full h-full gap-2 bg-white sm:p-10 p-5"
    >
      {/* title 1 */}
      <h3 className="sm:text-[1rem] text-[1.5rem] font-medium">
        2016 AMERICAN PSYCHOLOGICAL ASSOCIATION ANNUAL CONVENTION
      </h3>
      {/* title 2 */}
      <h3 className="sm:text-[2rem] text-[1.5rem] font-medium">
        ADVANCE REGISTRATION FORM
      </h3>
      <div className="flex sm:flex-row flex-col gap-5 w-full h-full">
        {/* left side */}
        <div className="w-[70%] flex flex-col gap-3">
          <h1 className="text-xl font-bold">
            For immediate confirmation of your registration, complete the online
            convention registration form at www.apa.org/convention. You may
            register online beginning on April 15, 2016, at 10:00 a.m. EDT
            through August 7, 2016, the last day of the convention.
          </h1>
          {/* input 1 */}
          <div className="w-full flex flex-col gap-1">
            <input
              type="text"
              className="w-[500px] outline-none border-b-2 border-pink-600"
            />
            <p className="cursor-pointer sm:text-base text-sm">
              APA Member Number (8 digits)
            </p>
          </div>
          {/* input 2 */}
          <div className="w-full flex flex-col gap-1">
            <p className="cursor-pointer sm:text-base text-sm">FullName</p>
            <input
              type="text"
              className="outline-none border-b-2 border-pink-600"
            />
          </div>
          {/* input 3 */}
          <div className="w-full flex flex-col gap-1">
            <p className="cursor-pointer sm:text-base text-sm">
              Mailing Address
            </p>
            <input
              type="text"
              className="outline-none border-b-2 border-pink-600"
            />
          </div>
          {/* input 4 */}
          <div className="w-full flex items-center gap-5">
            {/* input 4 coloum 1 */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">City</p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
            {/* input 4 coloum 2 */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">
                State or Province
              </p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
            {/* input 4 coloum 3 */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">
                Zip or Postal Code
              </p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
            {/* input 4 coloum 4 */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">
                Country (If not U.S.)
              </p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
          </div>
          {/* input 5 */}
          <div className="w-full flex items-center gap-5">
            {/* input 5 coloum 1 */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">
                Daytime Telephone
              </p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
            {/* input 5 coloum 2 */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">Cell Phone</p>
              <input
                type="text"
                placeholder="Include Area Code example: (123)789785"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
            {/* input 5 coloum 3 */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">
                Zip or Postal Code
              </p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
          </div>
          {/* input 6 */}
          <div className="w-full flex flex-col gap-1">
            <p className="cursor-pointer sm:text-base text-sm">Institution</p>
            <input
              type="text"
              placeholder="Enter your affiliation (e.g., Yale University, Independent practice, Sunset CMHC)."
              className="outline-none border-b-2 border-pink-600"
            />
          </div>
          {/* input 7 */}
          <div className="flex flex-col gap-2 pt-5">
            <h1>
              Enter the city, state or province, and country (if not U.S.) of
              your institution for your badge.
            </h1>
            <div className="w-full flex items-center gap-5">
              {/* input 4 coloum 1 */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">City</p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
              {/* input 4 coloum 2 */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  State or Province
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
              {/* input 4 coloum 4 */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Country (If not U.S.)
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
            </div>
          </div>
          {/* input 8 */}
          <div className="w-1/2 flex flex-col gap-1">
            <p className="cursor-pointer sm:text-base text-sm">
              Membership Code
            </p>
            <select
              type="text"
              placeholder="Enter your affiliation (e.g., Yale University, Independent practice, Sunset CMHC)."
              className="outline-none border-b-2 border-pink-600"
            >
              <option value="" className="bg-black text-white">
                APA Member
              </option>
              <option value="" className="bg-black text-white">
                APA Fellow
              </option>
              <option value="" className="bg-black text-white">
                APA Associate
              </option>
              <option value="" className="bg-black text-white">
                Nonmember
              </option>
              <option value="" className="bg-black text-white">
                APA International Affiliate
              </option>
              <option value="" className="bg-black text-white">
                APA Community College Teacher Affiliate
              </option>
              <option value="" className="bg-black text-white">
                APA High School Teacher Affiliate
              </option>
              <option value="" className="bg-black text-white">
                APAGS Member
              </option>
              <option value="" className="bg-black text-white">
                APA Student Affiliate
              </option>
              <option value="" className="bg-black text-white">
                Full-Time Student
              </option>
              <option value="" className="bg-black text-white">
                State/Provincial/Territorial Association Representative
              </option>
            </select>
          </div>
          {/* Registration Fee and CE Session Fee */}
          <div className="flex flex-col gap-2 pt-5">
            <div className="w-full flex items-center gap-5">
              {/* input 9 coloum 1 */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Registration Fee
                </p>
                <input
                  type="text"
                  placeholder="$"
                  className="outline-none border-b-2 border-pink-600"
                />
                <p>Amount Due</p>
              </div>
              {/* input 9 coloum 2 */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  CE Sessions Fee
                </p>
                <input
                  type="text"
                  placeholder="$"
                  className="outline-none border-b-2 border-pink-600"
                />
                <p>Amount Due</p>
              </div>
            </div>
            <h1>
              (Enclose check or money order made out to American Psychological
              Association or Credit Card Payment Authorization Form)
            </h1>
          </div>
          {/* institutional code and first APA and programs only */}
          <div className="w-full flex items-center gap-5">
            {/* institutional code */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">
                Institutional Code
              </p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
            {/* first APA */}
            <div className="w-full flex gap-5">
              <p>First APA Convention</p>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  placeholder="Include Area Code example: (123)789785"
                  className="size-5 cursor-pointer"
                />
                <p>Yes</p>
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  placeholder="Include Area Code example: (123)789785"
                  className="size-5 cursor-pointer"
                />
                <p>No</p>
              </div>
            </div>
            {/* programs only */}
            <div className="w-full flex flex-col">
              <p>Programs Only Mailed Upon Request</p>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  placeholder="Include Area Code example: (123)789785"
                  className="size-5 cursor-pointer"
                />
                <p>Request one here (US/Canada only)</p>
              </div>
            </div>
          </div>
          {/* disability and early career */}
          <div className="w-full flex items-center gap-5">
            {/* disability */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">
                Person With Disability (leave blank if not disabled)
              </p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
            {/* early career */}
            <div className="w-full flex gap-5">
              <p>Early Career Psychologist</p>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  placeholder="Include Area Code example: (123)789785"
                  className="size-5 cursor-pointer"
                />
                <p>Yes</p>
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  placeholder="Include Area Code example: (123)789785"
                  className="size-5 cursor-pointer"
                />
                <p>No</p>
              </div>
            </div>
          </div>
          {/* nonMember Nonpsychologist */}
          <div className="flex flex-col gap-3 pt-5">
            <h1>
              Name(s) of Nonmember Nonpsychologist Spouse/Equivalent or
              Dependent(s) Under Age 18 requiring a badge (maximum of 4)
            </h1>
            {/* nonMember Nonpsychologist column 1 */}
            <div className="w-full flex items-center gap-5">
              {/* First Name */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  First Name
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Middle Initial
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">Last Name</p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Amount Due
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
            </div>
            {/* nonMember Nonpsychologist column 2 */}
            <div className="w-full flex items-center gap-5">
              {/* First Name */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  First Name
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Middle Initial
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">Last Name</p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Amount Due
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
            </div>
            {/* nonMember Nonpsychologist column 3 */}
            <div className="w-full flex items-center gap-5">
              {/* First Name */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  First Name
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Middle Initial
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">Last Name</p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Amount Due
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
            </div>
            {/* nonMember Nonpsychologist column 4 */}
            <div className="w-full flex items-center gap-5">
              {/* First Name */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  First Name
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Middle Initial
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">Last Name</p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Amount Due
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-pink-600"
                />
              </div>
            </div>
            {/* confirmation family member */}
            <div className="flex gap-2">
              <input type="checkbox" className="size-5" />
              <p>
                I confirm that the individuals listed above are family members.
              </p>
            </div>

            {/* total fees due */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">
                Total Fees Due (Payment must accompany form)
              </p>
              <input
                type="text"
                placeholder="$"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-[30%] flex flex-col gap-5">
          {/* details */}
          <h1 className="text-lg text-pretty">
            Return form with accompanying check (in U.S. dollars/ U.S. bank) or
            with a completed Credit Card Payment Authorization Form to:{" "}
            <span className="font-bold">
              AMERICAN PSYCHOLOGICAL ASSOCIATION,
            </span>{" "}
            Attn: Finance/2016 Convention, 750 First Street, NE, Washington, DC
            20002-4242.{" "}
            <span className="font-bold">
              FORMS MUST BE RECEIVED AT APA BY JULY 7, 2016.
            </span>{" "}
            Forms postmarked July 1 and after will be charged fees effective on
            July 1.
          </h1>
          {/* Payment Details */}
          <div className="w-full flex flex-col border-4 p-5 gap-3">
            {/* header 1 */}
            <h1 className="text-2xl font-bold">
              Credit Card Payment Authorization Form
            </h1>
            {/* header 2 */}
            <h1 className="text-lg text-pretty">
              I authorize the American Psychological Association to charge my
              (check one):
            </h1>
            {/* card checkbox */}
            <div className="w-full flex items-center justify-between py-5">
              {/* checkbox 1 */}
              <div className="flex items-center gap-3">
                <input type="checkbox" className="size-5" />
                <p className="text-xl">VISA</p>
              </div>
              {/* checkbox 2 */}
              <div className="flex items-center gap-3">
                <input type="checkbox" className="size-5" />
                <p className="text-xl">MasterCard</p>
              </div>
              {/* checkbox 3 */}
              <div className="flex items-center gap-3">
                <input type="checkbox" className="size-5" />
                <p className="text-xl">American Express</p>
              </div>
            </div>
            <h1 className="text-xl">
              2016 convention fees to my credit card as indicated below:
            </h1>
            {/* card name */}
            <div className="flex flex-col w-full gap-1">
              <p>Name as it appears on credit card</p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
            {/* Fee to be charged */}
            <div className="flex flex-col w-full gap-1">
              <p>Fee to be charged: $ (convention registration)</p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
            {/* Address of cardholder */}
            <div className="flex flex-col w-full gap-1">
              <p>Address of cardholder</p>
              <textarea
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
            {/* Daytime phone number */}
            <div className="flex flex-col w-full gap-1">
              <p>Daytime phone number</p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
            {/* Credit card number */}
            <div className="flex flex-col w-full gap-1">
              <p>Credit card number</p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
            {/* Name of registrant (if different from cardholder) */}
            <div className="flex flex-col w-full gap-1">
              <p>Name of registrant (if different from cardholder)</p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
            {/* Expiration date */}
            <div className="flex flex-col w-full gap-1">
              <p>Expiration date</p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
            {/* Cardholder signature */}
            <div className="flex flex-col w-full gap-1">
              <p>Cardholder signature</p>
              <input
                type="text"
                className="outline-none border-b-2 border-pink-600"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
    // </div>
  );
};

export default Form;
