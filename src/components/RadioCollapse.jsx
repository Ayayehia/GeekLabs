import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";
import Arrow from "../assets/Arrow.png";
import { useState } from "react";
// import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
const RadioCollapse = ({ title, notificationMethods }) => {
  // const [check, Setchecked] = useState("");
  return (
    <Collapsible defaultOpen={true} className="my-6 ">
      <h3>
        <span className="font-bold flex items-center mt-4 gap-1 mb-2 text-nowrap font-poppins">
          {/* <img src={Arrow} className="w-2 h-[6px]" /> */}
          {title}
        </span>
      </h3>
      <CollapsibleContent>
        <RadioGroup defaultValue={notificationMethods[0].id}>
          {notificationMethods.map((notificationMethod) => (
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value={notificationMethod.id}
                id={notificationMethod.id}
              />

              <label htmlFor={notificationMethod.id}>
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </RadioGroup>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default RadioCollapse;
// <div key={notificationMethod.id} className="flex items-center  ">
//   <input
//     onClick={() => {
//       Setchecked(notificationMethod.id);
//     }}
//     value={notificationMethod.id}
//     id={notificationMethod.id}
//     name="notification-method"
//     type="radio"
//     // Checked={notificationMethod.id === "email"}
//     checked={notificationMethod.id === check}
//     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 bg-black"
//   />
//   <label
//     htmlFor={notificationMethod.id}
//     className="ml-3 block text-sm leading-6 text-white text-nowrap"
//   >
//     {notificationMethod.title}
//   </label>
// </div>
