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
      className="flex flex-col items-center justify-evenly text-white w-full h-full gap-2 bg-black p-10"
    >
      {/* title 1 */}
      <h3 className="sm:text-[1rem] text-[1.5rem] font-medium">
        2016 AMERICAN PSYCHOLOGICAL ASSOCIATION ANNUAL CONVENTION
      </h3>
      {/* title 2 */}
      <h3 className="sm:text-[2rem] text-[1.5rem] font-medium">
        ADVANCE REGISTRATION FORM
      </h3>
      <div className="flex gap-5 w-full h-full">
        {/* right side */}
        <div className="w-[70%] flex flex-col gap-3">
          {/* input 1 */}
          <div className="w-full flex flex-col gap-1">
            <p className="cursor-pointer sm:text-base text-sm">
              APA Member Number (8 digits)
            </p>
            <input
              type="text"
              placeholder="Please provide your APA membership number."
              name="email"
              id="email"
              className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
              {...register("APA", { required: true, maxLength: 8 })}
            />
            {errors.APA && (
              <span className="text-xs text-red-600">Max 8 digit</span>
            )}
          </div>
          {/* input 2 */}
          <div className="w-full flex flex-col gap-1">
            <p className="cursor-pointer sm:text-base text-sm">FullName</p>
            <input
              type="text"
              placeholder="Prefix (Dr., Ms., Mr.) First Name (15 spaces) Middle Initial Last Name (20 spaces)"
              name="fullname"
              id="fullname"
              className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
              {...register("FullName", { required: true, maxLength: 100 })}
            />
            {errors.FullName && (
              <span className="text-xs text-red-600">Max 100</span>
            )}
          </div>
          {/* input 3 */}
          <div className="w-full flex flex-col gap-1">
            <p className="cursor-pointer sm:text-base text-sm">
              Mailing Address
            </p>
            <input
              type="text"
              placeholder="example: Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-56781."
              name="mailingAddress"
              id="mailingAddress"
              className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
            />
          </div>
          {/* input 4 */}
          <div className="w-full flex items-center gap-5">
            {/* input 4 coloum 1 */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">City</p>
              <input
                type="text"
                id="city"
                className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
              />
            </div>
            {/* input 4 coloum 2 */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">
                State or Province
              </p>
              <input
                type="text"
                id="stateOrProvince"
                className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
              />
            </div>
            {/* input 4 coloum 3 */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">
                Zip or Postal Code
              </p>
              <input
                type="text"
                id="zipOrPostalCode"
                className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
              />
            </div>
            {/* input 4 coloum 4 */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">
                Country (If not U.S.)
              </p>
              <input
                type="text"
                id="country"
                className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
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
                id="daytimeTelephone"
                className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
              />
            </div>
            {/* input 5 coloum 2 */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">Cell Phone</p>
              <input
                type="text"
                placeholder="Include Area Code example: (123)789785"
                id="cellPhone"
                className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
              />
            </div>
            {/* input 5 coloum 3 */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm">
                Zip or Postal Code
              </p>
              <input
                type="text"
                id="zipOrPostalCode"
                className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
              />
            </div>
          </div>
          {/* input 6 */}
          <div className="w-full flex flex-col gap-1">
            <p className="cursor-pointer sm:text-base text-sm">Institution</p>
            <input
              type="text"
              placeholder="Enter your affiliation (e.g., Yale University, Independent practice, Sunset CMHC)."
              id="Institution"
              className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
            />
          </div>
          {/* input 7 */}
          <div className="flex flex-col gap-2 pt-5">
            <h1>
              Enter the city, state or province, and country (if not U.S.) of
              your institution for your badge.
            </h1>
            <div className="w-full flex items-center gap-5">
              {/* input 5 coloum 1 */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Daytime Telephone
                </p>
                <input
                  type="text"
                  id="daytimeTelephone"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
                />
              </div>
              {/* input 5 coloum 2 */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Cell Phone
                </p>
                <input
                  type="text"
                  placeholder="Include Area Code example: (123)789785"
                  id="cellPhone"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
                />
              </div>
              {/* input 5 coloum 3 */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Zip or Postal Code
                </p>
                <input
                  type="text"
                  id="zipOrPostalCode"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
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
              id="zipOrPostalCode"
              className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
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
                  id="daytimeTelephone"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
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
                  id="daytimeTelephone"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
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
                id="daytimeTelephone"
                className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
              />
            </div>
            {/* first APA */}
            <div className="w-full flex gap-5">
              <p>First APA Convention</p>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  placeholder="Include Area Code example: (123)789785"
                  id="cellPhone"
                  className="size-5 cursor-pointer"
                />
                <p>Yes</p>
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  placeholder="Include Area Code example: (123)789785"
                  id="cellPhone"
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
                  id="cellPhone"
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
                id="daytimeTelephone"
                className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
              />
            </div>
            {/* early career */}
            <div className="w-full flex gap-5">
              <p>Early Career Psychologist</p>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  placeholder="Include Area Code example: (123)789785"
                  id="cellPhone"
                  className="size-5 cursor-pointer"
                />
                <p>Yes</p>
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  placeholder="Include Area Code example: (123)789785"
                  id="cellPhone"
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
                  id="daytimeTelephone"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
                />
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Middle Initial
                </p>
                <input
                  type="text"
                  id="cellPhone"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
                />
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">Last Name</p>
                <input
                  type="text"
                  id="zipOrPostalCode"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
                />
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Amount Due
                </p>
                <input
                  type="text"
                  id="zipOrPostalCode"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
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
                  id="daytimeTelephone"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
                />
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Middle Initial
                </p>
                <input
                  type="text"
                  id="cellPhone"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
                />
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">Last Name</p>
                <input
                  type="text"
                  id="zipOrPostalCode"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
                />
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Amount Due
                </p>
                <input
                  type="text"
                  id="zipOrPostalCode"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
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
                  id="daytimeTelephone"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
                />
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Middle Initial
                </p>
                <input
                  type="text"
                  id="cellPhone"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
                />
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">Last Name</p>
                <input
                  type="text"
                  id="zipOrPostalCode"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
                />
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Amount Due
                </p>
                <input
                  type="text"
                  id="zipOrPostalCode"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
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
                  id="daytimeTelephone"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
                />
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Middle Initial
                </p>
                <input
                  type="text"
                  id="cellPhone"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
                />
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">Last Name</p>
                <input
                  type="text"
                  id="zipOrPostalCode"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
                />
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm">
                  Amount Due
                </p>
                <input
                  type="text"
                  id="zipOrPostalCode"
                  className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
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
          </div>
        </div>
      </div>
    </form>
    // </div>
  );
};

export default Form;
