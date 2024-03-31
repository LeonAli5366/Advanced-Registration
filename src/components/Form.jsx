import { useState } from "react";

const Form = () => {
  // all state
  const [error, setError] = useState("this is a error");
  const [firstAPAConvention, setFirstAPAConvention] = useState("");
  const [psychologist, setPsychologist] = useState("");
  const [payment, setPayment] = useState("");

  // all function
  const handleRegisterSubmit = (event) => {
    // event functions
    setError("");
    event.preventDefault();
    const form = event.target;

    // get from data
    const apaMemberNumber = parseInt(form.apaMemberNumber.value);
    const firstName = form.firstName.value;
    const middleName = form.middleName.value;
    const lastName = form.lastName.value;
    const mailingAddress = form.mailingAddress.value;
    const city = form.city.value;
    const userZipCode = parseInt(form.userZipCode.value);
    const userState = form.userState.value;
    let userCountry = form.userCountry.value;
    const userTelephone = form.userTelephone.value;
    const userCellPhone = form.userCellPhone.value;
    const userEmail = form.userEmail.value;
    const institution = form.institution.value;
    const institutionCity = form.institutionCity.value;
    let institutionCountry = form.institutionCountry.value;
    const institutionState = form.institutionState.value;
    const membershipCode = form.membershipCode.value;
    const registrationFeeDue = form.registrationFeeDue.value;
    const sessionsFeeDue = form.sessionsFeeDue.value;
    const institutionalCode = form.institutionalCode.value;
    const mailRequest = form.mailRequest.checked;
    const Disability = form.Disability.value;
    const familyCity = form.familyCity.value;
    const familyState = form.familyState.value;
    const familyCountry = form.familyCountry.value;
    const TotalFeesDue = form.TotalFeesDue.value;
    const NameOfCreditCard = form.NameOfCreditCard.value;
    const FeeToBeCharged = form.FeeToBeCharged.value;
    const AddressOfCardholder = form.AddressOfCardholder.value;
    const cardHolderPhoneNumber = form.cardHolderPhoneNumber.value;
    const CreditCardNumber = form.CreditCardNumber.value;
    const NameOfRegistrant = form.NameOfRegistrant.value;
    const ExpirationDate = form.ExpirationDate.value;
    const cardholderSignature = form.cardholderSignature.value;

    // family all data

    const family = [
      {
        familyFirstName1: form.familyFirstName1.value,
        familyMiddleName1: form.familyMiddleName1.value,
        familyLastName1: form.familyLastName1.value,
        familyAmountDue1: form.familyAmountDue1.value,
      },
      {
        familyFirstName2: form.familyFirstName2.value,
        familyMiddleName2: form.familyMiddleName2.value,
        familyLastName2: form.familyLastName2.value,
        familyAmountDue2: form.familyAmountDue2.value,
      },
      {
        familyFirstName3: form.familyFirstName3.value,
        familyMiddleName3: form.familyMiddleName3.value,
        familyLastName3: form.familyLastName3.value,
        familyAmountDue3: form.familyAmountDue3.value,
      },
      {
        familyFirstName4: form.familyFirstName4.value,
        familyMiddleName4: form.familyMiddleName4.value,
        familyLastName4: form.familyLastName4.value,
        familyAmountDue4: form.familyAmountDue4.value,
      },
    ];

    // regitser functions
    if (userCountry === "" || userCountry === " ") {
      userCountry = "U.S.";
    }
    if (institutionCountry === "" || institutionCountry === " ") {
      institutionCountry = "U.S.";
    }
    if (firstAPAConvention === "") {
      return setError("Select it is your first time or not");
    }

    // register data for backend
    const registerData = {
      apaMemberNumber,
      firstName,
      middleName,
      lastName,
      mailingAddress,
      city,
      userState,
      userZipCode,
      userCountry,
      userTelephone,
      userCellPhone,
      userEmail,
      institution,
      institutionCity,
      institutionCountry,
      institutionState,
      membershipCode,
      registrationFeeDue,
      sessionsFeeDue,
      institutionalCode,
      firstAPAConvention: firstAPAConvention,
      mailRequest,
      Disability,
      psychologist: psychologist,
      family,
      familyCity,
      familyState,
      familyCountry,
      TotalFeesDue,
      payment: payment,
      NameOfCreditCard,
      FeeToBeCharged,
      AddressOfCardholder,
      cardHolderPhoneNumber,
      CreditCardNumber,
      NameOfRegistrant,
      ExpirationDate,
      cardholderSignature,
    };

    // console.log(registerData);

    // post data to server
    fetch(`http://localhost:5000/api/v1/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(registerData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <form
      onSubmit={handleRegisterSubmit}
      className="flex flex-col items-center text-black w-full h-full gap-2 bg-white sm:p-10 p-5"
    >
      {/* title 1 */}
      <h3 className="sm:text-[1rem] text-[0.7rem] sm:text-start text-center font-medium">
        2016 AMERICAN PSYCHOLOGICAL ASSOCIATION ANNUAL CONVENTION
      </h3>
      {/* title 2 */}
      <h3 className="sm:text-[2rem] text-[1.1rem] font-bold">
        ADVANCE REGISTRATION FORM
      </h3>
      <div className="flex sm:flex-row flex-col gap-5 w-full h-full">
        {/* left side */}
        <div className="sm:w-[65%] w-full flex flex-col gap-10">
          {/* notice 1 */}
          <h1 className="sm:text-[1vw] text-sm sm:text-start text-center font-bold">
            For immediate confirmation of your registration, complete the online
            convention registration form at www.apa.org/convention. You may
            register online beginning on April 15, 2016, at 10:00 a.m. EDT
            through August 7, 2016, the last day of the convention.
          </h1>

          {/* notice 2 */}
          <h1 className="sm:text-[1.1vw] text-sm text-balance">
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
            <h5>
              <h4 className="font-bold">1. APA MEMBER NUMBER:</h4> Please
              provide your APA membership number
            </h5>
            <input
              type="number"
              id="apanumber"
              name="apaMemberNumber"
              required
              className="max-w-[500px] w-full outline-none border-b-2 border-pink-600"
            />
            <label htmlFor="apanumber">APA Member Number (8 digits)</label>
          </div>

          {/* First middle last Name */}
          <div className="w-full flex flex-col">
            <h5>
              <h4 className="font-bold">2. NAME:</h4> First name, middle
              initial, last name. Prefix (Dr., Mr., Ms.) is optional.{" "}
            </h5>
            <div className="w-full flex items-center justify-between gap-5 sm:flex-nowrap flex-wrap">
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="FirstName" name="firstName" required />
                <label htmlFor="FirstName">
                  Prefix (Dr., Ms., Mr.) First Name (15 spaces)
                </label>
              </div>
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="middleName" name="middleName" required />
                <label htmlFor="middleName">Middle Initial</label>
              </div>
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="LastName" name="lastName" required />
                <label htmlFor="LastName">Last Name (20 spaces)</label>
              </div>
            </div>
          </div>

          {/* Mailing address */}
          <div className="w-full flex flex-col gap-1">
            <h5>
              <h4 className="font-bold">3. MAILING ADDRESS:</h4> Please provide
              a mailing address if you choose to have your Convention Program
              mailed to you in advance (US/Canada only). Two lines are allowed
              for the mailing address (e.g., department and institution). Street
              address will facilitate delivery.
            </h5>
            <textarea type="text" id="MailingAddress" />
            <label htmlFor="MailingAddress">Mailing Address (32 spaces)</label>
          </div>

          {/* city state country */}
          <div className="w-full flex flex-col">
            <h5>
              <h4 className="font-bold">
                4. CITY, STATE OR PROVINCE, ZIP OR POSTAL CODE, COUNTRY (IF NOT
                U.S.):
              </h4>{" "}
              Use post office abbreviations for the state or province.
            </h5>
            <div className="w-full flex items-center gap-5 sm:flex-nowrap flex-wrap">
              {/* input 4 coloum 1 */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="City" name="city" required />
                <label htmlFor="City">City</label>
              </div>
              {/* input 4 coloum 2 */}
              <div className="w-full flex flex-col gap-1">
                <input
                id="StateOrProvince"
                type="text"
                name="userState"
                required
              />
                <label htmlFor="StateOrProvince">State/Province</label>
              </div>

              {/* input 4 coloum 3 */}
              <div className="w-full flex flex-col gap-1">
                <input
                id="ZipOrPostal"
                type="number"
                name="userZipCode"
                required
              />
                <label htmlFor="ZipOrPostal">Zip/Postal Code</label>
              </div>

              {/* input 4 coloum 4 */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="Country" name="userCountry" />
                <label htmlFor="Country">Country (If not U.S.)</label>
              </div>
            </div>
          </div>

          {/* daytime telephone cell phone email address */}
          <div className="w-full flex flex-col">
            <h5>
              <h4 className="font-bold">
                5. DAYTIME TELEPHONE, CELL PHONE, AND EMAIL ADDRESS:
              </h4>{" "}
              Please provide your daytime phone and cell phone numbers,
              including area code, and your email address.{" "}
            </h5>
            <div className="w-full flex items-center gap-5 sm:flex-nowrap flex-wrap">
              {/* input 5 coloum 1 */}
              <div className="w-full flex flex-col gap-1">
                <p className="cursor-pointer sm:text-base text-sm"></p>
                <input type="number" id="DaytimeTelephone" name="userTelephone" />
                <label htmlFor="DaytimeTelephone">Daytime Telephone</label>
              </div>
              {/* input 5 coloum 2 */}
              <div className="w-full flex flex-col gap-1">
                <input
                type="number"
                id="CellPhone"
                name="userCellPhone"
                required
              />
                <label htmlFor="CellPhone">Cell Phone</label>
              </div>

              {/* input 5 coloum 3 */}
              <div className="w-full flex flex-col gap-1">
                <input type="email" id="EmailAddress" name="userEmail" required />
                <label htmlFor="EmailAddress">Email Address</label>
              </div>
            </div>
          </div>

          {/* Institution */}
          <div className="w-full flex flex-col gap-1">
            <h5>
              <h4>6. INSTITUTION:</h4> Enter your affiliation (e.g., Yale
              University, Independent practice, Sunset CMHC).{" "}
            </h5>
            <input type="text" id="Institution" name="institution" required />
            <label htmlFor="Institution">
              Institution (do not exceed 40 spaces)
            </label>
          </div>

          {/* City state/province country */}
          <div className="w-full flex flex-col">
            <h5>
              <h4>7. CITY, STATE OR PROVINCE, AND COUNTRY:</h4> Enter the city,
              state or province, and country (if not U.S.) of your institution
              for your badge.{" "}
            </h5>
            <div className="w-full flex items-center gap-5 sm:flex-nowrap flex-wrap">
              {/* input 4 coloum 1 */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="City2" name="institutionCity" />
                <label htmlFor="City2">
                  City (if different from line 3) (25 spaces)
                </label>
              </div>
              {/* input 4 coloum 2 */}
              <div className="w-full flex flex-col gap-1">
                <input
                type="text"
                id="StateOrProvince2"
                name="institutionState"
              />
                <label htmlFor="StateOrProvince2">State/Province</label>
              </div>
              {/* input 4 coloum 4 */}
              <div className="w-full flex flex-col gap-1">
                <input type="text" id="Country2" name="institutionCountry" />
                <label htmlFor="Country2">Country (If not U.S.)</label>
              </div>
            </div>
          </div>

          {/* Membership */}
          <div className="flex flex-col gap-1">
            <h5>
              <h4>8. MEMBERSHIP CODE:</h4>
              <h3>
                {" "}
                From the list below, select your membership status code; enter
                it in the space allowed:
              </h3>{" "}
              <h4>M — APA Member; F — APA Fellow;</h4>
              <h4>
                {" "}
                A — APA Associate; N — Nonmember; I — APA International
                Affiliate;
              </h4>
              <h4> C — APA Community College Teacher Affiliate;</h4>{" "}
              <h4>H — APA High School Teacher Affiliate;</h4>
              <h4> R — APAGS Member; S — APA Student Affiliate;</h4>{" "}
              <h4>T — Full-Time Student;</h4>
              <h4>Q—State/Provincial/Territorial Association Representative</h4>
            </h5>
            <input type="text" id="MembershipCode" name="membershipCode" />
            <label htmlFor="MembershipCode">Membership Code</label>
          </div>

          {/* Registration Fee and CE Session Fee */}
          <div className="w-full flex flex-col">
            {/* reg fee info */}
            <h5>
              <h4>9. REGISTRATION FEE:</h4> Enter fee (by June 30/July 1-Aug. 2)
              paid. Payment (check or credit card) for registration fee must
              accompany form. For those paying by VISA, MasterCard, or American
              Express, please complete the Credit Card Payment Authorization.
              Forms sent with a postmark of July 1 and after will be charged
              fees effective on July 1.
              <h3 className="pt-2">
                <span className="font-bold">$275/$330—</span>APA member, fellow,
                or associate, APA community college teacher affiliate, APA
                international affiliate
              </h3>
              <h3>
                <span className="font-bold">$70/$80—</span>APA student
                affiliate, APAGS member
              </h3>
              <h3>
                <span className="font-bold">$120/$130—</span>Full-time student,
                APA high school teacher affiliate
              </h3>
              <h3>
                <span className="font-bold">$10—</span>Nonrefundable processing
                fee for nonmember nonpsychologist spouses/equivalents and
                dependents under age 18 (see No. 18 below)
              </h3>
              <h3>
                <span className="font-bold">$375/$430—</span>Nonmember of APA
              </h3>
            </h5>
            <h5>
              <h4>10. CE SESSIONS FEE FOR UNLIMITED CE CREDIT:</h4> Enter fee
              paid (April–June 30/July 1–August 2):{" "}
              <h3 className="pt-2">
                <span className="font-bold">$85/$105—</span>APA member or
                affiliate
              </h3>{" "}
              <h3>
                <span className="font-bold">$120/$150—</span>Nonmember of APA
              </h3>
            </h5>

            <div className="flex flex-col gap-2">
              <div className="w-full flex items-center gap-5 sm:flex-nowrap flex-wrap">
                {/* input 9 coloum 1 */}
                <div className="w-full flex flex-col gap-1">
                  <label htmlFor="RegistrationFee">Registration Fee</label>
                  <input
                  type="number"
                  id="RegistrationFee"
                  placeholder="$"
                  name="registrationFeeDue"
                  defaultValue={0}
                />
                  <label>Amount Due</label>
                </div>
                {/* input 9 coloum 2 */}
                <div className="w-full flex flex-col gap-1">
                  <label htmlFor="CESessionFee">CE Sessions Fee</label>
                  <input
                  type="number"
                  id="CESessionFee"
                  defaultValue={0}
                  placeholder="$"
                  name="sessionsFeeDue"
                />
                  <label>Amount Due</label>
                </div>
              </div>
              <h5 className="font-medium">
                (Enclose check or money order made out to American Psychological
                Association or Credit Card Payment Authorization Form)
              </h5>
            </div>
          </div>

          {/* institutional code and first APA and programs only */}
          <div className="w-full flex flex-col gap-10">
            {/* institutional code */}
            <div className="w-full flex flex-col gap-1">
              <h5>
                <h4>11. INSTITUTIONAL CODE:</h4> Enter one of the following
                numbers to identify the type of institution to which you belong:{" "}
                <h3>
                  1—Universities, Colleges, and Professional Schools, 2—Primary
                  and Secondary Schools (Public and Private), 3—Government
                  (Federal, State/Provincial, or Local) includes all military
                  services, 4—Business/ Industry, 5—Non-Governmental
                  Organizations (Associations or Quasi Governmental or
                  International Organizations), 6a—Human (Mental/Health)
                  Services (Hospitals, Clinics, CMHCs) or 6b— Independent
                  Practice, 7—Other Professional (Non-Mental/Health) Services
                  (Research Organizations, etc.), 8—Other (Retired/Emeritus,
                  Self-Employed Individual/Owner, except Independent Practice,
                  etc.)
                </h3>
              </h5>
              <input
                type="text"
                id="InstitutionalCode"
                name="institutionalCode"
              />
              <label htmlFor="InstitutionalCode">Institutional Code</label>
            </div>

            {/* first APA */}
            <div className="w-full flex flex-col">
              <h5>
                <h4>12. FIRST APA CONVENTION:</h4> Please check here if this is
                your first APA Convention.
              </h5>
              <div className="w-full flex gap-5 font-medium">
                <p>First APA Convention</p>
                <div className={`flex items-center gap-3`}>
                  <input
                  onClick={() => {
                    firstAPAConvention != "yes"
                      ? setFirstAPAConvention("yes")
                      : setFirstAPAConvention("");
                  }}
                  disabled={firstAPAConvention === "no"}
                  type="checkbox"
                  className="size-5 cursor-pointer"
                />
                  <p>Yes</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                  onClick={() => {
                    firstAPAConvention != "no"
                      ? setFirstAPAConvention("no")
                      : setFirstAPAConvention("");
                  }}
                  type="checkbox"
                  className="size-5 cursor-pointer"
                  disabled={firstAPAConvention === "yes"}
                />
                  <p>No</p>
                </div>
              </div>
            </div>

            {/* programs only */}
            <div className="w-full flex flex-col">
              <h5>
                <h4>13. REQUEST PROGRAM BOOK:</h4> Please check here if you wish
                to receive your Convention Program in advance (US/Canada only).
                Help APA go green by using the online program and the mobile
                app.
              </h5>
              <div className="w-full flex flex-col border-2 border-pink-600 p-5 font-medium">
                <p>Programs Only Mailed Upon Request</p>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    placeholder="Include Area Code example: (123)789785"
                    className="size-5 cursor-pointer"
                    name="mailRequest"
                />
                  <p>Request one here (US/Canada only)</p>
                </div>
              </div>
            </div>
          </div>

          {/* disability and early career */}
          <div className="w-full flex flex-col gap-10">
            {/* disability */}
            <div className="w-full flex flex-col gap-1">
              <h5>
                <h4>14. PERSON WITH DISABILITY:</h4> If you are a person with a
                disability and require special assistance, check this box.
                Attach a separate note specifying special needs (e.g.,
                wheelchair accessible transportation; sign language
                interpreters, services for persons who are blind/visually
                impaired; or support for other physical limitations). Requests
                for assistance must be sent to APA by July 7, 2016. If
                arrangements are not requested by July 7, 2016, APA will not be
                able to guarantee the availability of such arrangements.
              </h5>
              <input
                type="text"
                id="Disability"
                name="Disability"
                defaultValue={""}
              />
              <label htmlFor="Disability">
                Person With Disability (leave blank if not disabled)
              </label>
            </div>

            {/* early career */}
            <div className="w-full flex flex-col">
              <h5>
                <h4>15. EARLY CAREER PSYCHOLOGIST:</h4> Please check here if you
                are an Early Career Psychologist (i.e., a new professional
                within 10 years of receiving your doctoral degree).
              </h5>
              <div className="w-full flex gap-5 font-medium">
                <p>Early Career Psychologist</p>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    placeholder="Include Area Code example: (123)789785"
                    className="size-5 cursor-pointer"
                    onClick={() => {
                    psychologist != "yes"
                      ? setPsychologist("yes")
                      : setPsychologist("");
                  }}
                  disabled={psychologist === "no"}
                />
                  <p>Yes</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    placeholder="Include Area Code example: (123)789785"
                    className="size-5 cursor-pointer"
                    onClick={() => {
                    psychologist != "no"
                      ? setPsychologist("no")
                      : setPsychologist("");
                  }}
                  disabled={psychologist === "yes"}
                />
                  <p>No</p>
                </div>
              </div>
            </div>
          </div>

          {/* nonMember Nonpsychologist */}
          <div className="flex flex-col gap-3 pt-5">
            <h5>
              <h4>
                16. NONMEMBER NONPSYCHOLOGIST SPOUSE/ EQUIVALENT OR DEPENDENTS
                UNDER AGE 18 BADGE REQUEST:
              </h4>{" "}
              If you wish to request a badge for a family member who is a
              nonmember spouse/equivalent or dependent(s) under 18 years of age,
              please provide name(s) for badge information (maximum of 4). A $10
              per person nonrefundable processing fee will be required. By
              requesting a badge here, these individuals may accompany the
              registrant to areas that require a badge for admittance, such as
              the exhibit area and the poster session area. No other
              registration privileges will be provided.
            </h5>
            <h1 className="font-medium">
              Name(s) of Nonmember Nonpsychologist Spouse/Equivalent or
              Dependent(s) Under Age 18 requiring a badge (maximum of 4)
            </h1>

            {/* nonMember Nonpsychologist column 1 */}
            <div className="w-full flex items-center gap-5 sm:flex-nowrap flex-wrap">
              <span className="sm:hidden block">1.</span>
              {/* First Name */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyFirstName1"
                  name="familyFirstName1"
                />
                <label htmlFor="familyFirstName1">First Name</label>
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyMiddleInitial1"
                  name="familyMiddleName1"
                />
                <label htmlFor="familyMiddleInitial1">Middle Initial</label>
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyLastName1"
                  name="familyLastName1"
                />
                <label htmlFor="familyLastName1">Last Name</label>
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyAmountDue1"
                  name="familyAmountDue1"
                />
                <label htmlFor="familyAmountDue1">Amount Due</label>
              </div>
            </div>

            {/* nonMember Nonpsychologist column 2 */}
            <div className="w-full flex items-center gap-5 sm:flex-nowrap flex-wrap">
              <span className="sm:hidden block">2.</span>
              {/* First Name */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyFirstName2"
                  name="familyFirstName2"
                />
                <label htmlFor="familyFirstName2">First Name</label>
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyMiddleInitial2"
                  name="familyMiddleName2"
                />
                <label htmlFor="familyMiddleInitial2">Middle Initial</label>
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyLastName2"
                  name="familyLastName2"
                />
                <label htmlFor="familyLastName2">Last Name</label>
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyAmountDue2"
                  name="familyAmountDue2"
                />
                <label htmlFor="familyAmountDue2">Amount Due</label>
              </div>
            </div>

            {/* nonMember Nonpsychologist column 3 */}
            <div className="w-full flex items-center gap-5 sm:flex-nowrap flex-wrap">
              <span className="sm:hidden block">3.</span>
              {/* First Name */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyFirstName3"
                  name="familyFirstName3"
                />
                <label htmlFor="familyFirstName3">First Name</label>
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyMiddleInitial3"
                  name="familyMiddleName3"
                />
                <label htmlFor="familyMiddleInitial3">Middle Initial</label>
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyLastName3"
                  name="familyLastName3"
                />
                <label htmlFor="familyLastName3">Last Name</label>
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyAmountDue3"
                  name="familyAmountDue3"
                />
                <label htmlFor="familyAmountDue1">Amount Due</label>
              </div>
            </div>

            {/* nonMember Nonpsychologist column 4 */}
            <div className="w-full flex items-center gap-5 sm:flex-nowrap flex-wrap">
              <span className="sm:hidden block">4.</span>
              {/* First Name */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyFirstName4"
                  name="familyFirstName4"
                />
                <label htmlFor="familyFirstName4">First Name</label>
              </div>
              {/* Middle Initial */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyMiddleInitial4"
                  name="familyMiddleName4"
                />
                <label htmlFor="familyMiddleInitial4">Middle Initial</label>
              </div>
              {/* Last Name */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyLastName4"
                  name="familyLastName4"
                />
                <label htmlFor="familyLastName4">Last Name</label>
              </div>
              {/* Amount Due */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  id="familyAmountDue4"
                  name="familyAmountDue4"
                />
                <label htmlFor="familyAmountDue4">Amount Due</label>
              </div>
            </div>

            {/* confirmation family member */}
            <div className="w-full flex-col flex">
              <h5>
                <span className="font-bold">17. CONFIRM</span> that these
                individuals are family members by checking the box.
              </h5>
              <div className="flex items-center gap-2 font-medium">
                <input
                type="checkbox"
                className="size-5 cursor-pointer"
                name="isfamily"
                required
              />
                <p>
                  I confirm that the individuals listed above are family
                  members.
                </p>
              </div>
            </div>

            {/* city state/province country */}
            <div className="w-full flex flex-col pt-10">
              <h5>
                <h4>18. CITY, STATE OR PROVINCE, AND COUNTRY:</h4> Please
                provide the city, state or province, and country (if not U.S.)
                for badges of nonmember nonpsychologist spouse/equivalent and
                dependents under age 18.{" "}
              </h5>
              <div className="w-full flex items-center gap-5 sm:flex-nowrap flex-wrap">
                {/* input 4 coloum 1 */}
                <div className="w-full flex flex-col gap-1">
                  <input type="text" id="City3" name="familyCity" />
                  <label htmlFor="City3">City</label>
                </div>
                {/* input 4 coloum 2 */}
                <div className="w-full flex flex-col gap-1">
                  <input type="text" id="StateOrProvince3" name="familyState" />
                  <label htmlFor="StateOrProvince3">State/Province</label>
                </div>
                {/* input 4 coloum 4 */}
                <div className="w-full flex flex-col gap-1">
                  <input
                  type="text"
                  id="Country3"
                  name="familyCountry"
                  defaultValue={"U.S."}
                />
                  <label htmlFor="Country3">Country (If not U.S.)</label>
                </div>
              </div>
            </div>

            {/* total fees due */}
            <div className="w-full flex flex-col">
              <h5>
                <h4>19. TOTAL FEES DUE:</h4> Enter total of fees due. Payment
                must accompany form in order to process your registration.
              </h5>
              <div className="w-full flex flex-col gap-1">
                <input
                type="number"
                id="TotalFeesDue"
                placeholder="$"
                name="TotalFeesDue"
              />
                <label htmlFor="TotalFeesDue" className="text-lg font-bold">
                  Total Fees Due (Payment must accompany form)
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="sm:w-[35%] w-full flex flex-col gap-5">
          {/* details */}
          <h1 className="sm:text-[1vw] text-sm text-balance sm:px-0 px-2">
            <h4>
              20. Return form with accompanying check (in U.S. dollars/ U.S.
              bank) or with a completed Credit Card Payment Authorization Form
              to:
            </h4>{" "}
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
            <h1 className="sm:text-[1.4vw] text-xl sm:text-start text-center font-bold">
              Credit Card Payment Authorization Form
            </h1>
            {/* header 2 */}
            <h1 className="sm:text-[1.2vw] text-base sm:text-start text-center text-pretty font-medium">
              I authorize the American Psychological Association to charge my
              (check one):
            </h1>

            {/* card checkbox */}
            <div className="w-full flex items-center justify-between py-5 font-medium">
              {/* checkbox 1 */}
              <div className="flex items-center sm:gap-3 gap-1">
                <input
                  type="checkbox"
                  className="sm:size-5 size-3"
                  onClick={() => {
                    payment != "visa" ? setPayment("visa") : setPayment("");
                  }}
                  disabled={
                    payment === "MasterCard" || payment === "AmericanExpress"
                  }
                />
                <p className="sm:text-[1.2vw] text-sm">VISA</p>
              </div>
              {/* checkbox 2 */}
              <div className="flex items-center  sm:gap-3 gap-1">
                <input
                  type="checkbox"
                  className="sm:size-5 size-3"
                  onClick={() => {
                    payment != "MasterCard"
                      ? setPayment("MasterCard")
                      : setPayment("");
                  }}
                  disabled={payment === "AmericanExpress" || payment === "visa"}
                />
                <p className="sm:text-[1.2vw] text-sm">MasterCard</p>
              </div>
              {/* checkbox 3 */}
              <div className="flex items-center  sm:gap-3 gap-1">
                <input
                  type="checkbox"
                  className="sm:size-5 size-3"
                  onClick={() => {
                    payment != "AmericanExpress"
                      ? setPayment("AmericanExpress")
                      : setPayment("");
                  }}
                  disabled={payment === "MasterCard" || payment === "visa"}
                />
                <p className="sm:text-[1.2vw] text-sm">American Express</p>
              </div>
            </div>

            <h1 className="sm:text-[1.2vw] text-sm">
              2016 convention fees to my credit card as indicated below:
            </h1>

            {/* card name */}
            <div className="flex flex-col w-full gap-1">
              <input
                type="text"
                id="NameOfCreditCard"
                name="NameOfCreditCard"
              />
              <label htmlFor="NameOfCreditCard">
                Name as it appears on credit card
              </label>
            </div>

            {/* Fee to be charged */}
            <div className="flex flex-col w-full gap-1">
              <input type="number" id="FeeToBeCharged" name="FeeToBeCharged" />
              <label htmlFor="FeeToBeCharged">
                Fee to be charged: $ (convention registration)
              </label>
            </div>

            {/* Address of cardholder */}
            <div className="flex flex-col w-full gap-1">
              <textarea
                type="text"
                id="AddressOfCardholder"
                name="AddressOfCardholder"
              />
              <label htmlFor="AddressOfCardholder">Address of cardholder</label>
            </div>

            {/* Daytime phone number */}
            <div className="flex flex-col w-full gap-1">
              <input
                type="text"
                id="DaytimePhoneNumber"
                name="cardHolderPhoneNumber"
              />
              <label htmlFor="DaytimePhoneNumber">Daytime phone number</label>
            </div>

            {/* Credit card number */}
            <div className="flex flex-col w-full gap-1">
              <input
                type="text"
                id="CreditCardNumber"
                name="CreditCardNumber"
              />
              <label htmlFor="CreditCardNumber">Credit card number</label>
            </div>

            {/* Name of registrant (if different from cardholder) */}
            <div className="flex flex-col w-full gap-1">
              <input
                type="text"
                id="NameOfRegistrant"
                name="NameOfRegistrant"
              />
              <label htmlFor="NameOfRegistrant">
                Name of registrant (if different from cardholder)
              </label>
            </div>

            {/* Expiration date */}
            <div className="flex flex-col w-full gap-1">
              <input type="text" id="ExpirationDate" name="ExpirationDate" />
              <label htmlFor="ExpirationDate">Expiration date</label>
            </div>

            {/* Cardholder signature */}
            <div className="flex flex-col w-full gap-1">
              <input
                type="text"
                id="CardholderSignature"
                name="cardholderSignature"
              />
              <label htmlFor="CardholderSignature">Cardholder signature</label>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-red-600 text-center  pt-10">{error}</h1>
      <div className="w-full flex items-center justify-center mt-2">
        <button
          type="submit"
          className="px-10 py-3 bg-pink-500 hover:bg-pink-600 rounded text-white font-medium transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </form>
    // </div>
  );
};

export default Form;
