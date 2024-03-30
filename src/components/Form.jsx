const Form = () => {
  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
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
        <div className="w-[65%] flex flex-col gap-10">

          {/* notice 1 */}
          <h1 className="text-xl font-bold">
            For immediate confirmation of your registration, complete the online
            convention registration form at www.apa.org/convention. You may
            register online beginning on April 15, 2016, at 10:00 a.m. EDT
            through August 7, 2016, the last day of the convention.
          </h1>

          {/* notice 2 */}
          <h1 className="text-xl text-balance">
            If you prefer to send your registration form to APA, you may
            complete the registration form and send to APA. Print legibly, using
            a black pen, entering information in the space allowed. Each
            individual attending convention activities must register using a
            separate form. Send the Advance Registration Form to American
            Psychological Association, Attn: Finance/2016 Convention, 750 First
            Street, NE, Washington, DC 20002-4242.{" "}
            <span className="font-bold">
              Registration forms sent by mail must be received at APA by July 7,
              2016.
            </span>
          </h1>


          {/* APA member number */}
          <div className="w-full flex flex-col gap-1">
            <p>
              <span className="font-bold">1. APA MEMBER NUMBER:</span> Please
              provide your APA membership number
            </p>
            <input
              type="text"
              id="apanumber"
              className="max-w-[500px] w-full outline-none border-b-2 border-pink-600"
            />
            <label htmlFor="apanumber">APA Member Number (8 digits)</label>
          </div>


          {/* First middle last Name */}
          <div className="w-full flex flex-col">
            <p>
              <span className="font-bold">2. NAME:</span> First name, middle initial, last name.
              Prefix (Dr., Mr., Ms.) is optional.{" "}
            </p>
            <div className="w-full flex items-center justify-between gap-5">
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="FirstName" />
                <label htmlFor="FirstName">
                  Prefix (Dr., Ms., Mr.) First Name (15 spaces)
                </label>
              </div>
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="middleName" />
                <label htmlFor="middleName">Middle Initial</label>
              </div>
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="LastName" />
                <label htmlFor="LastName">Last Name (20 spaces)</label>
              </div>
            </div>
          </div>


          {/* Mailing address */}
          <div className="w-full flex flex-col gap-1">
            <textarea type="text" id="MailingAddress" />
            <label htmlFor="MailingAddress">Mailing Address (32 spaces)</label>
          </div>
          {/* input 4 */}
          <div className="w-full flex items-center gap-5">
            {/* input 4 coloum 1 */}
            <div className="w-full flex flex-col gap-1">
              <input type="text" id="City" />
              <label htmlFor="City">City</label>
            </div>
            {/* input 4 coloum 2 */}
            <div className="w-full flex flex-col gap-1">
              <input id="StateOrProvince" type="text" />
              <label htmlFor="StateOrProvince">State/Province</label>
            </div>

            {/* input 4 coloum 3 */}
            <div className="w-full flex flex-col gap-1">
              <input id="ZipOrPostal" type="text" />
              <label htmlFor="ZipOrPostal">Zip/Postal Code</label>
            </div>

            {/* input 4 coloum 4 */}
            <div className="w-full flex flex-col gap-1">
              <input type="text" id="Country" />
              <label htmlFor="Country">Country (If not U.S.)</label>
            </div>
          </div>

          {/* input 5 */}
          <div className="w-full flex items-center gap-5">
            {/* input 5 coloum 1 */}
            <div className="w-full flex flex-col gap-1">
              <p className="cursor-pointer sm:text-base text-sm"></p>
              <input type="text" id="DaytimeTelephone" />
              <label htmlFor="DaytimeTelephone">Daytime Telephone</label>
            </div>
            {/* input 5 coloum 2 */}
            <div className="w-full flex flex-col gap-1">
              <input type="text" id="CellPhone" />
              <label htmlFor="CellPhone">Cell Phone</label>
            </div>

            {/* input 5 coloum 3 */}
            <div className="w-full flex flex-col gap-1">
              <input type="email" id="EmailAddress" />
              <label htmlFor="EmailAddress">Email Address</label>
            </div>
          </div>

          {/* input 6 */}
          <div className="w-full flex flex-col gap-1">
            <input type="text" id="Institution" />
            <label htmlFor="Institution">
              Institution (do not exceed 40 spaces)
            </label>
          </div>

          {/* City state/province country */}
          <div className="w-full flex items-center gap-5">
            {/* input 4 coloum 1 */}
            <div className="w-full flex flex-col gap-1">
              <input type="text" id="City2" />
              <label htmlFor="City2">
                City (if different from line 3) (25 spaces)
              </label>
            </div>
            {/* input 4 coloum 2 */}
            <div className="w-full flex flex-col gap-1">
              <input type="text" id="StateOrProvince2" />
              <label htmlFor="StateOrProvince2">State/Province</label>
            </div>
            {/* input 4 coloum 4 */}
            <div className="w-full flex flex-col gap-1">
              <input type="text" id="Country2" />
              <label htmlFor="Country2">Country (If not U.S.)</label>
            </div>
          </div>

          {/* Membership */}
          <div className="flex flex-col gap-1">
            <input type="text" id="MembershipCode" />
            <label htmlFor="MembershipCode">Membership Code</label>
          </div>

          {/* Registration Fee and CE Session Fee */}
          <div className="flex flex-col gap-2">
            <div className="w-full flex items-center gap-5">
              {/* input 9 coloum 1 */}
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="RegistrationFee">Registration Fee</label>
                <input type="text" id="RegistrationFee" placeholder="$" />
                <label>Amount Due</label>
              </div>
              {/* input 9 coloum 2 */}
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="CESessionFee">CE Sessions Fee</label>
                <input type="text" id="CESessionFee" placeholder="$" />
                <label>Amount Due</label>
              </div>
            </div>
            <h1 className="font-medium">
              (Enclose check or money order made out to American Psychological
              Association or Credit Card Payment Authorization Form)
            </h1>
          </div>

          {/* institutional code and first APA and programs only */}
          <div className="w-full flex items-center gap-20">
            {/* institutional code */}
            <div className="w-full flex flex-col gap-1">
              <input type="text" id="InstitutionalCode" />
              <label htmlFor="InstitutionalCode">Institutional Code</label>
            </div>

            {/* first APA */}
            <div className="w-full flex gap-5 font-medium">
              <p>First APA Convention</p>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="size-5 cursor-pointer" />
                <p>Yes</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="size-5 cursor-pointer" />
                <p>No</p>
              </div>
            </div>

            {/* programs only */}
            <div className="w-full flex flex-col border-2 border-pink-600 p-5 font-medium">
              <p>Programs Only Mailed Upon Request</p>
              <div className="flex items-center gap-3">
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
          <div className="w-full flex items-center gap-20">
            {/* disability */}
            <div className="w-full flex flex-col gap-1">
              <input type="text" id="Disability" />
              <label htmlFor="Disability">
                Person With Disability (leave blank if not disabled)
              </label>
            </div>

            {/* early career */}
            <div className="w-full flex gap-5 font-medium">
              <p>Early Career Psychologist</p>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  placeholder="Include Area Code example: (123)789785"
                  className="size-5 cursor-pointer"
                />
                <p>Yes</p>
              </div>
              <div className="flex items-center gap-3">
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
            <h1 className="font-medium">
              Name(s) of Nonmember Nonpsychologist Spouse/Equivalent or
              Dependent(s) Under Age 18 requiring a badge (maximum of 4)
            </h1>

            {/* nonMember Nonpsychologist column 1 */}
            <div className="w-full flex items-center gap-5">
              {/* First Name */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyFirstName1" />
                <label htmlFor="familyFirstName1">First Name</label>
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyMiddleInitial1" />
                <label htmlFor="familyMiddleInitial1">Middle Initial</label>
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyLastName1" />
                <label htmlFor="familyLastName1">Last Name</label>
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyAmountDue1" />
                <label htmlFor="familyAmountDue1">Amount Due</label>
              </div>
            </div>

            {/* nonMember Nonpsychologist column 2 */}
            <div className="w-full flex items-center gap-5">
              {/* First Name */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyFirstName2" />
                <label htmlFor="familyFirstName2">First Name</label>
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyMiddleInitial2" />
                <label htmlFor="familyMiddleInitial2">Middle Initial</label>
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyLastName2" />
                <label htmlFor="familyLastName2">Last Name</label>
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyAmountDue2" />
                <label htmlFor="familyAmountDue2">Amount Due</label>
              </div>
            </div>

            {/* nonMember Nonpsychologist column 3 */}
            <div className="w-full flex items-center gap-5">
              {/* First Name */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyFirstName3" />
                <label htmlFor="familyFirstName3">First Name</label>
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyMiddleInitial3" />
                <label htmlFor="familyMiddleInitial3">Middle Initial</label>
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyLastName3" />
                <label htmlFor="familyLastName3">Last Name</label>
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyAmountDue3" />
                <label htmlFor="familyAmountDue1">Amount Due</label>
              </div>
            </div>

            {/* nonMember Nonpsychologist column 4 */}
            <div className="w-full flex items-center gap-5">
              {/* First Name */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyFirstName4" />
                <label htmlFor="familyFirstName4">First Name</label>
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyMiddleInitial4" />
                <label htmlFor="familyMiddleInitial4">Middle Initial</label>
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyLastName4" />
                <label htmlFor="familyLastName4">Last Name</label>
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="familyAmountDue4" />
                <label htmlFor="familyAmountDue4">Amount Due</label>
              </div>
            </div>

            {/* confirmation family member */}
            <div className="flex items-center gap-2 font-medium">
              <input type="checkbox" className="size-5 cursor-pointer" />
              <p>
                I confirm that the individuals listed above are family members.
              </p>
            </div>

            {/* city state/province country */}
            <div className="w-full flex items-center gap-5">
              {/* input 4 coloum 1 */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="City3" />
                <label htmlFor="City3">City</label>
              </div>
              {/* input 4 coloum 2 */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="StateOrProvince3" />
                <label htmlFor="StateOrProvince3">State/Province</label>
              </div>
              {/* input 4 coloum 4 */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="Country3" />
                <label htmlFor="Country3">Country (If not U.S.)</label>
              </div>
            </div>

            {/* total fees due */}
            <div className="w-full flex flex-col gap-1">
              <input type="text" id="TotalFeesDue" placeholder="$" />
              <label htmlFor="TotalFeesDue" className="text-lg font-bold">
                Total Fees Due (Payment must accompany form)
              </label>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-[35%] flex flex-col gap-5">
          {/* details */}
          <h1 className="text-xl text-balance px-10">
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
          <div className="w-full flex flex-col border-8 border-pink-600 p-3 gap-3">
            {/* header 1 */}
            <h1 className="text-2xl font-bold">
              Credit Card Payment Authorization Form
            </h1>
            {/* header 2 */}
            <h1 className="text-xl text-pretty font-medium">
              I authorize the American Psychological Association to charge my
              (check one):
            </h1>

            {/* card checkbox */}
            <div className="w-full flex items-center justify-between py-5 font-medium">
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
              <input type="text" id="NameOfCreditCard" />
              <label htmlFor="NameOfCreditCard">
                Name as it appears on credit card
              </label>
            </div>

            {/* Fee to be charged */}
            <div className="flex flex-col w-full gap-1">
              <input type="text" id="FeeToBeCharged" />
              <label htmlFor="FeeToBeCharged">
                Fee to be charged: $ (convention registration)
              </label>
            </div>

            {/* Address of cardholder */}
            <div className="flex flex-col w-full gap-1">
              <textarea type="text" id="AddressOfCardholder" />
              <label htmlFor="AddressOfCardholder">Address of cardholder</label>
            </div>

            {/* Daytime phone number */}
            <div className="flex flex-col w-full gap-1">
              <input type="text" id="DaytimePhoneNumber" />
              <label htmlFor="DaytimePhoneNumber">Daytime phone number</label>
            </div>

            {/* Credit card number */}
            <div className="flex flex-col w-full gap-1">
              <input type="text" id="CreditCardNumber" />
              <label htmlFor="CreditCardNumber">Credit card number</label>
            </div>

            {/* Name of registrant (if different from cardholder) */}
            <div className="flex flex-col w-full gap-1">
              <input type="text" id="NameOfRegistrant" />
              <label htmlFor="NameOfRegistrant">
                Name of registrant (if different from cardholder)
              </label>
            </div>

            {/* Expiration date */}
            <div className="flex flex-col w-full gap-1">
              <input type="text" id="ExpirationDate" />
              <label htmlFor="ExpirationDate">Expiration date</label>
            </div>

            {/* Cardholder signature */}
            <div className="flex flex-col w-full gap-1">
              <input type="text" id="CardholderSignature" />
              <label htmlFor="CardholderSignature">Cardholder signature</label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center pt-10">
        <button className="px-10 py-3 bg-pink-500 hover:bg-pink-600 rounded text-white font-medium transition-all duration-300">
          Submit
        </button>
      </div>
    </form>
    // </div>
  );
};

export default Form;
