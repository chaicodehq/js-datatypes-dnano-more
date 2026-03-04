/**
 * 🚂 Mumbai Local Train Pass Generator
 *
 * Aaj se tu Mumbai local ka digital pass system bana raha hai! Passenger
 * ka data milega aur tujhe ek formatted pass string generate karni hai.
 * Pass mein sab details honi chahiye ek specific format mein.
 *
 * Rules:
 *   - passenger object mein required fields: name, from, to, classType
 *   - classType must be "first" ya "second" (case-insensitive check)
 *   - Pass ID generate karo:
 *     classType ka first char uppercase + from ke pehle 3 letters uppercase
 *     + to ke pehle 3 letters uppercase
 *     Example: "first", "dadar", "andheri" => "F" + "DAD" + "AND" = "FDADAND"
 *   - Output format using template literal:
 *     Line 1: "MUMBAI LOCAL PASS"
 *     Line 2: "---"
 *     Line 3: "Name: <NAME IN UPPERCASE>"
 *     Line 4: "From: <From in Title Case>"
 *     Line 5: "To: <To in Title Case>"
 *     Line 6: "Class: <FIRST or SECOND>"
 *     Line 7: "Pass ID: <PASSID>"
 *   - Title Case = first letter uppercase, rest lowercase
 *   - Lines are separated by \n (newline)
 *   - Hint: Use template literals, slice(), toUpperCase(), toLowerCase(),
 *     charAt(), typeof
 *
 * Validation:
 *   - Agar passenger object nahi hai ya null hai, return "INVALID PASS"
 *   - Agar koi required field (name, from, to, classType) missing hai
 *     ya empty string hai, return "INVALID PASS"
 *   - Agar classType "first" ya "second" nahi hai, return "INVALID PASS"
 *
 * @param {{ name: string, from: string, to: string, classType: string }} passenger
 * @returns {string} Formatted pass or "INVALID PASS"
 *
 * @example
 *   generateLocalPass({ name: "rahul sharma", from: "dadar", to: "andheri", classType: "first" })
 *   // => "MUMBAI LOCAL PASS\n---\nName: RAHUL SHARMA\nFrom: Dadar\nTo: Andheri\nClass: FIRST\nPass ID: FDADAND"
 *
 *   generateLocalPass(null)
 *   // => "INVALID PASS"
 */
export function generateLocalPass(passenger) {
  // Your code here
  if (typeof passenger !== "object" || passenger === null) {
    return "INVALID PASS";
  }

  if (passenger.name === undefined) return "INVALID PASS";
  if (passenger.from === undefined) return "INVALID PASS";
  if (passenger.to === undefined) return "INVALID PASS";
  if (passenger.classType === undefined) return "INVALID PASS";

  if (typeof passenger.name !== "string" || !(passenger.name.length > 0)) {
    return "INVALID PASS";
  }
  if (typeof passenger.from !== "string" || !(passenger.from.length > 0)) {
    return "INVALID PASS";
  }
  if (typeof passenger.to !== "string" || !(passenger.to.length > 0)) {
    return "INVALID PASS";
  }
  if (typeof passenger.classType !== "string" || !(passenger.classType.length > 0)) {
    return "INVALID PASS";
  }
  
  const lowerCaseClass = passenger.classType.toLowerCase();
  if (!(lowerCaseClass === "first" || lowerCaseClass === "second")) {
    return "INVALID PASS";
  }

  // Pass ID code
  const classTypeFirstLetter = lowerCaseClass.charAt(0).toUpperCase();

  const fromField = passenger.from;
  let fromFieldFirstThreeLaters = fromField.slice(0, 3);
  
  const toField = passenger.to;
  let toFieldFirstThreeLaters = toField.slice(0, 3);

  let PASSID = classTypeFirstLetter + fromFieldFirstThreeLaters + toFieldFirstThreeLaters;
  const uppeerCasePASSID = PASSID.toUpperCase();

  // formating
  let name = passenger.name;
  const upeercaseName = name.toUpperCase();

  let from = passenger.from;
  const lowercaseFrom = from.toLowerCase();
  const fromTitleCase = lowercaseFrom.charAt(0).toUpperCase() + lowercaseFrom.slice(1, from.length);

  let to = passenger.to;
  const toLowerCase = to.toLowerCase();
  const toTitleCase = toLowerCase.charAt(0).toUpperCase() + toLowerCase.slice(1, to.length);
  
  let classType = passenger.classType;
  const upperCaseclassType = classType.toUpperCase();

  return `MUMBAI LOCAL PASS\n---\nName: ${upeercaseName}\nFrom: ${fromTitleCase}\nTo: ${toTitleCase}\nClass: ${upperCaseclassType}\nPass ID: ${uppeerCasePASSID}`
}
